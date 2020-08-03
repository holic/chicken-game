import Component from "./Component";
import assets from "../assets";
import SpriteSheet from "../assets/SpriteSheet";
import { entitiesForComponents } from "../entities/Entity";
import Position from "./Position";

enum State {
  Idle = "idle",
  Walking = "walking",
}

enum Facing {
  Down = "down",
  Left = "left",
  Up = "up",
  Right = "right",
}

class Sprite extends Component {
  spriteSheet: SpriteSheet;

  requestedState: State = State.Idle;
  state: State = State.Idle;
  requestedFacing: Facing = Facing.Down;
  facing: Facing = Facing.Down;
  frame: number = 0;
  lastFrameUpdate: number = 0;

  constructor(spriteSheet: string) {
    super();
    this.spriteSheet = assets[spriteSheet];
  }

  get animation() {
    if (this.state === State.Idle) {
      if (this.facing === Facing.Down) {
        return "idleDown";
      }
      if (this.facing === Facing.Left) {
        return "idleLeft";
      }
      if (this.facing === Facing.Right) {
        return "idleRight";
      }
      if (this.facing === Facing.Up) {
        return "idleUp";
      }
    }
    if (this.state === State.Walking) {
      if (this.facing === Facing.Down) {
        return "walkDown";
      }
      if (this.facing === Facing.Left) {
        return "walkLeft";
      }
      if (this.facing === Facing.Right) {
        return "walkRight";
      }
      if (this.facing === Facing.Up) {
        return "walkUp";
      }
    }
  }

  reset() {
    this.frame = 0;
    this.lastFrameUpdate = 0;
  }

  update(delta: number, time: number) {
    // Pin to 8 FPS
    if (time - this.lastFrameUpdate < 1000 / 8) {
      return;
    }

    const animation = this.animation;
    if (!animation) return;

    this.frame += 1;
    this.lastFrameUpdate = time;

    // Move
    if (
      (this.facing === Facing.Down && this.frame === 3) ||
      (this.facing !== Facing.Down && this.frame === 2)
    ) {
      entitiesForComponents([Position, Sprite])
        .filter((entity) => entity.getComponent(Sprite) === this)
        .forEach((entity) => {
          const position = entity.getComponent(Position);
          if (this.facing === Facing.Up) {
            position.y -= 3;
          } else if (this.facing === Facing.Down) {
            position.y += 3;
          } else if (this.facing === Facing.Left) {
            position.x -= 3;
          } else if (this.facing === Facing.Right) {
            position.x += 3;
          }
        });
    }

    const frames = this.spriteSheet.animations[animation];
    if (
      // If we're on the last frame and still moving, cut the animation short by one frame
      (this.state === this.requestedState && this.frame >= frames.length - 1) ||
      // Otherwise reset the animation
      this.frame >= frames.length
    ) {
      this.state = this.requestedState;
      this.facing = this.requestedFacing;
      this.frame = 0;
    }
  }
}

export default Sprite;
export { Facing, State };
