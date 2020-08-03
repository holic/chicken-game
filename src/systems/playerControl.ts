import { entitiesWithComponents } from "../entities/Entity";
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
  const entities = entitiesWithComponents([PlayerControlled, Position, Sprite]);
  entities.forEach((entity) => {
    const position = entity.getComponent(Position);
    const sprite = entity.getComponent(Sprite);

    // if (time - position.lastMovement < (1000 / 8) * animationFrames) {
    //   return;
    // }

    if (sprite.state !== State.Idle) {
      return;
    }

    if (keysDown.has("ArrowRight") && sprite.facing !== Facing.Right) {
      sprite.facing = Facing.Right;
      sprite.state = State.Walking;
      position.lastMovement = time;
    } else if (keysDown.has("ArrowLeft") && sprite.facing !== Facing.Left) {
      sprite.facing = Facing.Left;
      sprite.state = State.Walking;
      position.lastMovement = time;
    } else if (keysDown.has("ArrowUp") && sprite.facing !== Facing.Up) {
      sprite.facing = Facing.Up;
      sprite.state = State.Walking;
      position.lastMovement = time;
    } else if (keysDown.has("ArrowDown") && sprite.facing !== Facing.Down) {
      sprite.facing = Facing.Down;
      sprite.state = State.Walking;
      position.lastMovement = time;
    }
  });
};

export default playerControl;
