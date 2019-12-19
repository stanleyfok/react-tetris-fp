import Shape from "./Shape";

class ZShape extends Shape {
  constructor() {
    super();

    this.size = 3;
    this.orientations = [
      [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
      ],
      [
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 0]
      ]
    ];
  }
}

export default ZShape;
