import { entitiesByComponent } from "../entities/Entity";
import Position from "../components/Position";
import Wanderer, { Direction, directions } from "../components/Wanderer";

const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const wander = (delta: number) => {
  const entities = entitiesByComponent[Wanderer.name] || [];
  entities.forEach((entity) => {
    if (rand(1, 100) > 5) return;

    const position = <Position | null>entity.components[Position.name];
    const wanderer = <Wanderer | null>entity.components[Wanderer.name];
    if (!position || !wanderer) return;

    if (rand(0, 1)) {
      // change direction
      const index = directions.indexOf(wanderer.direction);
      const rotation = rand(-1, 1);
      const newIndex =
        (index + rotation + directions.length) % directions.length;
      wanderer.direction = directions[newIndex];
    } else {
      // walk in the current direction
      if (wanderer.direction === Direction.Up) {
        position.y -= 2;
      } else if (wanderer.direction === Direction.Down) {
        position.y += 2;
      } else if (wanderer.direction === Direction.Left) {
        position.x -= 2;
      } else if (wanderer.direction === Direction.Right) {
        position.x += 2;
      }
    }
  });
};

export default wander;
