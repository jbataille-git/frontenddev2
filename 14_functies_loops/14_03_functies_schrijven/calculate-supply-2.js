  // Winc oplossing; waarom soms const en dan ineens let?
  const calculateSupply = function(age, numPerDay) {
    const maxAge = 100;
    const totalNeeded = numPerDay * 365 * (maxAge - age);
    // const message = werkt ook
    let message =
      "You will need " +
      totalNeeded +
      " cups of tea to last you until the ripe old age of " +
      maxAge;
    console.log(message);
  };
  
  calculateSupply(28, 2.5);