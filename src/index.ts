import Entity from "./entities/Entity";
import Position from "./components/Position";
import PlayerControlled from "./components/PlayerControlled";
import Sprite from "./components/Sprite";
import Wanderer from "./components/Wanderer";
import render from "./systems/render";
import keyboardControl from "./systems/keyboardControl";
import wander from "./systems/wander";

const player = new Entity([
  new Position(30, 30),
  new Sprite("leghornChick", "walkDown"),
  new PlayerControlled(),
]);

const npc = new Entity([
  new Position(60, 60),
  new Sprite("leghornChick", "walkDown"),
  new Wanderer(),
]);

const systems = [keyboardControl, wander, render];

let lastTime = performance.now();

const gameLoop = () => {
  const now = performance.now();
  const delta = lastTime - now;
  lastTime = now;

  systems.forEach((system) => {
    system(delta, now);
  });

  requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);
