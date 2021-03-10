console.log( document.querySelector('#first-section p'));


// deel 1
var newP = document.querySelector('#first-section p');
newP.innerHTML = 'Ik ben een nieuwe paragraaf';

// kan ook in één zin
var newP = document.querySelector('#first-section p').innerHTML = 'Hallo ik ben een nieuwe paragraaf';
// of zonder var
document.querySelector('#first-section p').innerHTML = 'Hallo ik ben een nieuwe paragraaf';


// deel 2
var newP = document.querySelector('#first-section p');



//
let newP = document.querySelector('#first-section p');
// op de console: newP.innerHTML '"Ik ben een paragraaf"'
// bij console.log zijn de dubbele quotes weg
console.log( newP.innerHTML); 'Ik ben een paragraaf'

// deel 3
const paragraphs = document.getElementsByClassName('paragraph');

// en dan kun je dit doen op de console
Array.from(paragraphs).forEach (function(tekst) {console.log(tekst);})