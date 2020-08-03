import Component from "../components/Component";

let counter = 0;

const entities: Entity[] = [];

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
    entities.push(this);
  }

  // TODO: decide if this should be exposed
  protected addComponent(component: Component) {
    this.components[component.name] = component;

    // TODO: move this to some sort of manager?
    entitiesByComponent[component.name] =
      entitiesByComponent[component.name] || [];
    entitiesByComponent[component.name].push(this);
  }

  getComponent<T extends Component>(component: new (...args: any[]) => T): T {
    return <T>this.components[component.name];
  }
}

const entitiesForComponents = (components: Component[]): Entity[] =>
  entities.filter((entity) =>
    components.every((component) => entity.components[component.name])
  );

export default Entity;
export { entitiesByComponent, entitiesForComponents };
