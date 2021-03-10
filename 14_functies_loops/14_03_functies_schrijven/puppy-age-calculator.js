const calculateDogAge = function( age ) {
    return 7 * age;
}

console.log( "1. Your doggie is " + calculateDogAge(5) + " years old in dog years!");

const calculateDogAge2 = function( age, conversionFactor ) {
    return conversionFactor * age;
}

console.log( "2. Your doggie is " + calculateDogAge2(5, 8) + " years old in dog years!");

// Winc oplossing
const calculateDogAge3 = function(age) {
    let dogYears = 7 * age;
    console.log("3. Your doggie is " + dogYears + " years old in dog-years.")
}

calculateDogAge3(5);
