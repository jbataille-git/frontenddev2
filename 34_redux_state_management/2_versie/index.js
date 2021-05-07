import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./style.css"

import {createStore, combineReducers} from 'redux';

// er wordt automatisch gezocht naar index.js in deze map, dat doet webpack
import allReducers from "./reducers"

import { Provider } from 'react-redux'

const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// import * as serviceWorker from "./serviceWorker.js"

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root"));

// serviceWorker.unregister();