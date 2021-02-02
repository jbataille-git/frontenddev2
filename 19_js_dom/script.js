// deel 1
// dit geeft een html-collection terug, dus geen array
// const bigFiveLi = document.getElementsByTagName("ul")[0].getElementsByTagName("li");
// const bigFiveLi = document.getElementsByClassName("big-five-button");

// en als ik dit doe
// dit zijn al de buttons in een array
const bigFiveLi = document.querySelectorAll(".big-five-button");

const spottedAnimals = document.querySelector("#spotted-animals-list");
// kan ook met 
// const spottedAnimals = document.getElementById("spotted-animal-list");
// console.log(spottedAnimals);


const addItem = function (e) {
    let newSpottedAnimal = document.createElement("li");
    newSpottedAnimal.innerHTML = e.target.innerHTML;
    spottedAnimals.appendChild(newSpottedAnimal);
}

bigFiveLi.forEach(b => b.addEventListener("click", addItem));

// ----------------------------------------------------------------------------
// deel 2

const removeFirstItem = function(e) {
    let firstItem = spottedAnimals.getElementsByTagName("li")[0];
    // de parent hebben we boven al gevonden
    spottedAnimals.removeChild(firstItem);
    // of
    // firstItem.remove();
}

document.getElementById("remove-first-item-button").addEventListener("click", removeFirstItem);

// ----------------------------------------------------------------------------
// deel 3
// const removeAllItems = function() {
const removeAllItems = function(text) {
  // we weten al in welke ul we moeten zijn
  // dit is de grove manier
  //spottedAnimals.innerHTML = "";
  console.log(text);
  // en de nette manier
  // currentSpottedAnimals = document.querySelectorAll("#spotted-animals-list li");
  // console.log('type: ', typeof(currentSpottedAnimals)); //object
  // console.log(currentSpottedAnimals);  // node-list
  // deze doet het
  // currentSpottedAnimals.forEach( function (li) {
  //     li.remove();
  // });

  const parent = document.getElementById("spotted-animals-list");
  const children = parent.getElementsByTagName("li");
  // omdat de lengte tijdens de rit verandert, moeten we die even vastzetten
  // deze werkt
  //   let lengte = children.length;
  //   for ( i = 0; i < lengte; i++) {
  //       // iedere keer de bovenste weghalen
  //       parent.removeChild(children[0]);
  //   };

  //   Array.from(children).forEach( function(item) {
  //       item.remove();
  //   })

  // Array.from(children).forEach ( function(item) {
  //     parent.removeChild(item);
  // })

  //Array.from(children).forEach ( e => parent.removeChild(e));
  Array.from(children).forEach ( e => e.remove());

  // tijdens de lus verandert de lengte dus die moet je vantevoren even ophalen
  // maar dan werkt 'ie nog niet want bij lengte 3, laaste ronde j = 2 dan bestaat [2] niet meer
  // omdat de lijst steeds korter geworden is
  // DEZE WERKT NIET
  //   let lengte = children.length;
  //   for ( j = 0; j < lengte; j++) {
  //       parent.removeChild(children[j]);
  //   }
}

//document.getElementById("remove-all-button").addEventListener("click", removeAllItems);
document.getElementById("remove-all-button").addEventListener("click", removeAllItems("test"));
