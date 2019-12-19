import Shape from "./Shape";

class SShape extends Shape {
  constructor() {
    super();

    this.size = 3;
    this.orientations = [
      [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
      ],
      [
        [0, 1, 0],
        [0, 1, 1],
        [0, 0, 1]
      ]
    ];
  }
}

export default SShape;
