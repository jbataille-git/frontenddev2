import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input 
        type="checkbox"
        checked={props.todoItem.completed} 
        onChange={() => props.handleChange(props.todoItem.id)}
      />
      <p>{props.todoItem.text}</p>
    </div>
  );
}

export default TodoItem;