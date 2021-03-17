import React, { Component } from "react";
import Conditional from "./Conditional";

import "./style.css";

// de logica voor de conditional rendering zit nu hier
// met een ternary operator
// Er zit een div in de return zodat er ook andere html in kan
// en omdat het js is, moeten er haakjes omheen

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 1500);
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? <h1>Loading...</h1> : <Conditional />}
      </div>
    );
  }
}

export default App;
