import SquareShape from "./SquareShape";
import BarShape from "./BarShape";
import FlipLShape from "./FlipLShape";
import LShape from "./LShape";
import SShape from "./SShape";
import TShape from "./TShape";
import ZShape from "./ZShape";

const SHAPE_TYPES = {
  SQUARE: 0,
  T: 1,
  S: 2,
  Z: 3,
  BAR: 4,
  L: 5,
  FLIP_L: 6
};

// pure function 🌟
export const getShapeByType = type => {
  switch (type) {
    case SHAPE_TYPES.SQUARE:
      return new SquareShape();
    case SHAPE_TYPES.T:
      return new TShape();
    case SHAPE_TYPES.S:
      return new SShape();
    case SHAPE_TYPES.Z:
      return new ZShape();
    case SHAPE_TYPES.BAR:
      return new BarShape();
    case SHAPE_TYPES.L:
      return new LShape();
    case SHAPE_TYPES.FLIP_L:
      return new FlipLShape();
    default:
      return new BarShape();
  }
};

// pure function 🌟
export const cloneShape = shape => {
  const shapeClass = shape.constructor.name;
  let newShape;

  switch (shapeClass) {
    case "SquareShape":
      newShape = new SquareShape();
      break;
    case "TShape":
      newShape = new TShape();
      break;
    case "SShape":
      newShape = new SShape();
      break;
    case "ZShape":
      newShape = new ZShape();
      break;
    case "BarShape":
      newShape = new BarShape();
      break;
    case "LShape":
      newShape = new LShape();
      break;
    case "FlipLShape":
      newShape = new FlipLShape();
      break;
    default:
      newShape = new BarShape();
      break;
  }

  newShape.position = [...shape.position];
  newShape.rotation = shape.rotation;

  return newShape;
};

// impure function due to randomness
export const getRandomShape = () => {
  const totalShapes = Object.keys(SHAPE_TYPES).length;
  const type = Math.floor(Math.random() * totalShapes);

  return getShapeByType(type);
};
