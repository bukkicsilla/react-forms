import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";

import Box from "./Box";
const BoxList = () => {
  const INITIAL_STATE = [
    { id: uuid(), bgcolor: "PeachPuff" },
    { id: uuid(), bgcolor: "SkyBlue" },
    { id: uuid(), bgcolor: "MediumPurple" },
  ];
  const [boxes, setBoxes] = useState(INITIAL_STATE);
  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };

  return (
    <div>
      <div className="BoxList-boxes">
        {boxes.map((box) => (
          <Box
            key={box.id}
            bgcolor={box.bgcolor}
            width={box.width}
            height={box.height}
          />
        ))}
      </div>
      <div className="BoxList-form">
        <NewBoxForm addBox={addBox} />
      </div>
    </div>
  );
};
export default BoxList;
