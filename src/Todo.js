import React, { useState } from "react";
const Todo = ({ todo, remove }) => {
  const handleDelete = (e) => {
    remove(todo.id);
  };
  const toggleEdit = () => {
    // toggle edit mode
  };
  return (
    <div>
      <li key={todo.id}>{todo.todo}</li>
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={handleDelete}>X</button>
    </div>
  );
};
export default Todo;
