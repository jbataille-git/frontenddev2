// inline styles

import React from "react";
import ReactDOM from "react-dom";

// inline styles moeten als een js-object worden aangegeven
// met curly braces om het object aan te duiden
// en dan nog een keer curly braces om js binnen jsx aan te duiden
//
// een - streepje als in background-color levert problemen op
// en vervangen we door backgroundColor en dat werkt

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return <h1 style={{color: "#FF8C00", backgroundColor: "#FF2D00"}}>Good {timeOfDay}!</h1>;
}

ReactDOM.render(<App />, document.getElementById("root"));
