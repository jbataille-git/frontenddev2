const getWordLengths = function (someWords) {
  
  let lengths = someWords.map( someWord => someWord.length);
  console.log(lengths);

  return lengths;

};

module.exports = getWordLengths;

// getWordLengths(["sun", "potato", "roundabout", "pizza"]);