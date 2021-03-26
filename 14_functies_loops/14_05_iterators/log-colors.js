let colors = [ "yellow", "blue", "red", "orange"];

let length = colors.length;

let i = 0;

while ( i <= (length - 1)) {

    console.log("Color at index "  + i + " is " + colors[i]);
    i++;

}

console.log("Done enumerating colors in array in a while loop.")

// 

for ( j = 0; j < length; j++) {

    console.log("Color at index " + j + " is " + colors[j]);
}

console.log("Done enumerating colors in array in a for loop.");

//
colors.forEach(e => console.log("element: " + e));
console.log("Done enumerating colors in array with the forEach method.");

// while loop: 6 regels
// for loop: 3 regels
// forEach: 1 regel
// minder schrijf-, lees- en denkwerk
// Ik houd wel van uitgeschreven code, dan zie je wat er gebeurt
//  en je hebt toegang tot de iterator
// array method is compacter en eenvoudiger
//

// uit de oplossing:

// nieuwe manier met forEach
myColorArray.forEach((color) => console.log(color)); // is een array

// 1. Mijn for loop is 3 regels, mijn while loop is 5 regels
// 2. ForEach method is (met een arrow function), 1 regel.
// 3. Een array method heeft een aantal voordelen:
// --> je kunt niet meer verstrikt raken in een infinite loop.
// --> je hoeft niet meer bij te houden met een i, bij welke iteratie je bent.
// --> je hebt direct toegang tot het item waar je overheen loopt dmv het argument 
//     en de callback-functie die je de array-method geeft als argument.
// --> de naam "forEach" zegt ook meteen wat je gaat doen en is semantischer dan een while of for loop.

const myColors = {
  colorWall: "blue",
  colorFruit: "orange",
  colorCar: "red",
  colorHair: "white",
  colorGras: "green",
};

for (x in myColors) {                // gaat over een object
  console.log(myColors[x]);
}

// Ja, je bent nu aan het itereren. Echter ben je aan het itereren over een OBJECT.
// Array Methods zijn NIET beschikbaar op een object.
