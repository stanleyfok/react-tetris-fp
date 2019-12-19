import Shape from "./Shape";

class FlipLShape extends Shape {
  constructor() {
    super();

    this.size = 3;
    this.orientations = [
      [
        [0, 0, 1],
        [0, 0, 1],
        [0, 1, 1]
      ],
      [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
      ],
      [
        [1, 1, 0],
        [1, 0, 0],
        [1, 0, 0]
      ],
      [
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 0]
      ]
    ];
  }
}

export default FlipLShape;
