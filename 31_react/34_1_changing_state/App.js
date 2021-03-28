import React from "react"
import "./style.css"

// als je in een method setState aan wilt roepen
// moet je de method binden aan je class
// en dat doe je in de constructor
// 

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }    

    handleClick() {
      // console.log('Working!');
//      this.setState({ count: 1  })        // passing in an object literal is an easy way
      this.setState(prevState => {
        return {
          count: prevState.count + 1        // prevState.count++ will be modifying original value, that is not what we want
        }
      })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>
                  Change
                </button>
            </div>
        )
    }
}

export default App

// <button onClick={() => console.log('een erbij doen')}>

// doorgeven binnen de div via props  <ChildComponent count={this.state.count} />
// React geeft veranderde waarde door en laat opnieuw renderen