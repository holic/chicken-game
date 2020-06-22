import { entitiesByComponent } from "../entities/Entity";
import Position from "../components/Position";

const width = 200;
const height = 200;

const canvas =
  document.querySelector("canvas") ||
  (() => {
    const el = document.createElement("canvas");
    document.body.appendChild(el);
    return el;
  })();

canvas.width = width;
canvas.height = height;

const render = () => {
  const context = canvas.getContext("2d");
  if (!context) return;

  // reset
  context.clearRect(0, 0, width, height);

  const entities = entitiesByComponent[Position.name] || [];
  entities.forEach((entity) => {
    const { x, y } = <Position>entity.components[Position.name];

    context.fillRect(x, y, 3, 3);
  });
};

export default render;
