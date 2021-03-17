import React from "react";

// 03
// er is een object contact om het object props gezet
// en dat moeten we hier dan anders opvangen
function Joke(props) {
  console.log(props);
  return (
    <div className="joke-card">
          <p style={{display: props.question ? "block" : "none"}}>question: {props.question}</p>
          <p>punchline: {props.punchLine}</p>
      <hr/>
    </div>
  );
}

export default Joke;

// conditional rendering and styling:
// 
// <p style={{display: !props.question && "none"}}>question: {props.question}</p>
// <p style={{color: !props.question && "#888888"}}>punchline: {props.punchLine}</p>
