// opdracht A

const addTheWordCool = function (array) {
  array.push("cool");
  return array;
};

console.log("Opdracht A: Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

// opdracht B

const amountOfElementsInArray = function (array) {
    return array.length;
}

console.log("Opdracht B: Aantal elementen in array: ", amountOfElementsInArray(["appels", "peren", "citroenen"]));

// opdracht C

// const selectBelgiumFromBenelux = function (array) {
//     return array[0];
// }

// kan ik dat als een arrow functie schrijven
// ja dat kan
// let firstCountry = (array) => {
//     return array[0];
// }
// of
//let firstCountry = (array) => array[0];
let firstCountry = array => array[0];

// kan ook met array.shift() of met array.slice(0, 1) slice retourneert een nieuwe array, wil je dat wel?

//console.log("Opdracht C: Eerste element:", selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
console.log("Opdracht C: Eerste element:", firstCountry(["Belgie", "Nederland", "Luxemburg"]));

// opdracht D het laatste element
const lastElementInArray = array => array[array.length - 1];
// kan ook met array.pop

console.log("Opdracht D: Laatste element:", lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));

// opdracht E
const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

// slice maakt een nieuwe array die een gedeelte van de originele bevat, does not mutate
const impeachTrumpSlice = function(array) {
    let slicedArray = array.slice(1);
    return slicedArray;
  }

console.log("Opdracht E voor slice presidents:", presidents); 
console.log("Opdracht E slice:", impeachTrumpSlice(presidents));
console.log("Opdracht E na slice presidents:", presidents);

// splice returns an array of the deleted elements, does mutate the original array
const impeachTrumpSplice = function (array) {
  return array.splice(1 , array.length - 1);
};

console.log("Opdracht E voor splice presidents:", presidents);
console.log("Opdracht E splice in nieuwe array:", impeachTrumpSplice(presidents));
console.log("Opdracht E na splice presidents:", presidents);

// opdracht F

const stringsTogether = function (array) {
    return array.join(' ');
}

console.log("Opdracht F join:", stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));

// opdracht G

const combineArrays = function(array1, array2) {
    return array1.concat(array2);
}

console.log("Opdracht G combine:", combineArrays([1, 2, 3], [4, 5, 6]));
