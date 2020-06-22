import Component from "../components/Component";

let counter = 0;

interface EntitiesByComponent {
  [componentName: string]: Entity[];
}

const entitiesByComponent: EntitiesByComponent = {};

class Entity {
  readonly id: number = counter++;
  readonly components: { [componentName: string]: Component } = {};

  constructor(components: Component[]) {
    components.forEach((component) => {
      this.addComponent(component);
    });
  }

  // TODO: decide if this should be exposed
  protected addComponent(component: Component) {
    this.components[component.name] = component;

    // TODO: move this to some sort of manager?
    entitiesByComponent[component.name] =
      entitiesByComponent[component.name] || [];
    entitiesByComponent[component.name].push(this);
  }
}

export default Entity;
export { entitiesByComponent };
