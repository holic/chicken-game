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

const render = (delta: number, time: number) => {
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
    const sprite = entity.getComponent(Sprite);
    if (time - sprite.lastFrameUpdate > 1000 / 8) {
      sprite.frame = (sprite.frame + 1) % sprite.animation.length;
      sprite.lastFrameUpdate = time;
    }

    const { x, y, facing } = entity.getComponent(Position);
    const { spriteSheet, animation, frame } = sprite;

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

    // let spriteSourceY = 0;
    // if (facing === Direction.Down) {
    //   spriteSourceY = 0;
    // } else if (facing === Direction.Left) {
    //   spriteSourceY = spriteHeight;
    // } else if (facing === Direction.Right) {
    //   spriteSourceY = spriteHeight * 2;
    // } else if (facing === Direction.Up) {
    //   spriteSourceY = spriteHeight * 3;
    // }

    // context.drawImage(
    //   spriteSheet,
    //   0,
    //   spriteSourceY,
    //   spriteWidth,
    //   spriteHeight,
    //   x - Math.floor((spriteWidth * deviceRatio * scale) / 2),
    //   y - Math.floor((spriteHeight * deviceRatio * scale) / 2),
    //   spriteWidth * deviceRatio * scale,
    //   spriteHeight * deviceRatio * scale
    // );
  });
};

export default render;
