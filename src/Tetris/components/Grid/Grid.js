import React from "react";
import PropTypes from "prop-types";
import Pixel from "../Pixel/Pixel";

import "./Grid.css";

function Grid(props) {
  const { map } = props.pixelMap;

  const gridContent = map.map((row, i) => {
    const rowContent = row.map((col, j) => {
      return <Pixel key={`pixel-${i},${j}`} isFilled={col} />;
    });

    return <div key={`row-${i}`}>{rowContent}</div>;
  });

  return <div className="grid">{gridContent}</div>;
}

Grid.propTypes = {
  pixelMap: PropTypes.object.isRequired
};

export default Grid;
