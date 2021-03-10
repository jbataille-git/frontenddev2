// functions calling functions exercise
// Hey kiddo
const isAdult = function(age) {
    return age >= 18;
};

const greet = function(age) {
    let greeting = "";
    if (isAdult(age)) {
        greeting = "Hello there"
    } else {
        greeting = "Hey kiddo"
    }
    return greeting;
}

// console.log("My greeting is: " + greet(100));

// VAT calculation
const calculateVat = function( amount, percentage) {
    return (amount * percentage)/100;
}

const totalPrice = function( price, percentage) {
    return price + calculateVat(price, percentage);
};

// console.log("prijs inclusief VAT: " + totalPrice(100, 6));

// VAT calculation 2
const split = function( a, b) {
    let baseprice = a/(1 + (b/100));
    let vat       = a - baseprice;
//    let returnArray = [baseprice, vat];
//    return returnArray;
    return [baseprice, vat];
}

const splitVat = function( amount, percentage) {
    return split( amount, percentage);
}

console.log( "baseprice: " + splitVat(121, 21)[0] + " VAT: " + splitVat(121, 21)[1] );
console.log( "baseprice: " + splitVat(2.18, 9)[0] + " VAT: " + splitVat(2.18, 9)[1] );