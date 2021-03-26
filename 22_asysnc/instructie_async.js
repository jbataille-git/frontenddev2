// Javascript is single threaded language
// hoewel er service workers bestaan
// In principe is er één proces dat de JS uitvoert
// dus de code wordt van boven naar beneden uitgevoerd.

// Er is wel hoisting
// en in de eerste ronde worden declaraties uitgevoerd,
// in de tweede ronde worden de waarden aan de gedeclareerde variabelen toegekend
// in de derde ronde wordt er uitgevoerd

let log = console.log;

// dit is een geldige declaratie
let a1 = function () {
  return 5;
};
// console.log("eerste a1: " + a1());
let b1 = function () {
  return 50;
};

let a11 = function () {
  return 5;
};
let b11 = function () {
  return 50;
};

// werkt alleen als ik de functie aanroep met ()
console.log(a11());
console.log(b11());

// ik kan het ook meteen bij declaratie laten uitvoeren:
// immediately invoked function expression
let a12 = (function () {
  return 5;
})();
// dan heb ik de waarde van a1 beschikbaar in de volgende declaraite van b1
let b12 = (function () {
  return 50;
})();

// dan hoef ik hier geen aanroep meer te doen en kan ik de parens weghalen
console.log("a12: " + a12);
console.log("b12: " + b12);

let a2 = function (num) {
  return 5 * num;
};
let b2 = function () {
  return 50;
};

console.log("a2 en b2 " + a2(b2()));

// asynchroon: ik ga vast ff verder terwijl ik wacht op resultaat van andere functies
let a3 = 100;
setTimeout(function () {
  a3++;
}, 0);
console.log("a3 na timeout: " + a3); // levert 100 op omdat timeout pas later wordt uitgevierd

// als ik de consloe log later nog eens uitvoer zien we wel verschil:
let a4 = 100;
setTimeout(function () {
  a4++;
  console.log("en nu a4 na timeout: " + a4);
}, 0);
console.log("a4 na timeout: " + a4);

// een variatie
let a5 = 100;
setTimeout(function () {
  a5++;
}, 0);
console.log("a5: " + a5);
setTimeout(function () {
  console.log("tweede a5: " + a5);
}, 0);
// hij doet eerste alle synchrone dingen
// daarna alle asynychrone, in de volgorde waarin ze in het script staan
// als daar alle timeout values op 0 staan, tenminsten

// promises
let p = new Promise(function (resolve, reject) {
  resolve("Yo!");
});
log(p);

let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Yo timeout!");
  }, 2000);
});
log(p2);

setTimeout(function(){
    log(p2);
}, 1000);

// als je dit soort dingen doet:
// setTimeout, callbacks for geolocation, Promises, fetch, ajax, filesystem interaction, database calls, even DOM // event listeners
// dat zijn allemaal asynchrone dingen die later gebeuren, Javascript zet ze even opzij

// op antwoord wachten met then
// then loopt als de promise resolved is
p2.then(function(val){
    log("val " + val);
})




