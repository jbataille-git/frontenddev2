https://vimeo.com/498441973/4b3b246b4f

/*
Flip van Wijk

The keyword this refers to the (owner) object that it belongs to

this alone refers to 
in browser: window
in Node.js: global

het verwijst naar het huidige object, naar het object waar het toe behoort

*/
console.log( this === window); // true

a = 420;
console.log(window.a); // 420

this.b = "Winc";
console.log(window.b) // "Winc"
console.log(b)        // "Winc"

// this referst to a new instance
// meest gebruikte voorkomen van this, in een constructor
const Person = function(fn, ln) {
  this.first_name = fn;
  this.last_name  = ln;

  this.displayName = function() {
    console.log(`Name: ${this.first_name} ${this.last_name}`);
  }
}

let person = new Person("John", "Reed");
person.displayName();   // Prints name: John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName();

// dit doet eigenlijk hetzelfde als
let person3 = {
  first_name: "John",
  last_name: "Reed",
  displayName: function(){ console.log("Name: " + this.first_name + ' ' + this.last_name)},
  displayName2: function(){ console.log(`Name: ${this.first_name} ${this.last_name}`)}
}

// The keyword this refers to the (owner) object that it belongs to
// this in an event handler
// een html element is een object en dat is de eigenaar van this
<button onclick="this.style.display='none'">
  Click to remove me!
</button>






