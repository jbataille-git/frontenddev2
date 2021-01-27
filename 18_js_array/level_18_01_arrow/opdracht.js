// zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
  console.log("Joe, ik rock de arrow functions!");
};

ikRockArrowFunctions();

let ikRock = () => {
    console.log("Joe, ik rock de arrow functions");
}

// Deel A
let ikRock = () => console.log("Joe, ik rock de arrow functions");

// Deel B
const fivePlusSeven = function () {
  return 5 + 7;
};

fivePlusSeven();

// als de functie-body niet op q regel kan, heb je een return statement nodig
let fivePlusSeven3 = () => {
  return 5 + 7;
};

// hier een impliciet return-statement
let fivePlusSeven2 = () => 5 + 7;

// Deel C
let myFunction = (a, b) => a + b;

// Deel D
let addFive = c => c + 5;

// Deel E
let createObject = () => ({greeting: "hoi"});

createObject();

// en hier een wijziging om met github te oefenen
