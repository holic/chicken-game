class Component {
  get name(): string {
    return this.constructor.name;
  }
}

export default Component;
