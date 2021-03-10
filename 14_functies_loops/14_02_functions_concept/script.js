// deel A
// de instructievideo's waren offline dus heb ik een poging gedaan; zoiets moet het zijn, denk ik
/*
0 snijd een broodje doormidden
0 smeer boter op beide helften
0 snijd een plak kaas af
0 doe de kaas op een van de helften
0 doe de tweede helft erboven op
0 alsjeblieft, een broodje kaas
*/

/*
function makeSandwich() {
    console.log("snijd een broodje doormidden");
    console.log("snijd een plak kaas af en beleg het broodje ermee");
    console.log("alsjeblieft, hier is je broodje kaas");
}

makeSandwich();
*/

// deel B
/*
// hieronder de declaratie van de functie
function makeSandwich(topping) {
    console.log("snijd een broodje doormidden");
    console.log("snijd een plak " + topping + " af en beleg het broodje ermee");
    console.log("alsjeblieft, hier is je broodje " + topping);
}

// en hier roep ik de functie aan
makeSandwich("worst");
makeSandwich("salami");

*/

// deel C en D
function calculateDiscountedPrice( totalAmount, discount) {

    if ( totalAmount > 25 ) {
        return Math.round(totalAmount - discount);        
    } else {
        return Math.round(totalAmount);
    }
}

console.log( calculateDiscountedPrice( 26, 5.51) );

// oh, deze moeten anders, namelijk als function expression

const calculateDiscountedPrice = function ( totalAmount, discount) {

    if ( totalAmount > 25 ) {
        return Math.round(totalAmount - discount);        
    } else {
        return Math.round(totalAmount);
    }
}

console.log( calculateDiscountedPrice( 26, 5.51) );


/*
// een variatie van mezelf
function calculateDiscountedPrice( totalAmount, discount) {
    
    let returnAmount = 0;

    if ( totalAmount > 25 ) {
        // cashAmount = Math.round(totalAmount - discount);
        returnAmount = totalAmount - discount;
    } else {
        // cashAmount = Math.round(totalAmount);
        returnAmount = totalAmount;
    }

    return returnAmount;

}

console.log( calculateDiscountedPrice( 25.0005, 5.51) );
*/