import React from "react";
import "../components/MemoryGame/MemoryGame.css";
import Tiles from "../components/MemoryGame/Tiles";

const MemoryGame = () => {
  return (
    <div className="MemoryGame">
      {/* <h1>Test your memory</h1> */}
      <div className="memoryTitle">Test your memory</div>
      {/* <div className="MemoryGameContainer">
        
      </div> */}
      <Tiles></Tiles>
    </div>
  );
};

export default MemoryGame;
