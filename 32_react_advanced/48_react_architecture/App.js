import React, {Component} from "react"
import Form from "./FormContainer.js"

import "./style.css"

/*
we moeten teveel scrollen
splitsing aanbrengen tussen ui/display/rednering logic en business logic
state component
presentational component, display props en display

one component that maintains state, have methods that update state,
delegate all UI-logic to other components, so-called presentational components
A presentational component recieves props and takes care of display

De App component is een soort inhouds opgave, header erboven, footer eronder en zo

We have a nice separation of concerns

*/

function App() {
  return (
      <Form />
  )
}

export default App
