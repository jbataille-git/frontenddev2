// Shaun javascript for beginners lesson 38
// remove elements from the dom

// grab the parent item
var parent = document.getElementById("main-nav").getElementsByTagName("ul")[0];

// grab the child item
var child = parent.getElemnetbyTagName("li")[0];

// method aanroepen
parent.removeChild(child);

// maar dat kan ook anders door het verwijderde elemnent in een variabele op te slaan
var removed = parent.removeChild(child);

// en dan kan ik later nog eens zeggen
parent.appendchild(removed);



