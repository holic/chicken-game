import { entitiesByComponent } from "../entities/Entity";
import Position from "../components/Position";
import PlayerControlled from "src/components/PlayerControlled";

let key: string | null = null;

document.addEventListener("keydown", (event) => {
  // console.log("event.key", event.key);
  key = event.key;
});

document.addEventListener("keyup", (event) => {
  key = null;
});

const keyboardControl = () => {
  const entities = entitiesByComponent[PlayerControlled.name] || [];
  entities.forEach((entity) => {
    const position = <Position | null>entity.components[Position.name];
    if (!position) return;

    if (key === "ArrowRight") {
      position.x += 2;
    } else if (key === "ArrowLeft") {
      position.x -= 2;
    } else if (key === "ArrowUp") {
      position.y -= 2;
    } else if (key === "ArrowDown") {
      position.y += 2;
    }
  });
};

export default keyboardControl;
