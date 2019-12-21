import React from "react";
import Tetris from "./Tetris/Tetris";
import tetrisBg from "./tetris-bg.mp3";
import "./App.css";

function App() {
  return (
    <div className="app">
      <p>
        Tetris using <strong>Functional Programming</strong> approach
      </p>
      <Tetris rows={20} cols={10} normalInterval={400} />
      <audio src={tetrisBg} type="audio/mpeg" autoPlay={true} loop={true} />
    </div>
  );
}

export default App;
