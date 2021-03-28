import React from "react";
import ReactDOM from "react-dom";

function MyInfo() {
  return (
    <div>
      <h1>Mijn naam is Joost Bataille</h1>
      <p>en ik ben goed bezig</p>
      <ul>
        <li>Café de Vriendschap in Driehuizen</li>
        <li>Café Les Trois Ponts in </li>
        <li>Café het Fort in Weesp</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<MyInfo />, document.getElementById("root"));
