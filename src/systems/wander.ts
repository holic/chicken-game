import { entitiesForComponents } from "../entities/Entity";
import Sprite, { Facing, State } from "../components/Sprite";
import Wanderer from "../components/Wanderer";
import Position from "../components/Position";

const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const wander = (delta: number, time: number) => {
  const entities = entitiesForComponents([Wanderer, Sprite, Position]);
  entities.forEach((entity) => {
    if (rand(1, 100) > 5) return;

    const sprite = entity.getComponent(Sprite);
    if (rand(1, 100) > 20) {
      sprite.requestedState = State.Idle;
      return;
    }

    const position = entity.getComponent(Position);

    if (rand(0, 1)) {
      sprite.requestedFacing = Facing.Right;
      sprite.requestedState = State.Walking;
      position.lastMovement = time;
    } else if (rand(0, 1)) {
      sprite.requestedFacing = Facing.Left;
      sprite.requestedState = State.Walking;
      position.lastMovement = time;
    } else if (rand(0, 1)) {
      sprite.requestedFacing = Facing.Up;
      sprite.requestedState = State.Walking;
      position.lastMovement = time;
    } else if (rand(0, 1)) {
      sprite.requestedFacing = Facing.Down;
      sprite.requestedState = State.Walking;
      position.lastMovement = time;
    } else {
      sprite.requestedState = State.Idle;
    }
  });
};

export default wander;
