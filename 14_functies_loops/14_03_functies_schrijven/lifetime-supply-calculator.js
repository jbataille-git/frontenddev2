/*
let maxAge = 85;

const calculateSupply = function( age, amountPerDay) {
    
    return (maxAge - age) * 365 * amountPerDay;

}

console.log( "You will need " + calculateSupply( 60, 30) + " dollar to last until the ripe age of " + maxAge);
*/
/*
const calculateSupply = function( age, amountPerDay) {
    let maxAge = 85;
    console.log( "You will need " + ((maxAge - age) * 365 * amountPerDay ) + " dollar to last until the ripe age of " + maxAge);
}

calculateSupply( 60, 3.15 );
*/

const calculateSupply = function( age, amountPerDay) {
    let maxAge = 85;
    console.log( "You will need " + Math.round((maxAge - age) * 365 * amountPerDay ) + " dollar to last until the ripe age of " + maxAge);
}

calculateSupply( 60, 3.15 );

