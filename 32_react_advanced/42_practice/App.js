import React, { Component } from "react";

import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.changeLogin = this.changeLogin.bind(this);
  }

  changeLogin() {
    // console.log(this.state.isLoggedIn);
    this.setState(prevState => {
      
      if (this.state === prevState) {
        console.log("hier zijn ze nog gelijk")  // true, "hier zijn ze nog gelijk"
      }

      // if (prevState.isLoggedIn === false){
      //   return { isLoggedIn: true};
      // } else {
      //   return {isLoggedIn: false};
      // }

      return {isLoggedIn: !prevState.isLoggedIn}

    })
  }

  // met een ternary operator
  render() {
    console.log(this.state.isLoggedIn);
    return (
      <div>
        <h2>
          You are logged 
          {this.state.isLoggedIn ? " in" : " out"} 
        </h2>

          <button onClick={this.changeLogin}>
            Log
            {this.state.isLoggedIn ? " out" : " in"}
          </button>
      </div>
    );
  }
}

export default App;

/*

let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"

<button> onClick={this.handleClick}><buttonText}</button>

*/