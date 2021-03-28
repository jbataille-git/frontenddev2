import React from "react"

function handleClick() {
  console.log("I was clicked");
}

// curly braces om de functie-aanroep
function App() {
    return (
        <div>
            <img readOnly alt="" src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App

// event handling in React
// quit simple
// we gebruiken de standaard JS eventhandler functions
// met de naam in camelCase
// onClick
// on MouseOver
