import { flow, curry } from "lodash/fp";
import { getShapeOrientation } from "./Shapes/Shape";

// pure function 🌟
export const createGrid = (rows, cols) => {
  return {
    map: getEmptyMap(rows, cols),
    rows,
    cols
  };
};

// pure function 🌟
export const cloneGrid = grid => {
  const newGrid = createGrid(grid.rows, grid.cols);

  newGrid.map = grid.map.map(row => [...row]);

  return newGrid;
};

// pure function 🌟
const getEmptyMap = (rows, cols) => {
  // 🌟: make a 2d array with init value in 1 line
  return new Array(rows).fill(new Array(cols).fill(false));
};

// pure function 🌟
export const hasCollision = (shape, grid) => {
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
        if (actualY >= grid.rows) {
          isCollided = true;

          return;
        }

        // check if hitting the left and right walls
        if (actualX < 0 || actualX >= grid.cols) {
          isCollided = true;

          return;
        }

        // check if hitting an unclear pixel
        if (grid.map[actualY][actualX] === true) {
          isCollided = true;
        }
      }
    });
  });

  return isCollided;
};

// pure function 🌟
export const addShapeToGrid = (shape, grid) => {
  const newGrid = cloneGrid(grid);

  const orientation = getShapeOrientation(shape);

  orientation.forEach((row, i) => {
    row.forEach((_, j) => {
      if (orientation[i][j] === 1) {
        const actualX = shape.position[0] + j;
        const actualY = shape.position[1] + i;

        if (
          actualX >= 0 &&
          actualX < newGrid.cols &&
          actualY >= 0 &&
          actualY < newGrid.rows
        ) {
          newGrid.map[actualY][actualX] = true;
        }
      }
    });
  });

  return newGrid;
};

// pure function 🌟
export const clearFullRows = grid => {
  const newGrid = cloneGrid(grid);

  // 🌟: method composition
  newGrid.map = flow(
    // filter rows that are full
    clearFullRowsFromGridMap,
    // pad empty rows back after filter full rows
    curry(padRowsToGridMap)(grid.rows)(grid.cols)
  )(grid.map);

  return newGrid;
};

// pure function 🌟
const clearFullRowsFromGridMap = map => {
  return map.filter(row => !row.reduce((acc, value) => (acc &= value), true));
};

// pure function 🌟
const padRowsToGridMap = (rows, cols, map) => {
  return [...getEmptyMap(rows - map.length, cols), ...map];
};
