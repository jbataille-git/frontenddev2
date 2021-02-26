const addOne = function (numbers) {
  
  let newArray = numbers.map( number => number += 1);

  // let newNumbers = [];
  // numbers.forEach( number => newNumbers = newNumbers.concat(number + 1));
  // console.log('newNumbers: ' + newNumbers);

  return newArray;

};

module.exports = addOne;

// addOne([31, 57, 12, 5]);