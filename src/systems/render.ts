import { entitiesByComponent } from "../entities/Entity";
import Position from "../components/Position";
import sprite from "../sprite";

const width = 200;
const height = 200;
const deviceRatio = window.devicePixelRatio;
const scale = 2;

const spriteWidth = 12;
const spriteHeight = 14;

const canvas =
  document.querySelector("canvas") ||
  (() => {
    const el = document.createElement("canvas");
    document.body.appendChild(el);
    return el;
  })();

canvas.width = width * deviceRatio;
canvas.height = height * deviceRatio;
canvas.style.width = `${width}px`;
canvas.style.height = `${height}px`;

const render = () => {
  const context = canvas.getContext("2d");
  if (!context) return;

  // reset
  context.clearRect(0, 0, canvas.width, canvas.height);

  const entities = entitiesByComponent[Position.name] || [];
  entities.forEach((entity) => {
    const { x, y } = <Position>entity.components[Position.name];

    context.imageSmoothingEnabled = false;
    context.drawImage(
      sprite,
      0,
      0,
      spriteWidth,
      spriteHeight,
      x - Math.floor((spriteWidth * deviceRatio * scale) / 2),
      y - Math.floor((spriteHeight * deviceRatio * scale) / 2),
      spriteWidth * deviceRatio * scale,
      spriteHeight * deviceRatio * scale
    );
  });
};

export default render;
