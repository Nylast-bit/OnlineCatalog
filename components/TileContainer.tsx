import React from "react";
import Tile from "./Tile";

const TileContainer = () => {
  return (
    <div className="tile-container">
      {Array.from({ length: 1 }).map((_, index) => (
        <Tile key={index} />
      ))}
    </div>
  );
};

export default TileContainer;
