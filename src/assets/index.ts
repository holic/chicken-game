import SpriteSheet from "./SpriteSheet";
import leghornChick from "./leghorn-chick.png";
import Sprite from "src/components/Sprite";

interface Assets {
  [name: string]: SpriteSheet;
}

const assets: Assets = {
  leghornChick: new SpriteSheet({
    imagePath: leghornChick,
    frameWidth: 11,
    frameHeight: 11,
    animations: {
      idleDown: [0],
      idleLeft: [3],
      idleRight: [6],
      idleUp: [9],
      walkDown: [0, 1, 0, 2, 0, 1, 0, 0],
      walkLeft: [3, 4, 3, 5, 3, 4, 3, 3],
      walkRight: [6, 7, 6, 8, 6, 7, 6, 6],
      walkUp: [9, 10, 9, 11, 9, 10, 9, 9],
    },
  }),
};

export default assets;
