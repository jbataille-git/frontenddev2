import React, {Component} from "react"
import "./style.css"

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

// render: getting dressed for the day
// React may decide to run the render method again and again
//
// componentDidMount runt na eerste tonen van component, slechts 1 keer
// dus niet na updaten van het scherm
// use case: get data from an API
//



class App extends Component {
    constructor() {
        super()
        this.state = {}
    }
    
    componentDidMount() {
    // GET the data I need to correctly display, after the component has been rendered to the screen
    }

    // deprecated
    componentWillReceiveProps(nextProps) {
      // will run every time a parent-component decides to give props to a child component
      if (nextProps.whatever !== this.props.whatever) {
        // do something important here
      }
    }

    shouldComponentUpdate(nextProps, nexState) {
      // gives the developer the possibility to 
      // return true or false
    }

    componentWillUnmount() {
      // component disappaers from the screen
      // e.g. remove eventlisteners setup in componentDidMount
      // teardown or clean-up before your component disappaers

    }



    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default App

/*
the most used lifecycle-methods in React





for a referenc:
https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1

*/