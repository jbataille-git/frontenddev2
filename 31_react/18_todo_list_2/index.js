import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoItem from "./components/TodoItem.js";

function App() {
  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
