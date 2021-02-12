
// hier kwam ik nog wel uit
// const testNum = (numberToTest) => {
//   return new Promise((resolve, reject) => {
//       if (numberToTest > 10) {
//         resolve("Number is greater than 10");
//       } else {
//         reject("Number is less than 10");
//       }
//   }
//   )
// }

// testNum(11)
//   .then (result => console.log(result))
//   .catch(error => console.log(error))
//   ;

// 
// en dit was me teveel werk, om dat allemaal zelf te gaan verzinnen en uitzoeken

  const makeAllCaps = (words) => {
    return new Promise((resolve, reject) => {
      if (
        words.every((word) => {
          return typeof word === "string";
        })
      ) {
        resolve(
          sortWords(
            words.map((word) => {
              return word.toUpperCase();
            })
          )
        );
      } else {
        reject("Not a string!");
      }
    });
  };

  const sortWords = (words) => {
    return new Promise((resolve, reject) => {
      if (words) {
        resolve(words.sort());
      } else {
        reject("strings only!");
      }
    });
  };

  const theseAreWords = ["promise", "practice", "break"];

  makeAllCaps(theseAreWords)
    .then(sortWords(theseAreWords))
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

  const theseAreNotWords = [1, "hello", 9];

  makeAllCaps(theseAreNotWords)
    .then(sortWords(theseAreNotWords))
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
