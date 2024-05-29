import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = { bgcolor: "", width: "", height: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  return (
    <form>
      <label htmlFor="bgcolor">Background color:</label>
      <input type="text" name="bgcolor" id="bgcolor" />
      <label htmlFor="width">Width:</label>
      <input type="text" name="width" id="width" />
      <label htmlFor="height">Height:</label>
      <input type="text" name="height" id="height" />
      <button>Add a new box!</button>
    </form>
  );
};

export default NewBoxForm;
