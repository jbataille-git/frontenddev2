
let object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

object = { name: "jan", age: 26, job: "fietsenmaker", merk: "gazelle", gears: 27};

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

/*
var obj = {
  name: "Simon",
  age: "20",
  clothing: {
      style: "simple",
      hipster: false
  }
}

for(var propt in obj){
  console.log(propt + ': ' + obj[propt]);
}
*/