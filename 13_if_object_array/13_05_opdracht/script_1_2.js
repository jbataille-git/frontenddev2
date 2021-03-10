// DEEL 1
/* 
let person = {
    name: "Joost",
    age : 61,
    evaluations: [7,10,9]
}

console.log("De persoon" , person);

console.log("De naam van persoon is", person.name);
console.log("In bracket-notatie: de leeftijd van persoon is", person['age']);


console.log("De evaluations van persoon zijn" , person['evaluations']);

 */
// DEEL 2 ARRAYS

let primaryColors = ['groen', 'blauw', 'rood'];

console.log("De primaire kleuren in mijn array", primaryColors);

console.log("De lengte van mijn array primaryColors is", primaryColors.length);

console.log("Het eerste element is", primaryColors[0]);

console.log("Het laatste element is", primaryColors[primaryColors.length -1]);

// zo kan het ook
let lengte = 0;
lengte = primaryColors.length;
lengte--;
console.log("1. Het laatste element is", primaryColors[lengte]);

primaryColors.push("geel");
console.log("met geel:", primaryColors);

primaryColors.push(5);
console.log("met 5:", primaryColors);

primaryColors.push({greeting: "hoi ik ben een object"});
console.log("met object greeting:", primaryColors);

console.log("alleen greeting:", primaryColors[5]);

// of nog een keer dit truukje
lengte = primaryColors.length;
lengte--;
console.log("3. Het laatste element is", primaryColors[lengte].greeting);
