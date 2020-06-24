import Component from "./Component";

enum Direction {
  Down = "down",
  Left = "left",
  Up = "up",
  Right = "right",
}

const directions = [
  Direction.Down,
  Direction.Left,
  Direction.Up,
  Direction.Right,
];

class Wanderer extends Component {
  direction: Direction;

  constructor(direction: Direction = Direction.Down) {
    super();
    this.direction = direction;
  }
}

export default Wanderer;
export { Direction, directions };
