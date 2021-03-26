var titles = document.getElementsByClassName('title');
// werkt niet omdat titles geen array is maar een htmlcollection
// daarom kunnen we de array forEach method niet gebruiken
/*
titles.forEach( function(item)) {
  console.log(item);
  }
*/

// we maken er een array van
// eerst ff checken
console.log( Array.isArray(titles));

// dan een array ervan maken
console.log( Array.isArray(Array.from(titles)));

// en dan gaat dit wel werken
Array.from(titles).forEach ( 
    function(item) {
      console.log(item);
    }
)
  

