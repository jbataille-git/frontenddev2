import React, { Component } from "react";
import FormComponent from "./FormComponent.js"

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "other",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      this.setState({
        [name]: checked,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }
  
  render() {
    return (
      <FormComponent
        handleChange={this.handleChange}
        stateData={this.state}           
      />
    )
  }
}

export default Form;

/*
de regel stateData={this.state} kun je misschien vervangen door
{...this.state}
dan kun je in de ontvangende module zeggen props.firstNamein plaats van props.state.firstName en zo
dat scheelt schrijfwerk
maar in Scrimba werkt dat niet volgens Bob

*/