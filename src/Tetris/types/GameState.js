import { getRandomShape, cloneShape } from "./Shapes/ShapeFactory";
import Grid, {
  cloneGrid,
  hasCollision,
  addShapeToGrid,
  clearFullRows
} from "./Grid";
import { getShapeOrientation } from "./Shapes/Shape";

export const ACTION = {
  MOVE_DOWN: 0,
  MOVE_LEFT: 1,
  MOVE_RIGHT: 2,
  ROTATE: 3
};

export default class GameState {
  constructor(rows, cols) {
    this.currentShape = null;
    this.unclearedGrid = new Grid(rows, cols);
    this.isGameOver = false;
  }
}

// pure function 🌟
export const cloneGameState = gameState => {
  const newGameState = new GameState();

  newGameState.currentShape = cloneShape(gameState.currentShape);
  newGameState.unclearedGrid = cloneGrid(gameState.unclearedGrid);
  newGameState.isGameOver = gameState.isGameOver;

  return newGameState;
};

// impure function due to randomness
export const getInitGameState = (rows, cols) => {
  const gameState = new GameState(rows, cols);

  gameState.currentShape = getNextShape(gameState.unclearedGrid);

  return gameState;
};

// impure function due to randomness
// since generating next shape is by random, it is not predictive
const getNextShape = Grid => {
  const shape = getRandomShape();

  shape.rotation = Math.floor(Math.random() * shape.orientations.length);
  shape.position = getShapeInitialPosition(shape, Grid);

  return shape;
};

// pure function
const getShapeInitialPosition = (shape, Grid) => {
  return [
    Math.floor((Grid.cols - shape.size) / 2), // middle of tower
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
      nextGameState.unclearedGrid = addShapeToGrid(
        gameState.currentShape, // use old state's shape position
        nextGameState.unclearedGrid
      );

      // clear full rows
      nextGameState.unclearedGrid = clearFullRows(nextGameState.unclearedGrid);

      // check if game over
      if (nextGameState.currentShape.position[1] < 0) {
        nextGameState.isGameOver = true;
      } else {
        nextGameState.currentShape = getNextShape(nextGameState.unclearedGrid);
      }
    } else {
      // just cannot move the shape, so game state keeps unchanged
      return gameState;
    }
  }

  return nextGameState;
};
