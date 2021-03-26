import React, {useState} from "react";
import "./style.css";

function App() {
  const [ count, setCount ] = useState(0);
  const [ answer, setAnswer ] = useState("Yes")

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  function flipAnswer() {
    setAnswer(prevAnswer => prevAnswer === "Yes" ? "No" : "Yes")
  }

  return (
    <div>
      <h1>{count}</h1>
      <h1>{answer}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={flipAnswer}>Flip answer</button>
    </div>
  );
}

export default App;

// there's a caveat if you use an object or an array in your state
// dan moet je altijd het hele object retourneren, geloof ik,
// alleen een property die gewijzigd moet worden teruggeven is niet genoeg
// met de object spread notatie is dat wel te doen
//
// even iets proberen, ik maak een tweede useState met answer
// ja, dat werkt maar vraag me niet hoe
