const tellFortune = function (numberOfChildren, partnersName, location, job) {
  console.log(
    "You will be a ".concat(
      job,
      " in ",
      location,
      ", married to ",
      partnersName,
      " with ",
      numberOfChildren,
      " kids."
    )
  );
};

tellFortune(2, "Truus", "Hank-Dussen", "software-developer");
tellFortune(0, "Jane", "San Fernando", "karaoke-singer");
tellFortune(5, "Maria", "Nunspeet", "nertsenfokker");

// Winc oplossing:
const tellFortune2 = function(jobTitle, geoLocation, partner, numKids) {
    let future =
      "You will be a " +
      jobTitle +
      " in " +
      geoLocation +
      " and married to " +
      partner +
      " " +
      " with " +
      numKids +
      " kids.";
    console.log(future);
  };

  tellFortune2("Elvis impersonator", "Russia", "The Oatmeal", 0);
