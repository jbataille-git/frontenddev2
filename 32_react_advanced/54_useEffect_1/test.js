const person = { name: "Joe", age: 42 };
// const { name , age } = person
const { name, age } = person;

console.log(person.name);
console.log(person.age);

console.log("beetje destructureren");
console.log(name);
console.log(age);


console.log("array destructuring");

const state = ["ja", "nee", "misschien"];
const [state1, state2, state3, state4] = state;

console.log(state1);
console.log(state2);
console.log(state3);
console.log(state4);


