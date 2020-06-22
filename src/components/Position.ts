import Component from "./Component";

class Position extends Component {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    super();
    this.x = x;
    this.y = y;
  }
}

export default Position;
