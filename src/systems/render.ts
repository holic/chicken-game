import { entitiesForComponents } from "../entities/Entity";
import Position from "../components/Position";
import Sprite from "../components/Sprite";

const canvas =
  document.querySelector("canvas") ||
  (() => {
    const el = document.createElement("canvas");
    document.body.appendChild(el);
    return el;
  })();

let lastRender: number = 0;

const render = (delta: number, time: number) => {
  // Pin to 60 FPS
  if (time - lastRender < 1000 / 60) {
    return;
  }
  lastRender = time;

  const context = canvas.getContext("2d");
  if (!context) return;

  // reset
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.imageSmoothingEnabled = false;

  const entities = entitiesForComponents([Position, Sprite]);

  entities.sort((entityA, entityB) => {
    const positionA = entityA.getComponent(Position);
    const positionB = entityB.getComponent(Position);

    if (positionA.y !== positionB.y) {
      return positionA.y - positionB.y;
    }
    return positionA.lastMovement - positionB.lastMovement;
  });

  entities.forEach((entity) => {
    const { x, y } = entity.getComponent(Position);
    const { spriteSheet, animation, frame } = entity.getComponent(Sprite);
    if (!animation) return;

    const width = spriteSheet.frameWidth;
    const height = spriteSheet.frameHeight;

    const animationFrame = spriteSheet.animations[animation][frame];
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
      x - Math.floor(width / 2),
      y - height + 1,
      width,
      height
    );
  });
};

export default render;
