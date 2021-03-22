import React, {useState} from "react";
import "./style.css";

function App() {
  const [ count, setCount ] = useState(0);

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;

// there's a caveat if you use an object or an array in your state
