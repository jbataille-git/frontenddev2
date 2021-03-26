/*
In the previous iteration of this todo list app,
we pulled in todos data from a JSON file
and mapped over it to display the todo items.

Eventually we'll want to be able to modify the data,
which will only happen if we've "loaded" the data in to the component's state

Challenge: Change the <App /> component into a stateful class component
and load the imported `todosData` into state.

Kijk even naar de handleChange method
in de eerste if returnt hij een kopie van de todo
en daarmee wordt de originele state dus niet veranderd

Als je daar zou zeggen 
  todo.completed = !todo.completed;
verander je WEL de oorspronkelijke state en dat mag niet
*/

import React from "react";
import todosData from "./todosData.js";
import TodoItem from "./TodoItem.js";

import "./style.css";

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(id) {
    this.setState( prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id ) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
        return todo;
        }

        })
      return { todos: updatedTodos};
      }
    )
  // console.log("Changed", id)
  }

  render() {

    const todoItems = this.state.todos.map((item) => (
      <TodoItem key={item.id} todoItem={item} handleChange={this.handleChange}/>
    ));
  
    return (
      <div className="todo-list">
        {todoItems}
      </div>
            );
  }
}

export default App;
