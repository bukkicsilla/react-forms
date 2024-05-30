import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewTodoForm = ({ add }) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    add({ todo, id: uuid() });
    setTodo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Todo</label>
      <input
        type="text"
        id="todo"
        name="todo"
        value={todo}
        onChange={handleChange}
      />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodoForm;
