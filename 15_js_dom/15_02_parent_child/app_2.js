// sibling to sibling
const bookList = document.querySelector('#book-list');

// next
console.log('book-list next sibling is: ', bookList.nextSibling);
// die brengt ons weer bij #text, de carriage-return newline
// dus:
console.log('book-list next element sibling is: ', bookList.nextElementSibling);

// en previous
console.log('book-list previous sibling is: ', bookList.previousSibling);
console.log('book-list previous element sibling is: ', bookList.previousElementSibling);

// nu iets ingewikkelder
// html aanpassen
bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else!';