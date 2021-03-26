import React from "react";
import ReactDOM from "react-dom";

// hoe gaan we van Javascript naar JSX?
// via de curly braces
// alles in return is jsx en via curly braces kunnen we even overstappen naar js
//
// h1 eerste regel is oude syntax
// h2 is nieuwe ES6 syntax

function App() {
  const firstName = "Bob";
  const lastName = "Ziroll";

  return (
    <div>
      <h1>Hello {firstName + " " + lastName}!</h1>
      <h2>Hello again {`${firstName} ${lastName}`}!</h2>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
