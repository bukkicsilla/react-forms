import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = { bgcolor: "", width: "", height: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData, id: uuid() });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="bgcolor">Background color:</label>
      <input
        type="text"
        name="bgcolor"
        id="bgcolor"
        placeholder="Background Color"
        value={formData.bgcolor}
        onChange={handleChange}
      />
      <label htmlFor="width">Width:</label>
      <input
        type="text"
        name="width"
        id="width"
        placeholder="Box Width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Height:</label>
      <input
        type="text"
        name="height"
        id="height"
        placeholder="Box Height"
        value={formData.height}
        onChange={handleChange}
      />
      <button>Add a new box!</button>
    </form>
  );
};

export default NewBoxForm;
