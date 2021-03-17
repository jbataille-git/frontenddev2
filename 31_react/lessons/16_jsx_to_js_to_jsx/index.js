import React from "react";
import ReactDOM from "react-dom";

// hoe gaan we van Javascript naar JSX?
// via de curly braces
// alles in return is jsx en via curly braces kunnen we even overstappen naar js
//
// h1 eerste regel is oude syntax
// h2 is nieuwe ES6 syntax

// dan kan er dus logica in de return

function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  
  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }
  
  return (
    <h1>Good {timeOfDay}!</h1>
  )

//   return (
//     <h1>It is currently about {date.getHours() % 12 } o'clock!</h1>
//   )
// }

}

ReactDOM.render(<App />, document.getElementById("root"));
