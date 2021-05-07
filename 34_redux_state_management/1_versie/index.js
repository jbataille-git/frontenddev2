import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

// import * as serviceWorker from "./serviceWorker.js"
import {createStore} from 'redux'

//STORE, a globalize state
// with the import statement above


// ACTION describes what you want to do
// in this case: increment or decrement the counter
// a simple function that returns an object
const increment = () => {
  return {
    type: "INCREMENT",
  }
}

const decrement = () => {
  return {
    type: "DECREMENT",
  }
}

// REDUCER describes how your action modifies state
// first parameter sets initial state
const counter = (state = 0, action ) => {
  switch(action.type){
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
}

let store = createStore(counter)

// Display it in the console
store.subscribe(() => console.log(store.getState()));


// DISPATCH
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());

ReactDOM.render(<App />, document.getElementById("root"));

// serviceWorker.unregister();