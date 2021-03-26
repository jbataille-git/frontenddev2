// filter
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter( function(value) {
    return value >= 0;
});

console.log("Filter:", filtered);

// schrijven als een arrow function
const filtered2 = numbers.filter( n => n >= 0);

console.log("Filter arrow:", filtered2);


// reduce
const numbers2 = [1, -1, 2, 3];

let sum = 0;
for ( let n of numbers2)
  // sum = sum + n;
  sum += n;

console.log("Som is:", sum);

// tweede parameter 0 is de initiele waarde van accumulator
const sum2 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("Som door reduce:", sum2);

// als je de tweede parameter weglaat, komt daar de eerste waarde van de array in
// en wordt de eerste ronde van de vier overgeslagen
// is dus hetzelfde als er 0 inzetten

// korter schrijven:
const sum3 = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

console.log("Som door reduce en arrow:", sum3);


