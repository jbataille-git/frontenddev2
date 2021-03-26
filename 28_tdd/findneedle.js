const findNeedle = function (words, searchWord)  {
  
  const index = words.indexOf(searchWord, 0);
  // console.log('index: ' + index);
  return index;

};

module.exports = findNeedle;

// findNeedle(["house", "train", "slide", "needle", "book"]);