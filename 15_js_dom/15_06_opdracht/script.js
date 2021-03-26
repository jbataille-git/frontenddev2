/// Opdracht 1
const button = document.querySelector('#mybutton');

// dit kan ook, let op anders syntax zonder #
// let button = document.getElementById('mybutton');
button.addEventListener('click', function(e){
    alert("Button clicked");
})

// Opdracht 2 versie 1
// waar declareer ik bodyB, kan dat ook voor de evenListener?
// hangt ervanaf of ik 'm verder nog nodig heb misschien?
/*
const button2 = document.querySelector('#mybutton2');

button2.addEventListener('click', function(e) {
  
    const bodyB = e.target.parentElement;
    bodyB.classList.add('red-background');

});
*/
/*
// Opdracht 2 versie 2 compacter geschreven
// const button2 = document.querySelector('#mybutton2');
// *
const button2 = document.getElementById('mybutton2');

button2.addEventListener('click', function(e) {
  
    e.target.parentElement.classList.add('red-background');

});
*/

/*
// Opdracht 2 versie 3
const button2 = document.querySelector('#mybutton2');
const bodyB   = button2.parentElement;

function makeBackgroundRed() {
    bodyB.classList.add('red-background');
}

button2.addEventListener('click', makeBackgroundRed);
*/

/*
// Opdracht 2 versie 4 met een function expression
// *
const button2 = document.querySelector('#mybutton2');

function makeBackgroundRed() {
    button2.parentElement.classList.add('red-background');
}
button2.addEventListener("click", makeBackgroundRed);
*/

/*
// Opdracht 2 versie 5 met een function expression
const button2 = document.querySelector('#mybutton2');
const bodyB   = button2.parentElement;

const makeBackgroundRed = function () {
    bodyB.classList.add('red-background');
};

button2.addEventListener("click", makeBackgroundRed);
*/

// Opdracht 3 toggle
const button2 = document.querySelector('#mybutton2');
const bodyB   = button2.parentElement;

const toggleBackgroundRed = function () {
    bodyB.classList.toggle('red-background');
};

button2.addEventListener("click", toggleBackgroundRed);



