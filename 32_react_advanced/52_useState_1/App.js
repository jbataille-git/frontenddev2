import React, { useState } from "react";
import "./style.css";

// ombouwen van class component naar functional component

function App() {
  // alles wat je in useState invoert, komt erin te staan
  // kijk op de console
  // in een array van twee elementen, in het eerste element
  // const value = useState("Yes ");

  // dan moeten we iets doen wat array destructuring heet,
  // het lijkt op object destructuring:
  // const person = { name: "Joe", age: 42}
  // const { name, age } = person

  // const [value] = useState("Neuh");
  // console.log(value);

  // versie 3: we kunnen die nieuwe array noemen wat we willen dus dan kan dit ook:
  const [answer] = useState("Yes");
  console.log(answer);

  return (
    <div>
      {/* <h1>Is state important to know? {value[0]} </h1> */}
      {/* <h1>Is state important to know? {value} </h1> */}
      <h1>Is state important to know? {answer}</h1>
    </div>
  );
}

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             answer: "Yes"
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Is state important to know? {this.state.answer}</h1>
//             </div>
//         )
//     }
// }

export default App;

// dus als we zeggen const [ answer ] = useState("Yes")
// stoppen we iets in de state en dat krijgen we terug in een variabele
// en we hoeven geen object meer aan te maken om state in op te slaan
//
// useState geeft een array terug en die komt in answer terecht
