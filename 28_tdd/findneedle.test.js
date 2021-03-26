// runnen vanuit deze map:
// ..\27_test\node_modules\.bin\jest needle

const findNeedle = require("./findneedle.js");

test("Find the needle", function () {
  const words = ["house", "train", "slide", "needle", "book"];
  const expected = 3;

  const output = findNeedle(words, "needle");
  expect(output).toEqual(expected);
});
