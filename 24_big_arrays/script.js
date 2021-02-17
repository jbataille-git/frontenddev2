// we doen alles vandaag met één ul
const commonUl = document.getElementById("common-ul");

// ----------------------------------------------------------------------------
const fetchRegions = function () {
    return randomPersonData.map( person => {
      return person.region;
    });
}

// ----------------------------------------------------------------------------
const fetchCapricorns = function () {
  const women = randomPersonData.filter((person) => {
    return person.gender === "female";
  });

  const women30 = women.filter((woman) => {
    return parseInt(woman.age) > 30;
  });

  const capricorns = women30.filter((woman) => {
    return (
      (parseInt(woman.birthday.dmy.substr(0, 2)) > 21 &&
        woman.birthday.dmy.substr(3, 2) === "12") ||
      (parseInt(woman.birthday.dmy.substr(0, 2)) < 20 &&
        woman.birthday.dmy.substr(3, 2) === "01")
    );
  });

  return capricorns.sort(function (a, b) {
     let nameA = a.name.toUpperCase(); // ignore upper and lowercase
     let nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });

};
// ----------------------------------------------------------------------------
const fetchCreditcards = function () {
  let now = new Date;
  let currentMonthNumber = now.getMonth() + 1;                          // januari is 0, februari 1 etc.

  let filteredPersons = randomPersonData
  .filter(person => parseInt(person.age) >= 18)                         // volwassen
  .filter(person => person.credit_card.expiration.slice(-2) === "21")   // moet dit jaar verlopen
  // in expiration date de maand opzoeken
  .filter(person => person.credit_card.expiration.slice(0, person.credit_card.expiration.indexOf("/")) >= currentMonthNumber);           // maand moet gelijk of groter zijn aan huidige; datum van maken?

  // dan moeten we nog sorteren op de maand van expiratie en dat returnen
  // en dat is nog een hoop gedoe
  return filteredPersons.sort(function (a, b) {
    let monthA = parseInt(a.credit_card.expiration.slice(0, a.credit_card.expiration.indexOf("/")));
    let monthB = parseInt(b.credit_card.expiration.slice(0, b.credit_card.expiration.indexOf("/")));
    if (monthA < monthB) {
      return -1;
    }
    if (monthA > monthB) {
      return 1;
    }
    // names must be equal
    return 0;
  })
}

// ----------------------------------------------------------------------------
const clearList = function() {
  const listOfLis   = commonUl.getElementsByTagName("li");
  Array.from(listOfLis).forEach((li) => li.remove());
}

// ----------------------------------------------------------------------------
const putRegionsOnScreen = function(liArray) {
  // als ik er een set van maak, heb ik geen dubbel voorkomende waarden meer
  const liSet = new Set();
  liArray.forEach((liItem) => {
    liSet.add(liItem);
  })

  liSet.forEach((liItem) => {
    let newLi = document.createElement("li");
    newLi.innerHTML = liItem;
    commonUl.append(newLi);
  })
}

// ----------------------------------------------------------------------------
const putCapricornsOnScreen = function(capricornsArray) {
  capricornsArray.forEach((capricorn) => {
    let newLi = document.createElement("li");
    newLi.innerHTML = "<img src="
                    + capricorn.photo
                    + " />"
                    + capricorn.name + ' ' 
                    + capricorn.surname
                    ;
    commonUl.append(newLi);
  })
};

// ----------------------------------------------------------------------------
const putCreditcardsOnScreen = function( creditcardsArray) {
  creditcardsArray.forEach((person) => {
    let newLi = document.createElement("li");
    newLi.innerHTML = person.name + " "
                    + person.surname + ", "
                    + "phone: " + person.phone + ", "
                    + "cardnumber: " + person.credit_card.number + " "
                    + "expiration: " + person.credit_card.expiration
                    ;
    commonUl.append(newLi);
  })  
};

// ----------------------------------------------------------------------------
const processEvent = function(e) {
  clearList();

  if (e.target.innerHTML === "Landenlijst") {
    const regionsList = fetchRegions();
    putRegionsOnScreen(regionsList);
  }

  if (e.target.innerHTML === "Steenbokvrouwen") {
    putCapricornsOnScreen(fetchCapricorns());
  }

  if (e.target.innerHTML === "Ouwe creditcards") {
    putCreditcardsOnScreen( fetchCreditcards());
  }

  // if (e.target.id === "button-meeste-mensen") {
  //   console.log("button 4"); 
  // }

}

// ----------------------------------------------------------------------------
const buttons = document.getElementsByTagName("button");
Array.from(buttons).forEach( button => addEventListener("click", processEvent));
