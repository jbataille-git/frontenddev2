const age = 19;

if (age > 18) {

    console.log("Deze persoon is ouder dan 18 en mag naar binnen.");

} else {

    console.log("Deze persoon is te jong en kan helaast niet toegelaten worden.")
}

// deel twee van de opdracht; kan ik ook halverwege constanten declareren? Ja maar dat lijkt me geen goede gewoonte
const isFemale = true;

if (isFemale) {

    console.log("Op een ladiesnight mag deze persoon naar binnen");
 
} else {

    console.log("Op een ladiesnight mag deze persoon niet naar binnen");

}

// deel drie van de opdracht
const driverstatus = 'beschonken';

if (driverstatus =='bob') {

    console.log("Deze klant mag zelf de auto naar huis rijden");

} else {

    console.log("Voor deze klant bel ik een taxi");

}

console.log( 'Het type van driverstatus is', typeof driverstatus);
