interface Arguments {
  imagePath: string;
  frameWidth: number;
  frameHeight: number;
  animations: {
    [name: string]: number[];
  };
}

class SpriteSheet {
  image: HTMLImageElement;
  loaded: boolean;

  frameWidth: number;
  frameHeight: number;
  animations: {
    [name: string]: number[];
  };

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
  }
}

export default SpriteSheet;
