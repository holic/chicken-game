import { entitiesWithComponents } from "../entities/Entity";
import Sprite from "../components/Sprite";

const animate = (delta: number, time: number) => {
  const entities = entitiesWithComponents([Sprite]);

  entities.forEach((entity) => {
    const sprite = entity.getComponent(Sprite);
    sprite.update(delta, time);
  });
};

export default animate;
