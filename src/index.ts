import Entity from "./entities/Entity";
import Position from "./components/Position";
import render from "./systems/render";

new Entity([new Position()]);
new Entity([new Position(100, 100)]);

const systems = [render];

const gameLoop = () => {
  console.log("game loop");
  systems.forEach((system) => {
    system();
  });
  // requestAnimationFrame(gameLoop);
};
requestAnimationFrame(gameLoop);
