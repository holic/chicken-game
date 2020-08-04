import Entity from "../entities/Entity";

interface Arguments {
  imagePath: string;
  frameWidth: number;
  frameHeight: number;
  animations: {
    [name: string]: number[];
  };
  entityUpdate?: (entity: Entity) => void;
}

class SpriteSheet {
  image: HTMLImageElement;
  loaded: boolean;

  frameWidth: number;
  frameHeight: number;
  animations: {
    [name: string]: number[];
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
    this.animations = args.animations;
    this.entityUpdate = args.entityUpdate || (() => {});
  }
}

export default SpriteSheet;
