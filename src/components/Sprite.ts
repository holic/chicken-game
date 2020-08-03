import Component from "./Component";
import assets from "../assets";
import SpriteSheet from "../assets/SpriteSheet";
import { entitiesWithComponents } from "../entities/Entity";

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

  state: State = State.Idle;
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
    // Pin to 8 fps
    if (time - this.lastFrameUpdate < 1000 / 8) {
      return;
    }

    const animation = this.animation;
    if (!animation) return;

    this.frame += 1;
    this.lastFrameUpdate = time;

    // Move to idle once we reach the last frame
    const frames = this.spriteSheet.animations[animation];
    if (this.frame >= frames.length) {
      this.state = State.Idle;
      this.reset();
      return;
    }
  }
}

export default Sprite;
export { Facing, State };
