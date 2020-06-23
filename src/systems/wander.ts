import { entitiesByComponent } from "../entities/Entity";
import Position from "../components/Position";
import Wanderer from "src/components/Wanderer";

const randomBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const wander = (delta: number) => {
  const entities = entitiesByComponent[Wanderer.name] || [];
  entities.forEach((entity) => {
    if (randomBetween(1, 100) > 5) return;

    const position = <Position | null>entity.components[Position.name];
    if (!position) return;

    const direction = randomBetween(1, 4);
    if (direction === 1) {
      position.x += 2;
    } else if (direction === 2) {
      position.x -= 2;
    } else if (direction === 3) {
      position.y -= 2;
    } else if (direction === 4) {
      position.y += 2;
    }
  });
};

export default wander;
