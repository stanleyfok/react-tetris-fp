import { flow, curry } from "lodash/fp";
import { getRandomShape, cloneShape } from "./Shapes/ShapeFactory";
import {
  createGrid,
  cloneGrid,
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

// pure function 🌟
export const cloneGameState = gameState => {
  const newGameState = createGameState(gameState.rows, gameState.cols);

  newGameState.currentShape = cloneShape(gameState.currentShape);
  newGameState.unclearedGrid = cloneGrid(gameState.unclearedGrid);
  newGameState.displayGrid = cloneGrid(gameState.displayGrid);
  newGameState.isGameOver = gameState.isGameOver;

  return newGameState;
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
  const nextGameState = cloneGameState(gameState);

  switch (action) {
    case ACTION.MOVE_DOWN:
      nextGameState.currentShape.position[1] += 1;
      break;
    case ACTION.MOVE_LEFT:
      nextGameState.currentShape.position[0] -= 1;
      break;
    case ACTION.MOVE_RIGHT:
      nextGameState.currentShape.position[0] += 1;
      break;
    case ACTION.ROTATE:
      nextGameState.currentShape.rotation =
        (nextGameState.currentShape.rotation + 1) %
        nextGameState.currentShape.orientations.length;
      break;
    default:
      break;
  }

  const isCollided = hasCollision(
    nextGameState.currentShape,
    nextGameState.unclearedGrid
  );

  if (isCollided) {
    if (action === ACTION.MOVE_DOWN) {
      // 🌟: method composition
      nextGameState.unclearedGrid = flow(
        curry(addShapeToGrid)(gameState.currentShape),
        clearFullRows
      )(nextGameState.unclearedGrid);

      // check if game over
      if (nextGameState.currentShape.position[1] < 0) {
        nextGameState.isGameOver = true;
      } else {
        nextGameState.currentShape = getNextShape(
          nextGameState.unclearedGrid.cols
        );
      }
    } else {
      // just cannot move the shape, so game state keeps unchanged
      return gameState;
    }
  }

  // calculate the grid for display by combining the shape and uncleared grid
  nextGameState.displayGrid = addShapeToGrid(
    nextGameState.currentShape,
    nextGameState.unclearedGrid
  );

  return nextGameState;
};
