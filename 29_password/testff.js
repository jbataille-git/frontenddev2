// const passwordsToTest = [
//   "henkie1",
//   "1234",
//   "z",
//   "henkie1234",
//   "HENKhenk",
//   "HENK33$",
//   "1234",
//   ""
//   // null,
// ];

// passwordsToTest.forEach(password => console.log(`${password} ${password.toLowerCase()}`));


// function geek() {
//   var str = "henkie0";
//   var regex = new RegExp(/\d/);
//   var rex = regex.test(str);

//   console.log(rex);

// } 

// geek();
const verifyPasswordFunctions = require("./verifyPassword.js");
const passwordsToTest = [ "henkie1", "1234", "z", "henkie1234", "HENKhenk", "HENK33$", "1234", "", null];

passwordsToTest.forEach((password) =>
  console.log(
    password + " " + verifyPasswordFunctions.verifyPassword(password)
  )
);