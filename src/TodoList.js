import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";
import "./TodoList.css";

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
  return (
    <div>
      <h1>Todo List</h1>
      <ul className="TodoList-list">
        {todos.map((todo) => (
          <Todo todo={todo} remove={removeTodo} />
        ))}
      </ul>
      <div>
        <NewTodoForm add={addTodo} />
      </div>
    </div>
  );
};
export default TodoList;
