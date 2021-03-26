import React from "react"

// in de parent-component App wordt state gewijzigd
// props wijzigt
// en daarom wordt Conditional weer aangeroepen

// de logica voor de conditional rendering is verwijderd uit deze component
// en zit nu in de App.js, daar is het beter op zijn plaats
// deze component moet alleen displayen en niet denken

function Conditional(props) {
  return <h1>Some cool stuff about conditional rendering</h1>
}

export default Conditional

