// https://board.wincacademy.nl/unit/view/id:5501
// les Niels
// 2 ways to use setState in React
// if you don't use hooks, setState is the most used way
// you could use forceUpdate but that's a last resort and it costs performance
// setState is the way to go if you don't use React-hooks
//
// it can be difficult if your state-object is complicated
//   and you're manipulating objects or arrays
//
// do not current state directly, always user setState
//
// difficult way, easier to understand:
// using a function that knows how to go from previous to new state
// 
// this.setState((prevState) => {
//    ....
//    return newSate
// })
//
// if our state has arrays or objects, we need to copy those
// then we change the copy
// NEVER change the original state-object or state-array
// so you create a new state yourself
//
// over arrays kopieren:
// doe dat niet met = want dat is een copy by reference
// Niels doet het hier met ... spread-operator, dat kan maar is wat onduidelijk
// en kopieert maar één niveau, goed genoeg voor arrays.
// Betere manier is Array.from()

import React from "react";
import ReactDOM from "react-dom"
import "./styles.css"
import PresentForm from "./PresentForm";
import WordForm from "./WordForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      presents: ["wine", "chocolate", "socks"],
      favoriteWords: ["hello", "morning", "zebra"]
    };

    // make sure certain functions have correct this
    this.addPresent = this.addPresent.bind(this);
    this.addWord = this.addWord.bind(this);
  }

  // first way to setState
addPresent(present) {
  this.setState((prevState) => {
    //copy the presents of the old state
    const newPresents = [...prevState.presents];       // array kopieren
    // add present to newPresents
    newPresents.push(present);
    // create newState
    const newState = { ...prevState, presents: newPresents};
    return newState;
    })
  }

addWord(word) {
    // this.setState((prevState) => {
    // // copy the word of the old state
    // const newFavoriteWords = [...prevState.favoriteWords];
    // // add word to newFavoriteWords
    // newFavoriteWords.push(word);
    // //create newState
    // const newState = { ...prevState, favoriteWords: newFavoriteWords};
    // return newState;

    // tweede methode:
    // geen functie geven aan setState maar een comleet object
    // we start with the complete state-object
    // and then modify the favoriteWords key with the new array
    // 
    // setState is smart and can do the ...this.state copy operation itself
    // so we can leave it out
    // this.setState ({
    //   ...this.state,
    this.setState ({
      favoriteWords: [ ...this.state.favoriteWords].concat([word])
      })
    // });
  };

  render() {
    // make list of presents
    const presents = this.state.presents.map((present, index) =>
      <li key={index}>{present}</li>
    )

    // make list of words
    const favoriteWords = this.state.favoriteWords.map((word, index) => 
      <li key={index}>{word}</li>
    )

    return (
      <div className="App">
        <h1>React setState</h1>
        <h2>Presents</h2>

        <PresentForm onSubmit={this.addPresent} />
        <ul>{presents}</ul>

        <h2>Favorite words</h2>
        <WordForm onSubmit={this.addWord} />
        <ul>{favoriteWords}</ul>
      </div>  
    )
  }
};

export default App;