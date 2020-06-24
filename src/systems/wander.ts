import { entitiesByComponent } from "../entities/Entity";
import Position, { Direction, directions } from "../components/Position";
import Wanderer from "../components/Wanderer";

const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const wander = (delta: number) => {
  const entities = entitiesByComponent[Wanderer.name] || [];
  entities.forEach((entity) => {
    if (rand(1, 100) > 5) return;

    const position = <Position | null>entity.components[Position.name];
    if (!position) return;

    if (rand(0, 1)) {
      // change direction
      const index = directions.indexOf(position.facing);
      const rotation = rand(-1, 1);
      const newIndex =
        (index + rotation + directions.length) % directions.length;
      position.facing = directions[newIndex];
    } else {
      // walk in the current direction
      if (position.facing === Direction.Up) {
        position.y -= 2;
      } else if (position.facing === Direction.Down) {
        position.y += 2;
      } else if (position.facing === Direction.Left) {
        position.x -= 2;
      } else if (position.facing === Direction.Right) {
        position.x += 2;
      }
    }
  });
};

export default wander;
