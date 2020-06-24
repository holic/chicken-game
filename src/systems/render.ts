import { entitiesByComponent } from "../entities/Entity";
import Position, { Direction } from "../components/Position";
import sprite from "../sprite";

const width = 400;
const height = 400;
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

  const entities = (entitiesByComponent[Position.name] || []).slice();

  entities.sort((entityA, entityB) => {
    const { y: ay, lastMovement: ax } = <Position>(
      entityA.components[Position.name]
    );
    const { y: by, lastMovement: bx } = <Position>(
      entityB.components[Position.name]
    );

    if (ay !== by) {
      return ay - by;
    }
    return ax - bx;
  });

  entities.forEach((entity) => {
    const { x, y, facing } = <Position>entity.components[Position.name];

    let spriteSourceY = 0;
    if (facing === Direction.Down) {
      spriteSourceY = 0;
    } else if (facing === Direction.Left) {
      spriteSourceY = spriteHeight;
    } else if (facing === Direction.Right) {
      spriteSourceY = spriteHeight * 2;
    } else if (facing === Direction.Up) {
      spriteSourceY = spriteHeight * 3;
    }

    context.imageSmoothingEnabled = false;
    context.drawImage(
      sprite,
      0,
      spriteSourceY,
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
