import { flow, curry, cloneDeep } from "lodash/fp";
import { getRandomShape, moveShape, rotateShape } from "./Shape";
import {
  createGrid,
  hasCollision,
  addShapeToGrid,
  clearFullRows
} from "./Grid";

export const ACTION = {
  MOVE_DOWN: 0,
  MOVE_LEFT: 1,
  MOVE_RIGHT: 2,
  ROTATE: 3
};

// 🌟: pure function
export const createGameState = (rows, cols) => {
  return {
    shape: getNextShape(cols),
    unclearedGrid: createGrid(rows, cols),
    displayGrid: createGrid(rows, cols),
    isGameOver: false
  };
};

// impure function due to randomness
// since generating next shape is by random, it is not predictive
const getNextShape = cols => {
  const shape = getRandomShape();

  shape.rotation = Math.floor(Math.random() * shape.orientations.length);
  shape.position = [
    Math.floor((cols - shape.size) / 2), // middle of tower
    -shape.size // top of tower
  ];

  return shape;
};

// 🌟: pure function
export const getNextGameState = (action, gameState) => {
  // TODO: I am not happy with these let variables
  let shape;
  let unclearedGrid;
  let isGameOver = false;

  // TODO: I am not happy with switch statement
  switch (action) {
    case ACTION.MOVE_DOWN:
      shape = moveShape(gameState.shape, [0, 1]);
      break;
    case ACTION.MOVE_LEFT:
      shape = moveShape(gameState.shape, [-1, 0]);
      break;
    case ACTION.MOVE_RIGHT:
      shape = moveShape(gameState.shape, [1, 0]);
      break;
    case ACTION.ROTATE:
      shape = rotateShape(gameState.shape);
      break;
    default:
      shape = moveShape(gameState.shape, [0, 1]);
      break;
  }

  if (hasCollision(shape, gameState.unclearedGrid)) {
    if (action === ACTION.MOVE_DOWN) {
      // 👍: method composition
      unclearedGrid = flow(
        curry(addShapeToGrid)(gameState.shape),
        clearFullRows
      )(gameState.unclearedGrid);

      // check if game over
      if (shape.position[1] < 0) {
        // TODO: I am not happy with isGame being reassigned
        isGameOver = true;
        shape = cloneDeep(gameState.shape);
      } else {
        shape = getNextShape(unclearedGrid.cols);
      }
    } else {
      // just cannot move the shape, so game state keeps unchanged
      return cloneDeep(gameState);
    }
  } else {
    unclearedGrid = cloneDeep(gameState.unclearedGrid);
  }

  // calculate the grid for display by combining the shape and uncleared grid
  const displayGrid = addShapeToGrid(shape, unclearedGrid);

  return {
    shape,
    unclearedGrid,
    displayGrid,
    isGameOver
  };
};
