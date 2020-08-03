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
      walkDown: [1, 0, 2, 0, 1],
      walkLeft: [4, 3, 5, 3, 4],
      walkRight: [7, 6, 8, 6, 7],
      walkUp: [10, 9, 11, 9, 10],
    },
  }),
};

export default assets;
