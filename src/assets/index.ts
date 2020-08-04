import SpriteSheet from "./SpriteSheet";
import leghornChick from "./leghorn-chick.png";
import leghornPullet from "./leghorn-pullet.png";
import Position from "../components/Position";
import Sprite, { Facing } from "../components/Sprite";

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
    entityUpdate: (entity) => {
      const position = entity.getComponent(Position);
      if (!position) return;
      const sprite = entity.getComponent(Sprite);
      if (!sprite) return;

      if (
        (sprite.facing === Facing.Down && sprite.frame === 3) ||
        (sprite.facing !== Facing.Down && sprite.frame === 2)
      ) {
        if (sprite.facing === Facing.Up) {
          position.y -= 3;
        } else if (sprite.facing === Facing.Down) {
          position.y += 3;
        } else if (sprite.facing === Facing.Left) {
          position.x -= 3;
        } else if (sprite.facing === Facing.Right) {
          position.x += 3;
        }
      }
    },
  }),
  leghornPullet: new SpriteSheet({
    imagePath: leghornPullet,
    frameWidth: 16,
    frameHeight: 17,
    animations: {
      idleDown: [0],
      idleLeft: [4],
      idleRight: [8],
      idleUp: [12],
      walkDown: [0, 1, 2, 1, 0, 3, 1, 2, 1, 0],
      walkLeft: [0, 1, 2, 1, 0, 3, 1, 2, 1, 0].map((i) => i + 4),
      walkRight: [0, 1, 2, 1, 0, 3, 1, 2, 1, 0].map((i) => i + 8),
      walkUp: [0, 1, 2, 1, 0, 3, 1, 2, 1, 0].map((i) => i + 12),
    },
    entityUpdate: (entity) => {
      const position = entity.getComponent(Position);
      if (!position) return;
      const sprite = entity.getComponent(Sprite);
      if (!sprite) return;

      if (
        (sprite.facing === Facing.Down && sprite.frame === 6) ||
        (sprite.facing !== Facing.Down && sprite.frame === 5)
      ) {
        if (sprite.facing === Facing.Up) {
          position.y -= 3;
        } else if (sprite.facing === Facing.Down) {
          position.y += 3;
        } else if (sprite.facing === Facing.Left) {
          position.x -= 3;
        } else if (sprite.facing === Facing.Right) {
          position.x += 3;
        }
      }
    },
  }),
};

export default assets;
