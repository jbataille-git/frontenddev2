let somevar;

// werkt prachtig maar is veel typewerk
if (somevar !== undefined && somevar !== null && somevar !== "") {
  console.log("Do something with the value");
}

// als ik dit schrijf:
if (somevar) {
  console.log("Do something with the value");
}
// zal js somevar naar een boolean converteren
// om te snappen hoe dat werkt, moeten we snappen hoe javascript die conversie doet
// als er een true uitkomt, heet dat een truthy value
//
// alles wat  falsy is, kan niet truthy worden
// en wat is falsy:
// false
// null
// undefined
// 0
// NaN
// empty string

// Gotcha:
somevar = 0;

if (somevar) {                                 // evaluates to false!!
  console.log("Do something with the value");
}

// what are truthy values
{}  // empty object
[]  // empty array
-5  // evaluates to true




