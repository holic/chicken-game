class SpriteSheet {
  image: HTMLImageElement;
  loaded: boolean;

  constructor(imagePath: string) {
    this.image = new Image();
    this.image.onload = () => {
      this.loaded = true;
    };
    this.image.onerror = (error) => {
      throw error;
    };
    this.image.src = imagePath;
  }
}

export default SpriteSheet;
