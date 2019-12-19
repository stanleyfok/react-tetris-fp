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

export const cloneGameState = gameState => {
  const newGameState = new GameState();

  newGameState.currentShape = cloneShape(gameState.currentShape);
  newGameState.unclearedGrid = cloneGrid(gameState.unclearedGrid);
  newGameState.isGameOver = gameState.isGameOver;

  return newGameState;
};

// impure function
export const getInitGameState = (rows, cols) => {
  const gameState = new GameState(rows, cols);

  gameState.currentShape = getNextShape(gameState.unclearedGrid);

  return gameState;
};

// impure function
// since generating next shape is by random, it is not predictive
// but we can make the calculation of position be pure function
const getNextShape = Grid => {
  const shape = getRandomShape();

  shape.rotation = Math.floor(Math.random() * shape.orientations.length);

  // position is obtained via a pure function, testable
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

// pure function
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

export const checkGameOver = shape => {
  const orientation = getShapeOrientation(shape);

  let isGameOver = false;

  orientation.forEach((row, i) => {
    row.forEach((col, j) => {
      if (orientation[i][j] === 1) {
        const actualY = shape.position[1] + i;

        // ignore if still above the top
        if (actualY < 0) {
          isGameOver = true;
        }
      }
    });
  });

  return isGameOver;
};
