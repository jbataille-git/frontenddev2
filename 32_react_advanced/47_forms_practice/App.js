import React, {Component} from "react"
import "./style.css"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
          firstName: "",
          lastName: "",
          age: "", 
          gender: "other",
          destination: "",
          isVegan: false,
          isKosher: false,
          isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
      const {name, value, type, checked} = event.target;
      if (type === "checkbox") {
        this.setState({
          [name]: checked
        })
        } else {
        this.setState({
          [name]: value
        })  
      }
    }

    render() {
        return (
            <main>
                <form>
                    <input 
                      placeholder="First Name"
                      name="firstName"
                      type="text"
                      value={this.state.firstName}
                      onChange={this.handleChange}
                    />
                    <br />
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      type="text"
                      value={this.state.lastName}
                      onChange={this.handleChange}
                    /><br />
                    <input
                      placeholder="Age" 
                      name="age"
                      type="text"
                      value={this.state.age}
                      onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    
                    <label>Gender</label>
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
                    <label>
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      checked={this.state.gender === "other"}
                      onChange={this.handleChange}
                    />Other
                    </label>
                    <br />
                    <br />

                    <label>Destination:</label>
                    <br />
                    <select 
                      value={this.state.destination}
                      onChange={this.handleChange}
                      name="destination"
                    >
                      <option value="">- Please choose a destination --</option>
                      <option value="De Drentse Aa">De Drentse Aa</option>
                      <option value="geuldal">Het Geuldal</option>
                      <option value="beemster">De Beemster</option>
                    </select>
                    <br />
                    <br />
                    
                    <label>Dietary restrictions</label>
                    <br />
                    <input
                      type="checkbox"
                      name="isVegan"
                      checked={this.state.isVegan}
                      onChange={this.handleChange}
                    />
                    <label>Vegetarian</label>
                    <br />
                    <input
                      type="checkbox"
                      name="isKosher"
                      checked={this.state.isKosher}
                      onChange={this.handleChange}
                    />
                    <label>Kosher</label>
                    <br />
                    <input
                      type="checkbox"
                      name="isLactoseFree"
                      checked={this.state.isLactoseFree}
                      onChange={this.handleChange}
                    />
                    <label>Lactosefree</label>
                    <br />
                    <br />
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Your dietary restrictions: </p>
                <p>{this.state.isVegan ? "Vegan " : ""} 
                {this.state.isKosher ? "Kosher" : ""} 
                {this.state.isLactoseFree ? " Lactose free" : ""}</p>
            </main>
        )
    }
}

export default App


/*

<p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
<p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
<p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>                </p>

*/                