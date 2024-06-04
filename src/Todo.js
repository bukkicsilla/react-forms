import React, { useState } from "react";
const Todo = ({ todo, remove, update }) => {
  const [updatedTodo, setUpdatedTodo] = useState(todo.todo);
  const [isEditing, setIsEditing] = useState(false);
  const handleDelete = (e) => {
    remove(todo.id);
  };
  const toggleEdit = () => {
    setIsEditing((edit) => !edit);
  };
  const handleChange = (e) => {
    setUpdatedTodo(e.target.value);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    //todo is an object with id and todo properties
    update(todo.id, { ...todo, todo: updatedTodo });
    setIsEditing(false);
  };
  //default view
  let jsx = (
    <div>
      <li key={todo.id}>{todo.todo}</li>
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={handleDelete}>X</button>
    </div>
  );
  //editing view
  if (isEditing) {
    jsx = (
      <div>
        <form onSubmit={handleUpdate}>
          <input type="text" value={updatedTodo} onChange={handleChange} />
          <button>Save</button>
        </form>
      </div>
    );
  }
  return jsx;
};
export default Todo;
