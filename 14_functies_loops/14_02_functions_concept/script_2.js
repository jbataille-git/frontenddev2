// uitleg van Niels op Vimeo
// https://vimeo.com/500435284/5420e860d0

// classical way, function declaration
// geen ;
function sayHello1() {
    console.log("Hello 1");
}

sayHello1();

// function expression
// hier wel een ;
const sayHello2 = function() {
    console.log("Hello 2");
};

sayHello2();

// Arrow function (also a function expression)
const sayHello3 = () => {
    console.log("Hello 3");
};

sayHello3();

