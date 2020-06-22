import { entitiesByComponent } from "../entities/Entity";
import Position from "../components/Position";

let container = document.querySelector("#game");
if (!container) {
  container = document.createElement("div");
  container.id = "game";
  document.body.appendChild(container);
}

const render = () => {
  // reset
  container.innerHTML = "";

  const entities = entitiesByComponent[Position.name] || [];
  entities.forEach((entity) => {
    const { x, y } = <Position>entity.components[Position.name];

    const el = document.createElement("div");
    el.innerHTML = `entity:${entity.id}`;
    el.style.position = "absolute";
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    container.appendChild(el);
  });

  console.log("rendering", entities);
};

export default render;
