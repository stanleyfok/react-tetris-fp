export default class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new TypeError("Cannot construct Shape instances directly");
    }

    // to be overidden
    this.size = 0;
    this.orientations = null;

    // other properties
    this.position = [0, 0];
    this.rotation = 0;
  }

  clone = () => {
    const shape = new Shape();
    shape.size = this.size;
    shape.orientations = [...this.orientations];
    shape.position = [...this.position];
    shape.rotation = this.rotation;

    return shape;
  };
}

export const getShapeOrientation = shape => {
  return shape.orientations[shape.rotation];
};
