// test('first', () => {
//   expect(true).toBe(true);
// })

// // require kan ook met een object
// // ik had
// const verifyPasswordFunctions = require("./verifyPassword.js");
// // en dan moet je steeds zeggen
// verifyPasswordFunctions.hasRightLength

// // maar je kunt ook zo requiren:
// const {verifyPassword, hasRightLength, isNotNull } = require("./verifyPassword.js");

const corn = {
  name: "corn",
  yield: 3,
};
const pumpkin = {
  name: "pumpkin",
  yield: 4,
};
const crops = [
  { crop: corn, numCrops: 5 },
  { crop: pumpkin, numCrops: 2 },
];


const getTotalYield = (crops) => {
  // Array.from(crops).reduce((totaal, item) => {
  //   return totaal + item
  // }, 0)
  crops.forEach(item => console.log(item.crop.name));

};

getTotalYield(crops);
