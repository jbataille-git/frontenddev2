// class-based component
// convert functional component to class-based component
// een class maken die een method render() heeft die iets returnt

import React from "react";

import "./style.css";

// function App1() {
//   return (
//     <div>
//       <h1>Code goes here</h1>
//     </div>
//   );
// }


// als je moet bepalen wat er gerenderd moet worden en hoe het eruit moet zien
// display logic
// conditional rendering
// doe dat dan in de render() method voor de return
//
// LET OP
// als je in zo'n class props gebruikt,
// moet je er this voor zetten
class App extends React.Component {
  render() {
    // const date = new Date();
    return (
      <div>
        <h1>Code goes here {this.props.whatever}</h1>  
      </div>
    );    
  }
}

export default App;
