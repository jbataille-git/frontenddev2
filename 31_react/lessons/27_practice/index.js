import React from "react";
import ReactDOM from "react-dom";

import "./style.css"

// #1
// function App1() {
//   return (
//       <div>
//           <Header />
//           <Greeting />
//       </div>
//   )
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <Header username="Joost"/>
        <Greeting />
      </div>
    )
  }
}

// #2
// function Header1(props) {
//   return (
//       <header>
//           <p>Welcome, {props.username}!</p>
//       </header>
//   )
// }

// props komen hier niet zichtbaar binnen
// maar zijn beschikbaar vanwege extends React.Component, via die weg komen ze binnen
// en je moet ze dus benaderen via this
class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    )
  }
}

// #3
// function Greeting1() {
//   const date = new Date()
//   const hours = date.getHours()
//   let timeOfDay
  
//   if (hours < 12) {
//       timeOfDay = "morning"
//   } else if (hours >= 12 && hours < 17) {
//       timeOfDay = "afternoon"
//   } else {
//       timeOfDay = "night"
//   }
//   return (
//       <h1>Good {timeOfDay} to you, sir or madam!</h1>
//   )
// }

class Greeting extends React.Component {
  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    return (
      <h1>Good {timeOfDay} to you, sir or madam!</h1>
  )

  }
}

ReactDOM.render(<App />, document.getElementById("root"));
