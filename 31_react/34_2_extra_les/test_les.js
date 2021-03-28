
console.log( this );

// this referst to a new instance, meest gebruikte voorkomen van this
const Person = function(fn, ln) {
  this.first_name = fn;
  this.last_name  = ln;

  this.displayName = function() {
    console.log(`Name: ${this.first_name} ${this.last_name}`);
  }
}

let person = new Person("John", "Reed");
// person.displayName();   // Prints name: John Reed
let person2 = new Person("Paul", "Adams");
// person2.displayName();  // Prints name: Paul Adams

console.log(person);

// doet eigenlijk hetzelfde als
// let person3 = {
//   first_name: "John",
//   last_name: "Reed",
//   displayName: function(){ console.log("Name: " + this.first_name + ' ' + this.last_name)},
//   displayName2: function(){ console.log(`Name: ${this.first_name} ${this.last_name}`)}
// }

// console.log("over person3:")
// person3.displayName();
// person3.displayName2();