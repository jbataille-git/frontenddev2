import React, { Component } from "react";
import "./style.css";

// https://reactjs.org/docs/forms.html
// state should be the single source of truth

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastNane: "",
      essay: "",
      isFriendly: true,
      gender: "",
      favColor: "blue"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*
  handleChange(event) {
    // console.log(event);
    // console.log(event.target.nodeName);
    console.log(event.target);
    const {name, value, type, checked} = event.target;  // DEZE VOORKOMT VEEL BUGS
    this.setState({
      // firstName: event.target.value,           // is mogelijk
      // lastName: event.target.value             // deze ook
      // event.target.name: event.target.value;   // deze niet
      [name]: value                               // js standaard, property als string, dan []
    });
    event.preventDefault();
  }
*/

  // voor de checkbox hebben we een nieuwe versie nodig

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value });
    }
    // of met een ternary
    //  type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  handleSubmit() {
    console.log("heb net submit")
  }

  // textarea is in React a selfclosing elemnt, different than standard HTML
  // dan kunnen we het hetzelfde behandelen als input dus da's fijn
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="firstName" /* zorg dat de name gelijk is aan de object-property name in state*/
            value={this.state.firstName}
            type="text"
            placeholder="First name"
            onChange={this.handleChange}
          />

          <input
            name="lastName" /* zorg dat de name gelijk is aan de object-property name in state*/
            value={this.state.lastName}
            type="text"
            placeholder="Last name"
            onChange={this.handleChange}
          />

          <textarea
            name="essay"
            value={this.state.essay}
            placeholder="Write your essay here"
            onChange={this.handleChange}
          />
          <br />

          <label>
            <input
              type="checkbox"
              name="isFriendly"
              checked={this.state.isFriendly}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />Male
          </label>
          <br />
          <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />Female
          </label>

          <br />
          
          <label>Favourite color:</label>
          <select 
            value={this.state.favColor}
            onChange={this.handleChange}
            name="favColor"
          >
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
          </select>

          <h1>
            {this.state.firstName} {this.state.lastName}
          </h1>
          <h2>You are a {this.state.gender}</h2>
          <h2>Your favourite color is {this.state.favColor}</h2>

          <button>Submit</button>

        </form>
      </div>
    );
  }
}

export default App;

/*
forms are important, it works differently

Een button in een form is default een submit button en fires onSubmit
Bob schrijft dan bovenin <form onSubmit={this.handleSubmit}
en dan maak je nog een handler

*/
Hoi, denk dat het iets eenvoudiger is om PowerShell te installeren en gebruiken. Met WSL (Windows Subsystem Linux) wordt het nodeloos ingewikkelder en je hebt genoeg aan je hoofd. Werkt makkelijker, denk ik.
Installeer eerst Windows Terminal, dat is wel handig en daarin kun je eenvoudig Powershell uitvoeren.
Voor het begrip: een shell praat tegen je computer en je hebt een terminal nodig om tegen je shell te praten.