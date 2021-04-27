// const number = Math.random();
// console.log("Math.random(): " + number)
// console.log("* 50: " + number * 50)
// console.log("floor: " + Math.floor(number * 50))
// console.log( Math.floor(Math.random() * 50))
// console.log( "floor random: " + Math.floor(Math.random()))

/*
const number = Math.random();
console.log("Math.random(): " + number)
console.log("          * 2: " + number * 2)
console.log("        floor: " + Math.floor(number * 2))
console.log("        round: " + Math.round(number * 2))
*/

/*
let person = { firstName: "joost", lastName: "bataille", age: 61};

console.log("persoon1:")
console.log(person);

const person2 = { ...person};

console.log("persoon2:")
console.log(person2)

const person3 = { ...person, firstName: "ben"}
console.log("person3:")
console.log(person3)

const person4 = { ...person, firstName: "frits", lastName: "egters"}
console.log("person4:")
console.log(person4)
*/

let arr1 = [ 1, 2];
const arr2 = [ 3, 4];

arr1 = arr1.concat(arr2);
console.log(arr1);


