import { entitiesByComponent } from "../entities/Entity";
import Position, { Direction } from "../components/Position";
import PlayerControlled from "src/components/PlayerControlled";

const keysDown = new Set<string>();

document.addEventListener("keydown", (event) => {
  keysDown.add(event.key);
});

document.addEventListener("keyup", (event) => {
  keysDown.delete(event.key);
});

const keyboardControl = (delta: number, time: number) => {
  const entities = entitiesByComponent[PlayerControlled.name] || [];
  entities.forEach((entity) => {
    const position = <Position | null>entity.components[Position.name];
    if (!position) return;

    if (keysDown.has("ArrowRight")) {
      position.facing = Direction.Right;
      position.x += 2;
      position.lastMovement = time;
    } else if (keysDown.has("ArrowLeft")) {
      position.facing = Direction.Left;
      position.x -= 2;
      position.lastMovement = time;
    } else if (keysDown.has("ArrowUp")) {
      position.facing = Direction.Up;
      position.y -= 2;
      position.lastMovement = time;
    } else if (keysDown.has("ArrowDown")) {
      position.facing = Direction.Down;
      position.y += 2;
      position.lastMovement = time;
    }
  });
};

export default keyboardControl;
