import React, {Component} from "react"
import "./style.css"


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
    
    static getDerivedStateFromProps( props, state) {
      // return the new, updated state based upon the props
      // you propably do not need this method and it is discouraged
    }

    getSnapshotBeforeUpdate() {
      // create a backup of the current way things are
    }

    // deprecated
    // componentWillMount() {

    // }

    componentDidMount() {
    // GET the data I need to correctly display, after the component has been rendered to the screen
    }

    // deprecated
    // componentWillReceiveProps(nextProps) {
    //   // will run every time a parent-component decides to give props to a child component
    //   if (nextProps.whatever !== this.props.whatever) {
    //     // do something important here
    //   }
    // }

    shouldComponentUpdate(nextProps, nexState) {
      // gives the developer the possibility to 
      // return true or false
    }

    // deprecated
    // componentWillUpdate() {

    // }

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