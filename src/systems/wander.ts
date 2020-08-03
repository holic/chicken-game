import { entitiesWithComponents } from "../entities/Entity";
import Sprite, { Facing, State } from "../components/Sprite";
import Wanderer from "../components/Wanderer";

const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const wander = (delta: number, time: number) => {
  const entities = entitiesWithComponents([Wanderer, Sprite]);
  entities.forEach((entity) => {
    if (rand(1, 100) > 5) return;

    const sprite = entity.getComponent(Sprite);
    if (rand(1, 100) > 20) {
      sprite.requestedState = State.Idle;
      return;
    }

    if (rand(0, 1)) {
      sprite.requestedFacing = Facing.Right;
      sprite.requestedState = State.Walking;
    } else if (rand(0, 1)) {
      sprite.requestedFacing = Facing.Left;
      sprite.requestedState = State.Walking;
    } else if (rand(0, 1)) {
      sprite.requestedFacing = Facing.Up;
      sprite.requestedState = State.Walking;
    } else if (rand(0, 1)) {
      sprite.requestedFacing = Facing.Down;
      sprite.requestedState = State.Walking;
    } else {
      sprite.requestedState = State.Idle;
    }
  });
};

export default wander;
