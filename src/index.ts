import Entity from "./entities/Entity";
import Position from "./components/Position";
import PlayerControlled from "./components/PlayerControlled";
import Sprite from "./components/Sprite";
import Wanderer from "./components/Wanderer";
import render from "./systems/render";
import playerControl from "./systems/playerControl";
import wander from "./systems/wander";
import animate from "./systems/animate";

const player = new Entity([
  new Position(30, 30),
  new Sprite("leghornPullet"),
  new PlayerControlled(),
]);

const npc = new Entity([
  new Position(80, 60),
  new Sprite("leghornChick"),
  new Wanderer(),
]);

const npc2 = new Entity([
  new Position(40, 60),
  new Sprite("leghornChick"),
  new Wanderer(),
]);

const npc3 = new Entity([
  new Position(50, 100),
  new Sprite("leghornChick"),
  new Wanderer(),
]);

const systems = [playerControl, wander, animate, render];

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
