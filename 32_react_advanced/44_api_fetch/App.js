import React, {Component} from "react"
import "./style.css"

class App extends Component {
    constructor() {
        super()
        this.state = {
          loading: false,
          character: {}
        }
    }
    
    componentDidMount() {
      // console.log("hi ")

      this.setState({loading: true})

      // fetch("https://swapi.dev/api/people/1")
      //   .then(response => response.json())
      //   .then(data => {
      //     this.setState({
      //       loading: false,
      //       character: data
      //     })
      //   })

        fetch("https://swapi.dev/api/people/1")
        .then(response => response.json())
        .then(data => { 
          this.setState((prevState) => { 
                return {loading: false, character: data}
              }
            )
          }
        )

      }

    render() {
        return (
            <div>
                <h1>{this.state.loading ? "Loading..." : this.state.character.name}</h1>
            </div>
        )
    }
}

export default App
