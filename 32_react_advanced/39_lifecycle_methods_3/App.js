// gebaseerd op https://scrimba.com/g/greacthooks
// maar het voorbeeld is niet heel duidelijk
// Als je niks doet onstaat er een eindeloze lus
// en daarom de if
//
// De color kun je in pricipe ook gewoon in de functie increment wijzigen
//
// setState causes re-render

// import React, {Component} from "react"
import React from "react"
import randomcolor from "randomcolor"
// deze moest ik even ophalen met npm install randomcolor
import "./style.css"

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          count: 0,
          color: ""
      }
      this.increment = this.increment.bind(this)
  }
  
  increment() {
      console.log("increment")
      this.setState(prevState => {
          return {
              count: prevState.count + 1,
              // color: randomcolor()
          }
      })
  }
  
  componentDidMount() {
    // console.log("Did mount");
  }

  // dit stukje code gaat af nadat de teller verhoogd is
  // en om te voorkomen dat we in een eindeloze lus terecht komen, hebben we de if nodig
  // setState leidt namelijk weer tot een render en een componentDidUpdate
  // daarom is die voorbeeld een beetje moelijk
  // maar het maakt het mogelijk om een soort 'post-update' trigger uit te voeren
  componentDidUpdate(prevProps, prevState) {
    console.log("Did update");
    console.log(prevState);
    console.log(this.state);
    if(prevState.count !== this.state.count) {
      console.log("Did color update")
      const newColor = randomcolor()
      this.setState({color: newColor})
  }

  }

  render() {
      console.log("Render");
      return (
          <div>
              <h1 style={{color: this.state.color}}>{this.state.count}</h1>
              <button onClick={this.increment}>
                  Increment!
              </button>
          </div>
      )
  }
}

export default App

// the first time the component renders, it does render and componentDidMount
// after that it does render and componentDidUpdate
