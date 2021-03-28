// dit wordt index.js
import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(WHAT DO I WANT TO RENDER, WHERE DO I WANT TO RENDER IT)

// dit wordt index.html
// <html>
//    <head>
//         <link rel="stylesheet" href="style.css">
//     </head>
//     <body>
//         <div id="root"></div>                  // container
//         <script src="index.pack.js"></script>  // dit gaat goed komen met index.js
//     </body>
// </html>

// dus
// alles van react komt in de root div
// ReactDOM.render(WHAT DO I WANT TO RENDER, document.getElementById("root"));

// jsx: we kunnen html schrijven in js
ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));

// dit kan niet:
// ReactDOM.render(<h1>Hello World</h1><p>This is a paragraph</p> , document.getElementById("root"));
// twee react elementen naast elkaar kan niet
// moet omvat worden door een ander element
// bijvoorbeeld
// ReactDOM.render(<div><h1>Hello World</h1><p>This is a paragraph</p></div> , document.getElementById("root"));

