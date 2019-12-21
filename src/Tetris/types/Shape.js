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
export const createBarShape = () => {
  return {
    size: 4,
    orientations: [
      [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0]
      ],
      [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]
    ],
    position: [0, 0],
    rotation: 0
  };
};

// pure function 🌟
export const createFlipLShape = () => {
  return {
    size: 3,
    orientations: [
      [
        [0, 0, 1],
        [0, 0, 1],
        [0, 1, 1]
      ],
      [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
      ],
      [
        [1, 1, 0],
        [1, 0, 0],
        [1, 0, 0]
      ],
      [
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 0]
      ]
    ],
    position: [0, 0],
    rotation: 0
  };
};

// pure function 🌟
export const createLShape = () => {
  return {
    size: 3,
    orientations: [
      [
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 0]
      ],
      [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
      ],
      [
        [0, 1, 1],
        [0, 0, 1],
        [0, 0, 1]
      ],
      [
        [1, 1, 1],
        [1, 0, 0],
        [0, 0, 0]
      ]
    ],
    position: [0, 0],
    rotation: 0
  };
};

// pure function 🌟
export const createSquareShape = () => {
  return {
    size: 2,
    orientations: [
      [
        [1, 1],
        [1, 1]
      ]
    ],
    position: [0, 0],
    rotation: 0
  };
};

// pure function 🌟
export const createSShape = () => {
  return {
    size: 3,
    orientations: [
      [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
      ],
      [
        [0, 1, 0],
        [0, 1, 1],
        [0, 0, 1]
      ]
    ],
    position: [0, 0],
    rotation: 0
  };
};

// pure function 🌟
export const createTShape = () => {
  return {
    size: 3,
    orientations: [
      [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
      ],
      [
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0]
      ],
      [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0]
      ],
      [
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 0]
      ]
    ],
    position: [0, 0],
    rotation: 0
  };
};

// pure function 🌟
export const createZShape = () => {
  return {
    size: 3,
    orientations: [
      [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
      ],
      [
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 0]
      ]
    ],
    position: [0, 0],
    rotation: 0
  };
};

// pure function 🌟
export const getShapeByType = type => {
  switch (type) {
    case SHAPE_TYPES.SQUARE:
      return createSquareShape();
    case SHAPE_TYPES.T:
      return createTShape();
    case SHAPE_TYPES.S:
      return createSShape();
    case SHAPE_TYPES.Z:
      return createZShape();
    case SHAPE_TYPES.BAR:
      return createBarShape();
    case SHAPE_TYPES.L:
      return createLShape();
    case SHAPE_TYPES.FLIP_L:
      return createFlipLShape();
    default:
      return createBarShape();
  }
};

// impure function due to randomness
export const getRandomShape = () => {
  const totalShapes = Object.keys(SHAPE_TYPES).length;
  const type = Math.floor(Math.random() * totalShapes);

  return getShapeByType(type);
};

// pure function 🌟
export const getShapeOrientation = shape => {
  return shape.orientations[shape.rotation];
};

// pure function 🌟
export const moveShape = (shape, vector) => {
  return {
    ...shape,
    position: [shape.position[0] + vector[0], shape.position[1] + vector[1]]
  };
};

// pure function 🌟
export const rotateShape = shape => {
  return {
    ...shape,
    rotation: (shape.rotation + 1) % shape.orientations.length
  };
};
