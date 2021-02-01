const superheroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210",
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220",
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195",
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186",
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195",
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165",
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145",
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167",
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220",
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250",
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200",
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400",
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200",
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200",
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown",
  },
];

// Opdracht 1 namen van superhelden -------------------------------------------
const superheroesNames = superheroes.map((h) => {
  return h.name;
});

console.log("Opdracht 1a name array:", superheroesNames);

// uitschrijven als een functie
const superheroesNames2 = function (array) {
  return array.map((h) => {
    return h.name;
  });
};

console.log("Opdracht 1b name array:", superheroesNames2(superheroes));

// Opdracht 2 lichte superhelden ----------------------------------------------
const lightHeroes = superheroes.filter((hero) => {
   return parseInt(hero.weight) < 190;
//   return hero.weight < 190;
});

console.log("Opdracht 2a Lichte superhelden:", lightHeroes);

// en als ik alleen de namen wil kan ik chainen
const lightHeroesNames = superheroes
  .filter((hero) => parseInt(hero.weight) < 190)
  .map((hero) => hero.name);

console.log("Opdracht 2b Lichte superhelden namen: ", lightHeroesNames);


// Opdracht 3 array van namen van 200 pounds ----------------------------------
const pound200HeroesNames = superheroes
  .filter((hero) => parseInt(hero.weight) === 200)
  .map((hero) => hero.name);

  console.log("Opdracht 3a 200 pound superhelden namen: ", pound200HeroesNames);

// uit de oplossing, in twee stappen
// stap 1
const heavySuperheroes = superheroes.filter( hero => {
    return hero.weight == 200;
});
// of
// const heavySuperheroes = superheroes.filter( hero => hero.weight == 200);

// stap 2
const heavySuperheroeNames = heavySuperheroes.map( hero => {
    return hero.name;
})



// Opdracht 4 array met de first appearance comic -----------------------------
// eerst in twee stappen
const firstAppearances = superheroes.map( h => h.first_appearance);

console.log("Opdracht 4a first-appearance-comics:", firstAppearances);

// Opdracht 5 DC Comics superhelden -------------------------------------------
const dccomicsHeroes = superheroes.filter( n => n.publisher === 'DC Comics');

console.log("Opdracht 5a DC Comics: ", dccomicsHeroes);

// anders schrijven
const dccomicsHeroes2 = function (array) {
    return array.filter( h => h.publisher === 'DC Comics');
}

console.log("Opdracht 5b DC Comics: ", dccomicsHeroes2(superheroes));

// en als arrow function
const dccomicsHeroes3 = array => array.filter((h) => h.publisher === "DC Comics");

console.log("Opdracht 5c DC Comics: ", dccomicsHeroes3(superheroes));

// Opdracht 6 gewicht optellen ------------------------------------------------
const sumWeight = superheroes
 .filter((hero) => hero.weight != "unknown")
 .reduce((a,b) => {
   return a + parseInt(b.weight);
}, 0);

console.log("Opdracht 6a som gewicht:", sumWeight);

// de oplossing zegt
// Deze is gemaakt voor de pro's met een implicit return statement (oftwel een one-liner)
// EN een een in chain:
const addedWeightDC = DCComics.map(hero => {
  return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0;
}).reduce((weight1, weight2) => weight1 + weight2);

console.log("TotalWeight of DC Comics - supersmall version:", addedWeightDC);

//De bovenstaande oplossing kun je ook wat uitgebreider opschrijven:
const heroWeights = DCComics.map(hero => {
  if (hero.weight !== "unknown") {
    // de Hero weights zijn in de data opgenamen als strings, e.g: '40'
    // Deze moet je even parsen naar een integer, zodat je er mee kunt rekenen.
    return parseInt(hero.weight, 10);
  } else {
    // wanneer het gewicht dus "unknown" is, dan wil je het gewicht van 0 optellen.
    return 0;
  }
});


// Opdracht 7 gewicht optellen van Marvel Comics -------------------------------
const sumWeight2 = superheroes
 .filter((hero) => hero.publisher === "Marvel Comics")
 .filter((hero) => hero.weight != "unknown")
 .reduce((a,b) => {
   return a + parseInt(b.weight);
}, 0);

console.log("Opdracht 7a som gewicht Marvel Comics:", sumWeight2);

// een elegantere manier
const sumWeight3 = superheroes
  .filter((hero) => hero.publisher === "Marvel Comics")
  .filter((hero) => !isNaN(hero.weight))
  .reduce((a, b) => {
    return a + parseInt(b.weight);
  }, 0);

console.log("Opdracht 7b som gewicht Marvel Comics:", sumWeight3);

// Opdracht 8 zoek de zwaarste superheld
// dit is het grootste gewicht
const maxWeight = superheroes
  .filter((hero) => !isNaN(hero.weight))
  .reduce((a, b) => {
    return Math.max( a, parseInt(b.weight));
  }, 0);

console.log("Opdracht 8a max gewicht:", maxWeight);

const heaviestSuperhero = superheroes.filter( function (h) {
    return parseInt(h.weight) === maxWeight;
})

console.log("Opdracht 8b:", heaviestSuperhero);

// var arr = [1, 2, 3];
// var max = arr.reduce(function (a, b) {
//   return Math.max(a, b);
// });

// de oplossing zegt:
// First cast all values to a number or 0 if unknown
const allHeroes = heroes.map(hero => {
  const weight = hero.weight !== "unknown" ? parseInt(hero.weight) : 0;
  hero.weight = weight;
  return hero;
});
// next, use reduce to find the largest value
const heaviestHero = allHeroes.reduce(
  (currentHeaviestHero, currentHero) => {
    if (currentHero.weight > currentHeaviestHero.weight) {
      return currentHero;
    } else {
      return currentHeaviestHero;
    }
  },
  allHeroes[0]
  // met deze laatste waarde geef je aan wat de initiele waarde moet zijn van de functie
);

console.log("Heaviest her0000o:", heaviestHero);
















