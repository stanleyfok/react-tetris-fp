import React from "react";
import PropTypes from "prop-types";
import Pixel from "../Pixel/Pixel";

import "./Grid.css";

// pure component 🌟
function Grid(props) {
  const { map } = props.grid;

  const gridContent = map.map((row, i) => {
    const rowContent = row.map((col, j) => {
      return <Pixel key={`pixel-${i},${j}`} isFilled={col} />;
    });

    return <div key={`row-${i}`}>{rowContent}</div>;
  });

  return <div className="grid">{gridContent}</div>;
}

Grid.propTypes = {
  grid: PropTypes.object.isRequired
};

export default Grid;
