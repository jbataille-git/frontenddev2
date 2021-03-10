const checkNumber = function (numberToCheck) {
    if (numberToCheck > 100) {
        return true;
    } else {
        return false;
    };
}

// console.log(checkNumber(20));

// Brenda produces a response
const bounce = function ( maxPresent, currentPresent, age) {
    if (age < 18) {
        return "this is a club for adults";
    };

    if (currentPresent === maxPresent) {
        return "it's too busy now, come back later";
    }

    if ( age >= 18 && currentPresent < maxPresent ) {
        return "come in";
    };

    return "wait a second";
};

console.log(bounce(200, 200, 20));

// calculate the average of five numbers
// produces an average
const calcAverage = function( n1, n2, n3, n4, n5) {
    return (n1 + n2 + n3 + n4 + n5)/5;
};

// console.log(calcAverage(1,2,3,4,5));



