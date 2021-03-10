let defaultPlayerName = "vul hier je naam in";
let playerName = prompt("Welkom! Wat is je naam?", defaultPlayerName);

// controleren of er wel iets ingevuld is? Nu nog even niet

let loLimit = prompt("Hallo " + playerName + "! We gaan beginnen. Je hebt vijf kansen om het nummer te raden. Geef eerst het laagste nummer:");
let hiLimit = prompt("En geef nu het hoogste nummer:")

// aan de slag. Welk nummer moet de gebruiker raden?
// de random moet wel een resultaat boven de loLimit opleveren dus zonodig een paar keer proberen
let secretNumber = loLimit - 1;
while (secretNumber < loLimit) {
    secretNumber = Math.round(Math.random() * hiLimit);
    document.write("secretNumber = " + secretNumber);
};

// alert("Het geheime nummer: " + secretNumber);

let secretNumberFound = false;

for ( attemptsLeft = 5; !secretNumberFound && attemptsLeft > 0; attemptsLeft-- ) {

  let userInput = parseInt( prompt ("Voer een nummer in tussen "
                                    + loLimit
                                    + " en "
                                    + hiLimit
                                    + "."
                                    )
                          );
  
  // hoe controleer ik of het wel echt een nummer is? Met parseInt kan ik het in elk geval omzeilen
  // wat als het nummer buiten het opgegeven bereik ligt? 
  /*
  if ( isNaN(userInput)) {
        alert("Dit is geen nummer. Deze invoer geldt niet als een poging.");
  }
  */
   
  // kan ik dit ook schrijven? Ja, dat kan.
  secretNumberFound = ( userInput === secretNumber );
  if (secretNumberFound) {

    alert( "Gefeliciteerd, ! Je hebt het nummer geraden. Het spel is nu klaar.")
  
  } else {

    if (attemptsLeft > 1){
        alert("Helaas, dat was niet het geheime nummer. Je hebt nog " + (attemptsLeft - 1) + " kansen.")
      } else {
          alert("Je hebt geen kansen meer en je hebt helaas het nummer niet geraden. Het spel is nu klaar.")
      }
    }
}

// afsluiten
alert("Dag " + playerName + ". Tot de volgende keer.");