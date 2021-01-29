//Mosh demonstructie

const numbers = [1, -1, 2, 3];
console.log("Initial numbers:", numbers)

// filter
const filtered = numbers.filter(n => n >= 0);
console.log("Numbers filtered:", filtered);

// in de console, borduurt verder op bovenstaand filter
const items = filtered.map( n => '<li>' + n + '</li>');
console.log("Filtered mapped: ", items);

// dat aan elkaar plakken tot een string, zonder scheidingsteken
const html = items.join('');
console.log("Filtered, mapped and joined:", html);

// dan nog een ul eromheen
const ul_html = '<ul>' + items.join('') + '</ul>';
console.log("Met ul:", ul_html);


// map naar objects
const numbers2 = [1, -1, 2, 3];

const filtered2 = numbers2.filter((n) => n >= 0);

// gaat een array van objecten teruggeven
const items2 = filtered2.map(n => {
    const obj = { value: n };
    return obj;
});

// dit zie je beter in een browser-console
console.log("Objecten array items2:", items2);

// we kunnen dit korter schrijven
const items3 = filtered2.map((n) => {
  return { value: n };
});

console.log("Objecten array items2 korter geschreven:", items3);

// als we nog korter willens schrijven, in een arrow function
// moet er een () om de {}
// omdat js het verschil tussen function {} en object {} niet kan zien
// dus dit werkt niet
// const items4 = filtered.map(n => { value: n });
// en dit wel
const items4 = filtered.map(n => ({ value: n }));

console.log("Objecten array items2():", items4);

// filter en map returnen allebei een nieuwe array
// daarom kunnen we ze chainen
const numbers5 = [1, -1, 2, 3];

const filtered5 = numbers5.filter(n => n >= 0);
let  items5    = filtered5.map(n => ({ value: n}));

// kunnen we samenvoegen tot
const items6 = numbers5
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }));

console.log("Chain: ", items6);

// en dan kunnen we nog een stapje verder
const items7 = numbers5
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter(obj => obj.value > 1);

console.log("Chain and filter again: ", items7);

// en dan nog een stapje verder
// daar komt een array van twee nummers uit
const items8 = numbers5
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map(obj => obj.value)
  ;

console.log("Chain and filter and map again: ", items8);






