let numbers = [1,2,3,4];

// console.log("numbers: " + numbers);

const numbers2 = numbers;

// console.log("numbers2: " + numbers2);

//const numbers3 = [...numbers];
// console.log("numbers3: " + numbers3);

console.log("over numbers2:")
console.log(numbers2);
console.log(numbers === numbers2);
console.log(numbers == numbers2);


const numbers3 = [...numbers];
console.log(numbers3);
console.log("over numbers3:")
console.log(numbers === numbers3);
console.log(numbers == numbers3);

const numbers4 = Array.from(numbers);
console.log("over numbers4:")
console.log(numbers4);
console.log(numbers === numbers4);
console.log(numbers == numbers4);



// numbers = [1,2,3,4,5];
// console.log(numbers);

// console.log("numbers2:")
// console.log(numbers2)


// const person1 = { name: "john", age: "61"};
// console.log("person1")
// console.log(person1);

// const person2 = person1;
// console.log("person2")
// console.log(person2);
// person2.age = 62;
// console.log(person2);

// const person3 = { ...person1, age: 64}
// console.log("person3")
// console.log(person3);
