// inline styles

import React from "react";
import ReactDOM from "react-dom";

// inline styles moeten als een js-object worden aangegeven
// met curly braces om het object aan te duiden
// en dan nog een keer curly braces om js binnen jsx aan te duiden
//
// een - streepje als in background-color levert problemen op
// en vervangen we door backgroundColor en dat werkt

//   return <h1 style={{color: "#FF8C00", backgroundColor: "#FF2D00"}}>Good {timeOfDay}!</h1>;
// }

// netter schrijven

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

  const styles = {
    color: "#FF8C00",
    backgroundColor: "#FF2D00",
    // fontSize: 48,             // geen px schrijven! dat is al de default. Of:
    fontSize: "96px",            // of string van maken, dat kan weer wel
  };                             // andere units als em ook als string invoeren

  return <h1 style={styles}>Good {timeOfDay}!</h1>;
}

ReactDOM.render(<App />, document.getElementById("root"));
