import Component from "./Component";
import assets from "../assets";
import SpriteSheet from "../assets/SpriteSheet";
import { entitiesForComponents } from "../entities/Entity";

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
    // Pin to 12 FPS
    if (time - this.lastFrameUpdate < 1000 / 12) {
      return;
    }

    const animation = this.animation;
    if (!animation) return;

    this.frame += 1;
    this.lastFrameUpdate = time;

    entitiesForComponents([Sprite])
      .filter((entity) => entity.getComponent(Sprite) === this)
      .map(this.spriteSheet.entityUpdate);

    const { frames, loopStart, loopEnd } = this.spriteSheet.animations[
      animation
    ];

    // If we're on the last frame of the loop and still moving, loop
    if (this.state === this.requestedState && this.frame > loopEnd) {
      this.state = this.requestedState;
      this.facing = this.requestedFacing;
      this.frame = loopStart;
    }
    // Otherwise reset the animation
    else if (this.frame >= frames.length) {
      this.state = this.requestedState;
      this.facing = this.requestedFacing;
      this.frame = 0;
    }
  }
}

export default Sprite;
export { Facing, State };
