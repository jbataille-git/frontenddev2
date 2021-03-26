import React, {Component} from "react"
import "./style.css"


// https://reactjs.org/docs/forms.html
// state should be the single source of truth

class App extends Component {
  constructor() {
      super()
      this.state = {
        firstName: "",
        lastNane: ""
      };
      this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    // console.log(event);
    // console.log(event.target.nodeName);
    console.log(event.target);
    const {name, value} = event.target;  // DEZE VOORKOMT VEEL BUGS
    this.setState({
      // firstName: event.target.value,
      // lastName: event.target.value
      // event.target.name: event.target.value;
      [name]: value                               // js standaard
    });
    event.preventDefault();
  }
  
  render() {
      return (
          <div>
              <form>
                <input
                  name="firstName"            /* zorg dat de name gelijk is aan de object-property name in state*/
                  value={this.state.firstName}
                  type="text"
                  placeholder="First name"
                  onChange={this.handleChange}
                />

                <input
                  name="lastName"             /* zorg dat de name gelijk is aan de object-property name in state*/
                  value={this.state.lastName}
                  type="text"
                  placeholder="Last name"
                  onChange={this.handleChange}
                />

              <h1>
                {this.state.firstName} {this.state.lastName}
              </h1>
              </form>
          </div>
      )
  }
}

export default App

/*
forms are important, it works differently

*/