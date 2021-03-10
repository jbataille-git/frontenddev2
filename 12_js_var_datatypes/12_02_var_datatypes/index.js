let name = 'Mosh';
console.log( name );

// cannot be a reserved keyword
// should be meaningfull
// cannot start with a number
// Cannot contain space of hyphen (-)
// camelcase: firstName
// Are case sensitve!!!
// Each one on a new line, best practice. Meerdere op een regel kan wel

let firstName = 'Mosch';
let lastName = 'Hamedani';

// ----------------------------------------------------------------------------

const interestRate= 0.3;
// assignment to constant variable error, dit gaat niet goed
interestRate = 2;
console.log(interestRate);

// ----------------------------------------------------------------------------
// PRIMITIVES
//  string
//  number
//  boolean
//  undefined
//  null

let name = 'Mosch';         // string literal
let age = 30;               // number literal
let isApproved = true;      // boolean literal  true or false
let firstName = undefined;  // zeldzaam
let lastName = null;        // leeg

// ----------------------------------------------------------------------------
// DYNAMIC VARIABLES, DYNAMIC LANGUAGE, type of variabele is assigned ad runtime
// variabelen kunnen van datatype veranderen
// gewoon door er een andere waarde aan toe te kennen
// opvragen via console: typeof <naam_van_variabele>
let firstName = 'Mosch';
firstName = 1;

// ----------------------------------------------------------------------------
// all numbers are of type numbers, no integers of decimals
let age = 30.1;
// typeof age: Number;


// undefined is een value maar ook een type
let firstName = undefined;
// typeof firstName: undefined;



