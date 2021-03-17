/**
 * Challenge: Style the completed todo items differently from the incomplete items.
 */

import React from "react";

function TodoItem(props) {

  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;

/*
  let textDecorationValue = "none";

  if (props.item.completed) {
    textDecorationValue = "line-through";
  } 

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={{textDecoration: textDecorationValue}}>{props.item.text}</p>
    </div>
  );

  */