import { entitiesWithComponents } from "../entities/Entity";
import Position, { Direction } from "../components/Position";
import Sprite from "../components/Sprite";

const canvas =
  document.querySelector("canvas") ||
  (() => {
    const el = document.createElement("canvas");
    document.body.appendChild(el);
    return el;
  })();

const render = () => {
  const context = canvas.getContext("2d");
  if (!context) return;

  // reset
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.imageSmoothingEnabled = false;

  const entities = entitiesWithComponents([Position, Sprite]);

  entities.sort((entityA, entityB) => {
    const { y: ay, lastMovement: ax } = entityA.getComponent(Position);
    const { y: by, lastMovement: bx } = entityB.getComponent(Position);

    if (ay !== by) {
      return ay - by;
    }
    return ax - bx;
  });

  entities.forEach((entity) => {
    const { x, y, facing } = entity.getComponent(Position);
    const { spriteSheet, animation, frame } = entity.getComponent(Sprite);

    const width = spriteSheet.frameWidth;
    const height = spriteSheet.frameHeight;

    const animationFrame = animation[frame];
    const framesPerRow = Math.floor(spriteSheet.image.width / width);
    const frameX = animationFrame % framesPerRow;
    const frameY = Math.floor(animationFrame / framesPerRow);

    const sourceX = frameX * width;
    const sourceY = frameY * height;

    context.drawImage(
      spriteSheet.image,
      sourceX,
      sourceY,
      width,
      height,
      x,
      y,
      width,
      height
    );
  });
};

export default render;
