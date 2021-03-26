import React, { Component } from "react";

import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      unreadMessages: [
        "Call your mom!",
        "New spam email available. All links are definitely safe to click."
      ],
    };
  }

  // met een ternary operator
  render() {
    return (
      <div>
        {this.state.unreadMessages.length > 0 
          ? <h2>You have unread messages</h2>
          : null}
      </div>
    );
  }
}

export default App;

/* <h2>You have {this.state.unreadMessages.length} unread messages!</h2> */

/*
je kunt ook schrijven
this.state.unreadMessages.length > 0 &&
<h2>You have {this.state.unreadMessages.length} unread messages </h2>

vanwege de manier waarop js een && evalueert:

true && true: retourneer true
true && false: als eerste true is, retourneert 'ie de tweede  <= dat doet 'ie hier
false && ... : als eerste false, retourneer false

Soms zie je dit en als je 't niet weet, is 't onbegrijpelijk
*/
