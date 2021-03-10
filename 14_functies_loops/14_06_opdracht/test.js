/*
for ( i = 0; i <= 10; i++) {
    console.log( i + ": " +  Math.round(Math.random() * 10));
}
*/

let loLimit = 50;
let hiLimit = 100;
let secretNumber = loLimit - 1;
let randomNumber;

while (secretNumber < loLimit) {
    randomNumber = Math.random();
    secretNumber = Math.round( randomNumber * hiLimit);
    console.log("randomNumber: " + randomNumber + " secretNumber = " + secretNumber);
};

console.log("klaar secretNumber = " + secretNumber);