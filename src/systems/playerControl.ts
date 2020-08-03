import { entitiesForComponents } from "../entities/Entity";
import Position from "../components/Position";
import PlayerControlled from "../components/PlayerControlled";
import Sprite, { Facing, State } from "../components/Sprite";

const keysDown = new Set<string>();

document.addEventListener("keydown", (event) => {
  keysDown.add(event.key);
});

document.addEventListener("keyup", (event) => {
  keysDown.delete(event.key);
});

window.addEventListener("blur", () => {
  keysDown.clear();
});

const playerControl = (delta: number, time: number) => {
  const entities = entitiesForComponents([PlayerControlled, Position, Sprite]);
  entities.forEach((entity) => {
    const position = entity.getComponent(Position);
    const sprite = entity.getComponent(Sprite);

    if (keysDown.has("ArrowRight")) {
      sprite.requestedFacing = Facing.Right;
      sprite.requestedState = State.Walking;
    } else if (keysDown.has("ArrowLeft")) {
      sprite.requestedFacing = Facing.Left;
      sprite.requestedState = State.Walking;
    } else if (keysDown.has("ArrowUp")) {
      sprite.requestedFacing = Facing.Up;
      sprite.requestedState = State.Walking;
    } else if (keysDown.has("ArrowDown")) {
      sprite.requestedFacing = Facing.Down;
      sprite.requestedState = State.Walking;
    } else {
      sprite.requestedState = State.Idle;
    }
  });
};

export default playerControl;
