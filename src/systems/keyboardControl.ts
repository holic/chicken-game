import { entitiesByComponent } from "../entities/Entity";
import Position, { Direction } from "../components/Position";
import PlayerControlled from "src/components/PlayerControlled";

let key: string | null = null;

document.addEventListener("keydown", (event) => {
  // console.log("event.key", event.key);
  key = event.key;
});

document.addEventListener("keyup", (event) => {
  key = null;
});

const keyboardControl = (delta: number, time: number) => {
  const entities = entitiesByComponent[PlayerControlled.name] || [];
  entities.forEach((entity) => {
    const position = <Position | null>entity.components[Position.name];
    if (!position) return;

    if (key === "ArrowRight") {
      position.facing = Direction.Right;
      position.x += 2;
      position.lastMovement = time;
    } else if (key === "ArrowLeft") {
      position.facing = Direction.Left;
      position.x -= 2;
      position.lastMovement = time;
    } else if (key === "ArrowUp") {
      position.facing = Direction.Up;
      position.y -= 2;
      position.lastMovement = time;
    } else if (key === "ArrowDown") {
      position.facing = Direction.Down;
      position.y += 2;
      position.lastMovement = time;
    }
  });
};

export default keyboardControl;
