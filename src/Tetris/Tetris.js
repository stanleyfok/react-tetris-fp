import React from "react";
import PropTypes from "prop-types";
import Grid from "./components/Grid/Grid";
import { addShapeToPixelMap } from "./types/PixelMap";

import { ACTION, getNextGameState, getInitGameState } from "./types/GameState";

class Tetris extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // register events
    document.addEventListener("keydown", this.handleKeyDown);

    this.startNewGame();
  }

  componentWillUnmount() {
    // deregister events
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = e => {
    switch (e.keyCode) {
      case 32: // SPACE
      case 38: // UP
        this.rotateShape();
        break;
      case 37: // LEFT
        this.moveShapeLeft();
        break;
      case 39: // RIGHT
        this.moveShapeRight();
        break;
      case 40: // DOWN
        this.moveShapeDown();
        break;
      default:
        break;
    }
  };

  startNewGame = () => {
    const { rows, cols, normalInterval } = this.props;
    this.gameState = getInitGameState(rows, cols);

    this.setState({
      pixelMap: addShapeToPixelMap(
        this.gameState.currentShape,
        this.gameState.unclearedPixelMap
      )
    });

    this.timer = setTimeout(this.doGameTick, normalInterval);
  };

  doGameTick = () => {
    if (!this.gameState.isGameOver) {
      const { normalInterval, speedUpSpeed } = this.props;

      this.moveShapeDown();

      // do next tick
      this.timer = setTimeout(
        this.doGameTick,
        normalInterval / (this.gameState.isSpeedUp ? speedUpSpeed : 1)
      );
    } else {
      alert("Game Over!");

      this.startNewGame();
    }
  };

  // impure function
  moveShapeDown = () => {
    this.gameState = getNextGameState(ACTION.MOVE_DOWN, this.gameState);

    this.setState({
      pixelMap: addShapeToPixelMap(
        this.gameState.currentShape,
        this.gameState.unclearedPixelMap
      )
    });
  };

  // impure function
  moveShapeLeft = () => {
    this.gameState = getNextGameState(ACTION.MOVE_LEFT, this.gameState);

    this.setState({
      pixelMap: addShapeToPixelMap(
        this.gameState.currentShape,
        this.gameState.unclearedPixelMap
      )
    });
  };

  // impure function
  moveShapeRight = () => {
    this.gameState = getNextGameState(ACTION.MOVE_RIGHT, this.gameState);

    this.setState({
      pixelMap: addShapeToPixelMap(
        this.gameState.currentShape,
        this.gameState.unclearedPixelMap
      )
    });
  };

  // impure function
  rotateShape = () => {
    this.gameState = getNextGameState(ACTION.ROTATE, this.gameState);

    this.setState({
      pixelMap: addShapeToPixelMap(
        this.gameState.currentShape,
        this.gameState.unclearedPixelMap
      )
    });
  };

  render() {
    const { pixelMap } = this.state;

    return <div>{pixelMap && <Grid pixelMap={pixelMap} />}</div>;
  }
}

Tetris.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  normalInterval: PropTypes.number.isRequired,
  speedUpSpeed: PropTypes.number.isRequired
};

Tetris.defaultProps = {
  rows: 20,
  cols: 10,
  normalInterval: 400,
  speedUpSpeed: 5
};

export default Tetris;
