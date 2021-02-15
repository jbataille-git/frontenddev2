const organizeDOMElements = () => {
  const newDiv = document.createElement("div");
  newDiv.id = "showdiv";

  const newH3 = document.createElement("h3");
  newH3.id = "titelH3";
  newH3.innerHTML = h3innerHTML; // hoe kan ik, van buiten deze functie, h3innerHTML een steeds nieuwe waarde meegeven?

  const element = document.getElementById("showlist");

  element.appendChild(newH3);
  element.appendChild(newDiv);
};
