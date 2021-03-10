// de query selector
// easiest way
// wrapper is een id
const wrap = document.querySelector('#wrapper');
console.log(wrap);

// het wordt al wat ingewikkelder
const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);

// any valid css-selector!

// als we er meer willen, een collection
var books = document.querySelector('#book-list li .name');
console.log(books);
// die gaat alleen de eerste returnen volgens Shaun

// als we ze allemaal willen, moeten we een andere method inzetten
// en dan krijgen we ALTIJD een soort collection terug, bijvoorbeeld een array
books = document.querySelectorAll('#book-list li .name');
console.log(books);

// en hoe lopen we door zo'n collection
Array.from(books).forEach( function(book) {
  console.log(book);
  }
)
