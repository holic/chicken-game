import SpriteSheet from "./SpriteSheet";
import leghornChick from "./leghorn-chick.png";
import leghornPullet from "./leghorn-pullet.png";

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
  leghornPullet: new SpriteSheet({
    imagePath: leghornPullet,
    frameWidth: 16,
    frameHeight: 24,
    animations: {
      idleDown: [0],
      idleLeft: [9],
      idleRight: [18],
      idleUp: [27],
      walkDown: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      walkLeft: [9, 10, 11, 12, 13, 14, 15, 16, 17],
      walkRight: [18, 19, 20, 21, 22, 23, 24, 25, 26],
      walkUp: [27, 28, 29, 30, 31, 32, 33, 34, 35],
    },
  }),
};

export default assets;
