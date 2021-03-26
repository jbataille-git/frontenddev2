const someObj = { numbers: [1, 2, 3] };

console.log( someObj.numbers[0]);
console.log( someObj.numbers[1]);
console.log( someObj.numbers[2]);
console.log("--");

// someObj.numbers.forEach( number => {
//   console.log("forEach: " + number);
// })

// console.log("lengte: " + someObj.numbers.length);


// for (i = 0; i < someObj.numbers.length; i++) {
//   console.log("nummer " + i + ": " + someObj.numbers[i]);
// }


const corn = {
  name: "corn",
  cost: 1,
  yield: 3,
  salePrice: 1,
  factors: {
    sun: {
      low: -50,
      medium: 0,
      high: 50,
    },
    locusts: {
      none: 0,
      some: -25,
      many: -50,
    },
  },
};

const pumpkin = {
  name: "pumpkin",
  cost: 2,
  yield: 4,
  salePrice: 2,
  factors: {
    sun: {
      low: -25,
      medium: 0,
      high: 25,
    },
    locusts: {
      none: 0,
      some: -10,
      many: -20,
    },
  },
};

let environmentFactors = {
  sun: "medium",
  locusts: "none",
};

const bad = {
  sun: "low",
  locusts: "many"
}

const input = {
  crop: corn,
  numCrops: 10,
};

const crops = [
  { crop: corn, numCrops: 5, factors: bad },
  { crop: pumpkin, numCrops: 2, environmentFactors },
];

const crops2 = [{ crop: corn, numCrops: 0 }];


crops.forEach((plant) => {
  console.log(plant);
});





