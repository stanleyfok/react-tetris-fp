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

// pure function 🌟
export const createGameState = (rows, cols) => {
  return {
    currentShape: getNextShape(cols),
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
  shape.position = getShapeInitialPosition(shape, cols);

  return shape;
};

// pure function 🌟
const getShapeInitialPosition = (shape, cols) => {
  return [
    Math.floor((cols - shape.size) / 2), // middle of tower
    -shape.size // top of tower
  ];
};

// pure function 🌟
export const getNextGameState = (action, gameState) => {
  // TODO: I am not happy with these let variables
  let currentShape;
  let unclearedGrid;
  let isGameOver = false;

  // TODO: I am not happy with switch statement
  switch (action) {
    case ACTION.MOVE_DOWN:
      currentShape = moveShape(gameState.currentShape, [0, 1]);
      break;
    case ACTION.MOVE_LEFT:
      currentShape = moveShape(gameState.currentShape, [-1, 0]);
      break;
    case ACTION.MOVE_RIGHT:
      currentShape = moveShape(gameState.currentShape, [1, 0]);
      break;
    case ACTION.ROTATE:
      currentShape = rotateShape(gameState.currentShape);
      break;
    default:
      currentShape = moveShape(gameState.currentShape, [0, 1]);
      break;
  }

  if (hasCollision(currentShape, gameState.unclearedGrid)) {
    if (action === ACTION.MOVE_DOWN) {
      // 🌟: method composition
      unclearedGrid = flow(
        curry(addShapeToGrid)(gameState.currentShape),
        clearFullRows
      )(gameState.unclearedGrid);

      // check if game over
      if (currentShape.position[1] < 0) {
        // TODO: I am not happy with isGame being reassigned
        isGameOver = true;
        currentShape = cloneDeep(gameState.currentShape);
      } else {
        currentShape = getNextShape(unclearedGrid.cols);
      }
    } else {
      // just cannot move the shape, so game state keeps unchanged
      return cloneDeep(gameState);
    }
  } else {
    unclearedGrid = cloneDeep(gameState.unclearedGrid);
  }

  // calculate the grid for display by combining the shape and uncleared grid
  const displayGrid = addShapeToGrid(currentShape, unclearedGrid);

  return {
    currentShape,
    unclearedGrid,
    displayGrid,
    isGameOver
  };
};
