// state
// the data that a component maintains
// it can change values
// versus props that can not be changed
//
// state is a way for a component to maintain it's own data
// and change it's own data if it needs to

// the component needs to be a class-based component
//
// if you want state or if you want a component to maintain it's own data
// you'll need a class-based component

// first we need a constructor method
// and we give an initial value to our state
// my component will have this value when it is initialized

// we can pass state from a parent component to a child component with props
// React will pass state on to every child-component that uses the state from its parent


import React from "react"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      answer: "Yes"
    };
  }


  render() {
      return (
        <div>
          <h1>Is state important to know? {this.state.answer}</h1>
        </div>
      )
  }
}

export default App