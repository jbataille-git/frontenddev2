import React from "react"

// in de parent-component App wordt state gewijzigd
// props wijzigt
// en daarom wordt Conditional weer aangeroepen

// function Conditional(props) {
//   // console.log(props.isLoading)  
//   // console.log("Conditional is called")  

//   if(props.isLoading === true) {
//     return (
//         <h1>Loading...</h1>
//     )
//   } else {
//     return (
//         <h1>Some cool stuff about conditional rendering</h1>
//     )
//   }
// }

export default Conditional

/* 
we kunnen ook schrijven, met een implied else:

  if(props.isLoading === true) {
    return (
        <h1>Loading...</h1>
    )
  } 
  return (
      <h1>Some cool stuff about conditional rendering</h1>
  )

en Bob vindt dat mooi

*/

// met de ternary

function Conditional(props) {
  return (
      <div>
          
          {props.isLoading ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>}
          
      </div>
  )
  
}