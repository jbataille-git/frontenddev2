// declaration
function calculate ( number1, number2) {
    let result =  (number1 ** 2) + (number2 ** 2);
    result = result ** 2;
    return result;
}

// expression
console.log("declaration: " + calculate(3,4));

const calculate2 = function (number1, number2) {
    return ( (number1 ** 2) + (number2 ** 2) ** 2 );
};

console.log("expresion: " + calculate2(3, 4));

// arrow notation
const calculate3 = (number1, number2) => ((number1 ** 2) + (number2 ** 2) ** 2);

console.log("arrow: " + calculate3(3, 4));