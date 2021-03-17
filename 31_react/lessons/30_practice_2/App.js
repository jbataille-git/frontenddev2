import React from "react"
// import React, {Component} from "react"   // dit kan ook, dan kun je hieronder na extends 'React.' weglaten

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    };
  }

  render() {

    let loginStatus = this.state.isLoggedIn ? "in" : "out";

    return (
      <div>
        <h1>You are currenctly logged {loginStatus}</h1>
      </div>
    )
  }
}

export default App

// zo kan het ook
// if (this.state.isLoggedIn) {
//   loginStatus = "in"
// } else {
//   loginStatus = "out"
// }