import Entity from "../entities/Entity";

interface Animation {
  frames: number[];
  loopStart: number;
  loopEnd: number;
}

interface Arguments {
  imagePath: string;
  frameWidth: number;
  frameHeight: number;
  animations: {
    [name: string]: number[] | Animation;
  };
  entityUpdate?: (entity: Entity) => void;
}

class SpriteSheet {
  image: HTMLImageElement;
  loaded: boolean;

  frameWidth: number;
  frameHeight: number;
  animations: {
    [name: string]: Animation;
  };
  entityUpdate: (entity: Entity) => void;

  constructor(args: Arguments) {
    this.image = new Image();
    this.image.onload = () => {
      this.loaded = true;
    };
    this.image.onerror = (error) => {
      throw error;
    };
    this.image.src = args.imagePath;
    this.frameWidth = args.frameWidth;
    this.frameHeight = args.frameHeight;
    this.animations = {};
    Object.entries(args.animations).forEach(([name, animation]) => {
      this.animations[name] = Array.isArray(animation)
        ? { frames: animation, loopStart: 0, loopEnd: animation.length - 1 }
        : animation;
    });
    this.entityUpdate = args.entityUpdate || (() => {});
  }
}

export default SpriteSheet;
