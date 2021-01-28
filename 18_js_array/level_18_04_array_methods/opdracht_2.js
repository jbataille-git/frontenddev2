// Opdracht A

const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];

// deze werkt
// const spider = superheroes.find( element => element.name === "Spiderman")
// en dezelfde als arrow function ook
// const spider = superheroes.find( function (element) {
//     return element.name === "Spiderman";
//});
// console.log("Opdracht A: ", spider);

// Hier komt jouw functie
const findSpiderman = function (array) {
  return array.find(function (element) {
    return element.name === "Spiderman";
  });
};

console.log("Opdracht A 1:", findSpiderman(superheroes));

// om het beter te snappen deed ik het eerst met een tussenvariabele
//
const findSpiderman2 = function (array) {
  let spider = array.find(function (element) {
    return element.name === "Spiderman";
  });
  return spider;
};

console.log("Opdracht A 2:", findSpiderman2(superheroes));

// dan kan het ook met een arrow functie
const findSpiderman3 = (array) =>
  array.find((element) => element.name === "Spiderman");

console.log("Opdracht A 3:", findSpiderman3(superheroes));

// Opdracht B

const doubleArrayValues = function (array) {
  return array.map((x) => x * 2);
};

console.log("Opdracht B1:", doubleArrayValues([1, 2, 3]));

// in kleinere stappen
const numbersToDouble = [10, 20, 30];
const doubleNumbers = numbersToDouble.map((x) => x * 2);

console.log("Opdracht B2: ", doubleNumbers);

const doubleNumbers2 = function (array) {
  return array.map((x) => x + 10);
};
// en deze als een arrow functie
// const doubleNumbers2 = (array) => array.map( x => x + 10);
//const doubleNumbers2 = array => array.map( x => x + 10);

console.log("Opdracht B3:", doubleNumbers2([1, 2, 3]));

// Opdracht C
const containsNumberBiggerThan10 = function (array) {
    return array.some((item) => {
        return item > 10;
    })
};

console.log("Opdracht C1: ", containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
console.log("Opdracht C2: ", containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));

// kan ik het anders schrijven
let arrayToTest = [1, 4, 3, 6, 9, 7, 11];
let doesContain = arrayToTest.some((item) => item > 10);
console.log("Opdracht C3: ", doesContain);

// Opdracht D
// met some
// en met includes
const isItalyInTheGreat7 = function (array) {
    return array.some((item) => {
        return item === "Italy";
    })
}

const isItalyInTheGreat8 = function (array) {
  return array.includes("Italy");
};

console.log("Opdracht D1:", isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']));
console.log("Opdracht D2:", isItalyInTheGreat8(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']));

// Opdracht E
const tenfold = function (array) {
    return array.map( x => x * 10);
}

console.log("Opdracht E1:", tenfold([1, 4, 3, 6, 9, 7, 11]));

// maar hoe je doe je deze forEach?
// een nieuwe array aanmaken? Ja. Dit komt uit de oplossing
const tenfold2 = function (array) {
  let newArray = [];
  array.forEach((number) => {
    newArray.push(number * 10);
  });
  return newArray;
};

console.log("Opdracht E2:", tenfold2([1, 4, 3, 6, 9, 7, 11]));

// Opdracht F
const isBelow100 = function (array) {
    return array.every((item) => {
        return item < 100;
    })
};

console.log("Opdracht F1:", isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]));

// Opdracht G
const array1 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
//const reducer = function (accumulator, currentValue) {
//    return accumulator + currentValue;
//};

// deze werkt
console.log("Opdracht G1:", array1.reduce(function(a,b) {
    return a + b;
    }));

// anders schrijven als arrow function
console.log("Opdracht G2:", array1.reduce((a,b)=> a + b));

// en dan nog een keer anders
const bigSum = function (array2) {
     return array2.reduce((currentTotal, item) => currentTotal + item);
};

console.log("Opdracht G3:", bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]));






