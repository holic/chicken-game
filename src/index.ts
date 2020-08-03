import kontra from "kontra";

import Entity from "./entities/Entity";
import Position from "./components/Position";
import PlayerControlled from "./components/PlayerControlled";
import Wanderer from "./components/Wanderer";
import render from "./systems/render";
import keyboardControl from "./systems/keyboardControl";
import wander from "./systems/wander";

const CHICK_MOVE_LEGHORN = "assets/Leghorn_lv1_Move.png";

const loadImage = (url: string) => {
  const img = new Image();
  return new Promise((resolve, reject) => {
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
};

const init = async () => {
  // TODO: loading screen?
  const image = await loadImage(CHICK_MOVE_LEGHORN);

  const spriteSheet = kontra.SpriteSheet({
    image: image,
    frameWidth: 11,
    frameHeight: 11,
    animations: {
      idleDown: {
        frames: [0],
      },
      idleLeft: {
        frames: [3],
      },
      idleRight: {
        frames: [6],
      },
      idleUp: {
        frames: [9],
      },
      walkDown: {
        frames: [0, 1, 0, 2, 0, 1, 0, 0],
        frameRate: 8,
      },
      walkLeft: {
        frames: [3, 4, 3, 5, 3, 4, 3, 3],
        frameRate: 8,
      },
      walkRight: {
        frames: [6, 7, 6, 8, 6, 7, 6, 6],
        frameRate: 8,
      },
      walkUp: {
        frames: [9, 10, 9, 11, 9, 10, 9, 9],
        frameRate: 8,
      },
    },
  });

  const { canvas, context } = kontra.init(document.querySelector("canvas"));

  const player = kontra.Sprite({
    x: 12,
    y: 12,
    width: spriteSheet.frame.width,
    height: spriteSheet.frame.height,
    currentAnimation: spriteSheet.animations.walkDown.clone(),
  });

  console.log(player);

  const entities = [player];

  const loop = kontra.GameLoop({
    update() {
      entities.forEach((entity) => entity.update());
    },
    render() {
      entities.forEach((entity) => entity.render());
    },
  });

  loop.start();
};

init();

// const player = new Entity([new Position(30, 30), new PlayerControlled()]);
// const npc = new Entity([new Position(100, 100), new Wanderer()]);

// console.log(player, npc);

// const systems = [render, keyboardControl, wander];

// let lastTime = performance.now();

// const gameLoop = () => {
//   const now = performance.now();
//   const delta = lastTime - now;
//   lastTime = now;

//   systems.forEach((system) => {
//     system(delta, now);
//   });

//   requestAnimationFrame(gameLoop);
// };

// requestAnimationFrame(gameLoop);
