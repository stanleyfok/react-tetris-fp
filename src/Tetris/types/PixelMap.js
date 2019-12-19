import { getShapeOrientation } from "./Shapes/Shape";

export default class PixelMap {
  constructor(rows, cols) {
    this.map = getEmptyMap(rows, cols);
    this.rows = rows;
    this.cols = cols;
  }

  clone() {
    const pixelMap = new PixelMap(this.rows, this.cols);

    pixelMap.map = this.map.map(row => [...row]);

    return pixelMap;
  }
}

const getEmptyMap = (rows, cols) => {
  return new Array(rows).fill(new Array(cols).fill(false));
};

export const hasCollision = (shape, pixelMap) => {
  const orientation = getShapeOrientation(shape);

  let isCollided = false;
  orientation.forEach((row, i) => {
    row.forEach((_, j) => {
      // only check if the pixel on the shape is filled
      if (orientation[i][j] === 1) {
        const actualX = shape.position[0] + j;
        const actualY = shape.position[1] + i;

        // ignore if still above the top
        if (actualY < 0) {
          return;
        }

        // check if hitting the bottom wall
        if (actualY >= pixelMap.rows) {
          isCollided = true;

          return;
        }

        // check if hitting the left and right walls
        if (actualX < 0 || actualX >= pixelMap.cols) {
          isCollided = true;

          return;
        }

        // check if hitting an unclear pixel
        if (pixelMap.map[actualY][actualX] === true) {
          isCollided = true;
        }
      }
    });
  });

  return isCollided;
};

export const addShapeToPixelMap = (shape, pixelMap) => {
  const newPixelMap = pixelMap.clone();
  const orientation = getShapeOrientation(shape);

  orientation.forEach((row, i) => {
    row.forEach((_, j) => {
      if (orientation[i][j] === 1) {
        const actualX = shape.position[0] + j;
        const actualY = shape.position[1] + i;

        if (
          actualX >= 0 &&
          actualX < newPixelMap.cols &&
          actualY >= 0 &&
          actualY < newPixelMap.rows
        ) {
          newPixelMap.map[actualY][actualX] = true;
        }
      }
    });
  });

  return newPixelMap;
};

export const clearFullRows = pixelMap => {
  const newPixelMap = pixelMap.clone();

  // filter full rows
  newPixelMap.map = newPixelMap.map.filter(
    row => !row.reduce((acc, value) => (acc &= value), true)
  );

  // append empty rows back
  newPixelMap.map = [
    ...getEmptyMap(newPixelMap.rows - newPixelMap.map.length, newPixelMap.cols),
    ...newPixelMap.map
  ];

  return newPixelMap;
};
