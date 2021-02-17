// const organizeDOMElements = () => {
//   const newDiv = document.createElement("div");
//   newDiv.id = "showdiv";

//   const newH3 = document.createElement("h3");
//   newH3.id = "titelH3";
//   newH3.innerHTML = h3innerHTML; // hoe kan ik, van buiten deze functie, h3innerHTML een steeds nieuwe waarde meegeven?

//   const element = document.getElementById("showlist");

//   element.appendChild(newH3);
//   element.appendChild(newDiv);
// };

let str1 = "1/12";
let str2 = "10/12";
let str3 = "/123"
let str4 = "////"

// console.log("str1: " + str1.slice(0, str1.indexOf("/")));
// console.log("str2: " + str2.slice(0, str2.indexOf("/")));

// console.log("indx of / in 1/12: " + str1.indexOf("/"));
// console.log("indx of / in 10/12: " + str2.indexOf("/"));
// console.log("indx of / in /123: " + str3.indexOf("/"));
// console.log("indx of / in ////: " + str4.indexOf("/"));

// let now = new Date;
// console.log("maand: " + (now.getMonth() - 1));

let now = new Date;
let currentMonthNumber = now.getMonth();                              // januari is 0, februari 1 etc.


// om alles te verwijderen on een parent
  // const parent = document.getElementById("spotted-animals-list");
// const children = parent.getElementsByTagName("li");
// Array.from(children).forEach((e) => e.remove());

//  .getElementsByTagName("img");
//  Array.from(currentMovieList).forEach(function (li) {li.remove();

// let ulGenres = document.getElementById("ul-genres");

// genresArray.forEach((genre) => {
//   let newGenreLi = document.createElement("li");
//   newGenreLi.innerHTML =
//     "genre naam: " + genre.name + ", id: " + parseInt(genre.id);
//   ulGenres.append(newGenreLi);
// });

// // console.log(liArray);
// liArray.forEach((liItem) => {
//   let newLi = document.createElement("li");
//   newLi.innerHTML = liItem;
//   commonUl.append(newLi);
// })  


