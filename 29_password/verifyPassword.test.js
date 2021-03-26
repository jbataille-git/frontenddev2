const verifyPasswordFunctions = require("./verifyPassword.js");
const passwordsToTest = [ "henkie1", "1234", "z", "henkie1234", "HENKhenk", "HENK33$", "1234", "", null];

// ----------------------------------------------------------------------------
test("Has right length", function () {
  const expected = [true, true, true, false, true, true, true, true, false];
  let output = [];
  passwordsToTest.forEach((password) => {
    output = output.concat(verifyPasswordFunctions.hasRightLength(password));
  });
  // console.log(output);
  expect(output).toEqual(expected);
});

// ----------------------------------------------------------------------------
test("Should not be null", function () {

  const expected = [true, true, true, true, true, true, true, true, false];
  let output = [];
  passwordsToTest.forEach((password) => {
    output = output.concat(verifyPasswordFunctions.isNotNull(password));
  });

  expect(output).toEqual(expected);

})

// ----------------------------------------------------------------------------
test("Has uppercase character", function () {

  const expected = [false, false, false, false, true, true, false, false, false];
  let output = [];
  passwordsToTest.forEach((password) => {
    output = output.concat(verifyPasswordFunctions.hasUpperCaseCharacter(password));
  });

  expect(output).toEqual(expected);

})

// ----------------------------------------------------------------------------
test("Has lowercase character", function () {

  const expected = [true, false, true, true, true, false, false, false, false];
  let output = [];
  passwordsToTest.forEach((password) => {
    output = output.concat(verifyPasswordFunctions.hasLowerCaseCharacter(password));
  });

  expect(output).toEqual(expected);

})

// ----------------------------------------------------------------------------
test("Has digit", function () {

  const expected = [true, true, false, true, false, true, true, false, false ];
  let output = [];
  passwordsToTest.forEach((password) => {
    output = output.concat(verifyPasswordFunctions.hasDigit(password));
  });

  expect(output).toEqual(expected);

})

// ----------------------------------------------------------------------------
const passwordVerifier = () => {
  passwordsToTest.forEach((password) =>
    console.log(password + " " + verifyPasswordFunctions.verifyPassword(password))
  );
};

// passwordVerifier();

// ----------------------------------------------------------------------------
test("Verify password", function () {
  const expected = [true, false, true, true, true, false, false, false, false];
  let output = [];
  passwordsToTest.forEach((password) => {
    output = output.concat(verifyPasswordFunctions.verifyPassword(password));
  });

  expect(output).toEqual(expected);
});
