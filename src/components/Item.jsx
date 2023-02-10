import React from "react";

import "../App.css";

const Item = ({ id, dragOverlay }) => {
  const style = {
    cursor: dragOverlay ? "grabbing" : "grab",
  };

  return (
    <div style={style} className="item">
      Item {id}
    </div>
  );
};

export default Item;