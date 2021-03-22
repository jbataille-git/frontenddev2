// vervang
// componentDidMount
// componentDidUpdate
// componentWillUnmount


import React, {useState, useEffect} from "react";
import randomcolor from "randomcolor"
import "./style.css";

function App() {
  const [ count, setCount ] = useState(0);
  const [ color, setColor ] = useState("")

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  useEffect(() => {
    // deze voert uit bij componentDidMount
    // en ook:
    // als we niks doen, leidt dit tot een eindeloze lus
    // omdat iedere rendering leidt tot useEffect
    // en useEffect verander state en leidt dus tot
    // opnieuw rendering
    // dat lossen we op in de tweede parameter, een array
    // alleen als deze variabele uit state veranderd is, wordt useEffect uitgevoerd
    setColor(randomcolor())
  }, [count])

  // als je in de tweede variabele een lege array zet []
  // runt useEffect alleen bij componentDidMount

  return (
    <div>
      <h1 style={{color: color}}>{count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;

// je gebruikt een class-method voor setState en lifecycle-methods
// maar state kan ook in een functional component, hebben we net gezien
//
// kunnen we dan ook lifecycle methods gebruiken in een niet-class component
// ja, met useEffect()
// die vervangt componentDidMount, componentDidUpdate, componentWillUnmount
//
// side-effects?
// dingen doen buiten de eigen component, bijvoorbeeld:
//
// Network request
// manual DOM manipulation
// event listeners or timeouts of intervals
