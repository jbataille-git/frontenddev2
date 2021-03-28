import React from "react";
import todosData from "./todosData.js";
import TodoItem from "./TodoItem.js";

import "./style.css";

function App() {
  const todoItems = todosData.map((item) => (
    <TodoItem key={item.id} todoItem={item} />
  ));

  return <div className="todo-list">{todoItems}</div>;
}

export default App;
