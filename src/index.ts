import Entity from "./entities/Entity";
import Position from "./components/Position";
import PlayerControlled from "./components/PlayerControlled";
import render from "./systems/render";
import keyboardControl from "./systems/keyboardControl";

new Entity([new Position(), new PlayerControlled()]);
new Entity([new Position(100, 100)]);

const systems = [render, keyboardControl];

const gameLoop = () => {
  systems.forEach((system) => {
    system();
  });
  requestAnimationFrame(gameLoop);
};
requestAnimationFrame(gameLoop);
