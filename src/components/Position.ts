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

class Position extends Component {
  x: number;
  y: number;
  facing: Direction;

  constructor(
    x: number = 0,
    y: number = 0,
    facing: Direction = Direction.Down
  ) {
    super();
    this.x = x;
    this.y = y;
    this.facing = facing;
  }
}

export default Position;
export { Direction, directions };
