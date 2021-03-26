// const isShorterThan9 = (password) => password.length;
// const isShorterThan9 = (password) => {
//     return password !== null && password.length < 9;
// };

// const isNotNull = (password) => password !== null;
// exports.isShorterThan9 = isShorterThan9;
// exports.isNotNull      = isNotNull;

const isNotNull = (str) => str !== null;

const hasRightLength = (str) => (str !== null && str.length < 9);

const hasUpperCaseCharacter = (str) => ( str !== null && str !== str.toLowerCase());

const hasLowerCaseCharacter = (str) => ( str !== null && str !== str.toUpperCase());

const hasDigit = (str) => {
  const regex = new RegExp(/\d/);
  return regex.test(str);
};

// const hasDigit = (str) => /\d/.test(str);

const minimumConditionsReached = (conditions) => {
  // conditions is an array of booleans
  trueConditions = conditions.filter((bool) => bool);
  return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = (password) => {
  const conditions = [
    isNotNull(password),
    hasRightLength(password),
    hasUpperCaseCharacter(password),
    hasLowerCaseCharacter(password),
    hasDigit(password),
  ];
  const result =
    minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);
  return result;
};

module.exports = {
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
};

