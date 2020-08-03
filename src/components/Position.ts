import Component from "./Component";

enum Direction {
  Down = "down",
  Left = "left",
  Up = "up",
  Right = "right",
}

enum State {
  Idle = "idle",
  Walking = "walking",
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
  state: State;
  lastMovement: number = 0;

  constructor(
    x: number = 0,
    y: number = 0,
    facing: Direction = Direction.Down,
    state: State = State.Idle
  ) {
    super();
    this.x = x;
    this.y = y;
    this.facing = facing;
    this.state = state;
  }
}

export default Position;
export { Direction, directions };
