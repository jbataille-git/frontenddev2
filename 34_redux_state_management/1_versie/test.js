/*
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
*/

/*
const groceryItem = { 
  id: 1,
  title: "Verende zadelpen"
}

console.log("groceryItem: " + groceryItem);

let newCartItem = groceryItem;
console.log("newCartItem: " + newCartItem)

console.log("newCartItem als object")
newCartItem = {}
console.log("newCartItem leeg object: " + newCartItem)

for (let key in groceryItem) {
  newCartItem[key] = groceryItem[key]
}

console.log("newCartItem gevuld object:")
console.log(newCartItem)

newCartItem.amount = 1;
console.log("newCartItem met amount:")
console.log(newCartItem)


// let's copy all user properties into it
// for (let key in user) {
//   clone[key] = user[key];
// }
*/

const antwoorden = [ "ja" , "nee" , "misschien", "ja", "ja" , "nee"];

let aantalJa = 0;

const filterdAntwoorden = antwoorden.filter((item) => {
  return item === "ja" 
  }
)


console.log(filterdAntwoorden)

