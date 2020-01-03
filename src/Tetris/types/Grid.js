import { flow, curry } from "lodash/fp";
import { getShapeOrientation } from "./Shape";

// 🌟: pure function
export const createGrid = (rows, cols) => {
  return {
    map: getEmptyMap(rows, cols),
    rows,
    cols
  };
};

// 🌟: pure function
const getEmptyMap = (rows, cols) => {
  // 👍: create a 2d array with init value in 1 line
  return Array(rows).fill(new Array(cols).fill(false));
};

// 🌟: pure function
export const hasCollision = (shape, grid) => {
  const orientation = getShapeOrientation(shape);

  // 👍: using nested reduce to check collision
  return orientation.reduce(
    (hasCollisionInRow, row, i) =>
      hasCollisionInRow |
      row.reduce((hasCollisionInPixel, col, j) => {
        if (col === 1) {
          const actualX = shape.position[0] + j;
          const actualY = shape.position[1] + i;

          // ignore if still above the top
          if (actualY < 0) {
            return hasCollisionInPixel;
          }

          // check if hitting the bottom wall
          if (actualY >= grid.rows) {
            return true;
          }

          // check if hitting the left and right walls
          if (actualX < 0 || actualX >= grid.cols) {
            return true;
          }

          // check if hitting an unclear pixel
          if (grid.map[actualY][actualX] === true) {
            return true;
          }
        }

        return hasCollisionInPixel;
      }, hasCollisionInRow),
    false
  );
};

// 🌟: pure function
export const addShapeToGrid = (shape, grid) => {
  const orientation = getShapeOrientation(shape);

  return {
    ...grid,
    // 👍: using nested map to calculate a new map
    map: grid.map.map((row, i) => {
      return row.map((col, j) => {
        const checkX = j - shape.position[0];
        const checkY = i - shape.position[1];

        if (
          checkX >= 0 &&
          checkX < shape.size &&
          checkY >= 0 &&
          checkY < shape.size &&
          orientation[checkY][checkX] === 1
        ) {
          return true;
        }

        return col;
      });
    })
  };
};

// 🌟: pure function
export const clearFullRows = grid => {
  return {
    ...grid,
    // 👍: method composition
    map: flow(
      clearFullRowsFromGridMap,
      curry(padRowsToGridMap)(grid.rows)(grid.cols)
    )(grid.map)
  };
};

// 🌟: pure function
const clearFullRowsFromGridMap = map => {
  return map.filter(row => !row.reduce((acc, value) => (acc &= value), true));
};

// 🌟: pure function
const padRowsToGridMap = (rows, cols, map) => {
  return [...getEmptyMap(rows - map.length, cols), ...map];
};
