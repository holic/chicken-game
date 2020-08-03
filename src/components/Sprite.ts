import Component from "./Component";
import assets from "../assets";
import SpriteSheet from "../assets/SpriteSheet";

class Sprite extends Component {
  spriteSheet: SpriteSheet;
  animation: number[];
  frame: number = 0;
  lastFrameUpdate: number = 0;

  constructor(spriteSheet: string, animation: string) {
    super();
    this.spriteSheet = assets[spriteSheet];
    this.animation = this.spriteSheet.animations[animation];
  }

  reset() {
    this.frame = 0;
  }
}

export default Sprite;
