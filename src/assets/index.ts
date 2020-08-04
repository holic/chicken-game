import SpriteSheet from "./SpriteSheet";
import Position from "../components/Position";
import Sprite, { Facing } from "../components/Sprite";
import leghornChick from "./leghorn-chick.png";
import leghornPullet from "./leghorn-pullet.png";
import leghornHen from "./leghorn-hen.png";

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
      walkDown: {
        frames: [1, 0, 2, 0, 1],
        loopStart: 0,
        loopEnd: 3,
      },
      walkLeft: {
        frames: [1, 0, 2, 0, 1].map((i) => i + 3),
        loopStart: 0,
        loopEnd: 3,
      },
      walkRight: {
        frames: [1, 0, 2, 0, 1].map((i) => i + 6),
        loopStart: 0,
        loopEnd: 3,
      },
      walkUp: {
        frames: [1, 0, 2, 0, 1].map((i) => i + 9),
        loopStart: 0,
        loopEnd: 3,
      },
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
      walkDown: {
        frames: [0, 1, 2, 1, 0, 3, 1, 2, 1, 0],
        loopStart: 2,
        loopEnd: 6,
      },
      walkLeft: {
        frames: [0, 1, 2, 1, 0, 3, 1, 2, 1, 0].map((i) => i + 4),
        loopStart: 2,
        loopEnd: 6,
      },
      walkRight: {
        frames: [0, 1, 2, 1, 0, 3, 1, 2, 1, 0].map((i) => i + 8),
        loopStart: 2,
        loopEnd: 6,
      },
      walkUp: {
        frames: [0, 1, 2, 1, 0, 3, 1, 2, 1, 0].map((i) => i + 12),
        loopStart: 2,
        loopEnd: 6,
      },
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
  leghornHen: new SpriteSheet({
    imagePath: leghornHen,
    frameWidth: 22,
    frameHeight: 23,
    animations: {
      idleDown: [0],
      idleLeft: [4],
      idleRight: [8],
      idleUp: [12],
      walkDown: {
        frames: [0, 1, 2, 1, 0, 3, 1, 2, 1, 0],
        loopStart: 2,
        loopEnd: 6,
      },
      walkLeft: {
        frames: [0, 1, 2, 1, 0, 3, 1, 2, 1, 0].map((i) => i + 4),
        loopStart: 2,
        loopEnd: 6,
      },
      walkRight: {
        frames: [0, 1, 2, 1, 0, 3, 1, 2, 1, 0].map((i) => i + 8),
        loopStart: 2,
        loopEnd: 6,
      },
      walkUp: {
        frames: [0, 1, 2, 1, 0, 3, 1, 2, 1, 0].map((i) => i + 12),
        loopStart: 2,
        loopEnd: 6,
      },
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
