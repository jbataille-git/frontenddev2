// inline styles 3

import React from "react";
import ReactDOM from "react-dom";

// js wijst dynamisch een style toe

function App() {
  const date = new Date(2021, 3, 8, 14);
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 30,
  };

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#04756F";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    styles.color = "#8914A3";
  } else {
    timeOfDay = "night";
    styles.color = "#D90000";
  }

  return <h1 style={styles}>Good {timeOfDay}!</h1>;
}

ReactDOM.render(<App />, document.getElementById("root"));
