import React from "react";

const Tile = ({ item, id, handleClick }) => {
  const itemClass = item.stat ? " active " + item.stat : "";

  return (
    <div className={"tile" + itemClass} onClick={() => handleClick(id)}>
      <img src={item.img} />
    </div>
  );
};

export default Tile;
