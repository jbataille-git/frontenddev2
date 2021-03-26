// lesson 37 with Shaun
// adding elements to the dom
// step 1 create the element
// put it in the right place

var newLi = document.createElement("li");
var newA  = document.createElement("a");

// dan de plek ophalen waar de newLi moet komen
// dit levert de eerste ul op binnen de main-nav
var menu = document.getElementById("main-nav").getElementsByTagName("ul")[0];

// op de console in de browser kun je gewoon zeggen: menu

// volgende stap
menu.appendChild(newLi);

newLi.appendChild(newA);

newA.innerHTML = "Blog";

// vooraan in de lijst met li's een nieuwe toevoegen gaat met een andere method
menu.insertBefore(newLi, menu.getElementsByTagName("li")[0]);

// ----------------------------------------------------------------------------
// Bijvoorbeeld:
const listElement = document.createElement("li")

//Bijvoorbeeld:
listItem.classList.add("list-item-class");

//Bijvoorbeeld (als je maar 1 ul hebt):
const list = document.querySelector("ul");

//Bijvoorbeeld:
list.appendChild(listItem);



