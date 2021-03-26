import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      // setCount((prevCount) => prevCount + 1);
    }, 1000)
    return () => clearInterval(intervalId)
  }, []);

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  //
  // // als je in de tweede variabele een lege array zet []
  // runt useEffect alleen bij componentDidMount,
  // dat is er geen 'watch' meer naar andere wijzigingen in state

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
    </div>
  );
}

export default App;

// clean up some side-effects
// bijvoorbeelde een setInterval, een terugkerende job
// als een component unmount, moet die setInterval opgeruimd worden
// in een class-component gebruik je componentWillUnmount
// hoe doen we dat hier?
//
// het id opvangen van de aangemaakte interval
// en in de return van useEffect de verwijderfunctie zetten
//
//
// useEffect is een andere manier om met lifecycle methods te werken in je component
//
// componentDidMount nadoen door een empty array in de tweede parameter te zetten
// componentDidUpdate nadoen door een watch op een variabele toe te voegen
// componentWillUnmount nadoen met de returned function van useEffect
//
// takes some getting used to
// code is simpeler than class-components
// organisation is easier
//
// vervolgcursus over React-hooks: https://scrimba.com/g/greact

