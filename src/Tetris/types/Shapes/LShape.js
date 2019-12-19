import Shape from "./Shape";

class LShape extends Shape {
  constructor() {
    super();

    this.size = 3;
    this.orientations = [
      [
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 0]
      ],
      [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
      ],
      [
        [0, 1, 1],
        [0, 0, 1],
        [0, 0, 1]
      ],
      [
        [1, 1, 1],
        [1, 0, 0],
        [0, 0, 0]
      ]
    ];
  }
}

export default LShape;
