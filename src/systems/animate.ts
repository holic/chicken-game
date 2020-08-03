import { entitiesWithComponents } from "../entities/Entity";
import Sprite from "../components/Sprite";

const animate = (delta: number, time: number) => {
  const entities = entitiesWithComponents([Sprite]);

  entities.forEach((entity) => {
    const sprite = entity.getComponent(Sprite);

    if (time - sprite.lastFrameUpdate > 1000 / 8) {
      sprite.frame = (sprite.frame + 1) % sprite.animation.length;
      sprite.lastFrameUpdate = time;
    }
  });
};

export default animate;
