let defaultPlayerName = "vul hier je naam in";
let playerName = prompt("Welkom! Wat is je naam?", defaultPlayerName);

// controleren of er wel iets ingevuld is? Nu nog even niet
alert("Hallo " + playerName + "! We gaan beginnen. Je hebt vijf kansen om het nummer te raden.");

let lowLimit = 0;
let hiLimit = 25;

// aan de slag. Welk nummer moet de gebruiker raden?
let secretNumber = Math.round(Math.random() * hiLimit);
// alert("Het geheime nummer: " + secretNumber);

let secretNumberFound = false;
let attemptsLeft = 5;

while ( !secretNumberFound && attemptsLeft > 0) {

  let userInput = parseInt( prompt ("Voer een nummer in tussen "
                                    + lowLimit
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
 
 attemptsLeft--;
  
  // kan ik ook schrijven
  secretNumberFound = ( userInput === secretNumber );
  if (secretNumberFound) {

    alert( "Gefeliciteerd, ! Je hebt het nummer geraden. Het spel is nu klaar.")
  
  } else {

    if (attemptsLeft > 0){
        alert("Helaas, dat was niet het geheime nummer. Je hebt nog " + attemptsLeft + " kansen.")
      } else {
          alert("Je hebt geen kansen meer en je hebt helaas het nummer niet geraden. Het spel is nu klaar.")
      }
    }
}

// afsluiten
alert("Dag " + playerName + ". Tot de volgende keer.");