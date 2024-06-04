import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";

import Box from "./Box";
const BoxList = () => {
  /*const INITIAL_STATE = [
    { id: uuid(), bgcolor: "PeachPuff" },
    { id: uuid(), bgcolor: "SkyBlue" },
    { id: uuid(), bgcolor: "MediumPurple" },
  ];*/
  //const [boxes, setBoxes] = useState(INITIAL_STATE);
  const [boxes, setBoxes] = useState([]);
  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };
  const handleRemove = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };
  return (
    <div>
      <div className="BoxList-form">
        <h3>Colored Boxes</h3>
        <NewBoxForm addBox={addBox} />
      </div>
      <div className="BoxList-boxes">
        {boxes.map((box) => (
          <Box
            id={box.id}
            key={box.id}
            bgcolor={box.bgcolor}
            width={box.width}
            height={box.height}
            handleRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};
export default BoxList;
