import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";
import "./TodoList.css";

//Add some styling to your application! Try to use a CSS animation that fades out a Todo
//when it is deleted (this will involve adding/removing CSS classes). Write this using SASS!
//Save your todos in localStorage and retrieve them when the page loads.

const TodoList = () => {
  const initTodo = [
    { id: uuid(), todo: "Learn React" },
    { id: uuid(), todo: "Learn Ruby" },
    { id: uuid(), todo: "Learn R" },
  ];
  const [todos, setTodos] = useState(initTodo);
  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
  };
  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  const updateTodo = (id, updatedTodo) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul className="TodoList-list">
        {todos.map((todo) => (
          <Todo todo={todo} remove={removeTodo} update={updateTodo} />
        ))}
      </ul>
      <div>
        <NewTodoForm add={addTodo} />
      </div>
    </div>
  );
};
export default TodoList;
