// fetch functionality in node
const fetch = require("node-fetch");

const logDivider = () => {
  const currentdate = new Date();
  console.log(
    `🚀 ${
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds()
    } ${"*".repeat(process.stdout.columns / 2)}`
  );
};
logDivider();

const api = "https://jsonplaceholder123.typicode.com";
// Example : https://jsonplaceholder.typicode.com/photos/1

// Example A:
// Callbacks with .then
const fetchOnePhoto = () => {
  // Template literals
  const url = `${api}/photos/1`;
  console.log(`Fetching: ${url}`);

  // Make anonymous callback functions
  // for completion and rejection
  fetch(url).then(
    function (response) {
      const json = response.json();

      console.log("### Result:");
      // A
      console.log(`A Response: ${response}`);
      // B
      console.log(`B Json: ${json}`);
      // C
      json.then(function (data) {
        console.log("C json.then:");
        console.log(data);
      });
    },
    function (error) {
      console.log(`Error: ${error}`);
    }
  );
};
fetchOnePhoto();

/* 







Do not go past here... 









*/

/* You have been warned... */

//
// Example B
// Using async
//
// Assignment: add exactly 1 (one) word to fix the
// print order to A B C.

const resolveAfter2Seconds = (x) => {
  console.log("A resolveAfter2Seconds called");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
      console.log("B Resolved after 2 seconds");
    }, 2000);
  });
};

const printAsynchronously = async () => {
  const result = resolveAfter2Seconds(10);
  console.log(`C createResolver is done: ${result}`);
};
// printAsynchronously();

// In .bashrc:
// nodewatch() {
// 	l "$1" | entr node "$1"
// }
//
// Then:
// > nodewatch lesson.js
