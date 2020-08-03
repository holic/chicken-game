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
      walkDown: {
        frames: [0, 1, 0, 2, 0, 1, 0, 0],
        frameRate: 8,
      },
    },
  });

  const { canvas, context } = kontra.init(document.querySelector("canvas"));

  const player = kontra.Sprite({
    x: 100,
    y: 100,
    width: spriteSheet.frame.width * 8,
    height: spriteSheet.frame.height * 8,
    animations: spriteSheet.animations,
  });

  const loop = kontra.GameLoop({
    update() {
      player.update();
    },
    render() {
      player.render();
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
