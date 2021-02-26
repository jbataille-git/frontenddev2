const findNeedle = function (words) {
  
  const index = words.indexOf("needle", 0);
  console.log('index: ' + index);
  return index;

};

module.exports = findNeedle;

// findNeedle(["house", "train", "slide", "needle", "book"]);