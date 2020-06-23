import Entity from "./entities/Entity";
import Position from "./components/Position";
import PlayerControlled from "./components/PlayerControlled";
import Wanderer from "./components/Wanderer";
import render from "./systems/render";
import keyboardControl from "./systems/keyboardControl";
import wander from "./systems/wander";

new Entity([new Position(), new PlayerControlled()]);
new Entity([new Position(100, 100), new Wanderer()]);

const systems = [render, keyboardControl, wander];

let lastTime = performance.now();

const gameLoop = () => {
  const now = performance.now();
  const delta = lastTime - now;
  lastTime = now;

  systems.forEach((system) => {
    system(delta);
  });

  requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);
