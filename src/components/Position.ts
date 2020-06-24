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
  lastMovement: number;

  constructor(
    x: number = 0,
    y: number = 0,
    facing: Direction = Direction.Down
  ) {
    super();
    this.x = x;
    this.y = y;
    this.facing = facing;
    this.lastMovement = 0;
  }
}

export default Position;
export { Direction, directions };
