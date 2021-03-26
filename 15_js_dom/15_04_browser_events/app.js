// add event listeners

// eerst zorgen dat we erbij kunnen
// dit is code voor op de prompt

/*
var h2 = document.querySelector('#book-list h2');

h2.addEventListener('click', function(e) {
    console.log(e.target);
    console.log(e);
    console.log('de shiftkey is', e.shiftKey);
})
 */

var btns = document.querySelectorAll('#book-list .delete');
// levert een node-list op

// kan dat ook met 
// var btns = document.getElementsByClassName('delete');
// levert een html collection op

Array.from(btns).forEach( function(knop) {

    knop.addEventListener('click', function(e) {
      
        const liToRemove = e.target.parentElement;   // li die parent is van de knop
        liToRemove.parentNode.removeChild(liToRemove);       // li parentNode is de ul

    });

});

const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
    e.preventDefault();
    console.log('navigation to ', e.target.textContent, ' was prevented');
})