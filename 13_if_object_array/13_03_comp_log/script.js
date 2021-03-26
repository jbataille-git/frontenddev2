const age = 26;

// deel 1

if ( age >= 18 && age <= 25 ) {

    console.log("Je krijgt 50 procent korting");

} else {

   console.log("Helaas voor jou geen korting");

}

// deel 2

const firstName ="Bram";

if (firstName === "Sarah"  || firstName === "Bram") {

    console.log("Je krijgt een gratis biertje,", firstName );

} else {
    console.log("Helaas voor jou geen gratis bier");
}


// deel 3

const totalAmount = 150.1;

if (totalAmount > 25 && totalAmount <=50 ) {

    console.log("Je krijgt bij deze bestelling een gratis portie bitterballen");

} else if (totalAmount  > 50 && totalAmount < 100 ) {

    console.log("Je krijgt gratis een portie nachos bij deze bestelling");

} else if (totalAmount >= 100) {

    console.log("Je krijgt een flesje champagne gratis");


}