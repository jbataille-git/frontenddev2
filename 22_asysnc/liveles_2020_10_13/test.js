// const promise1 = new Promise((resolve, reject) => {
//   resolve('Success!');
// });

// promise1.then((value) => {
//   console.log(value);
// });


// zit in .then altijd het resultaat van resolve()?
// en in .catch het resultaat van reject()?

// Kyle op Youtube, promises in 10 minuten
let p = new Promise((resolve, reject) => {
  let a = 1 + 13;
  if ( a === 2) {
    resolve('Success')
  } else {
    reject('Failed')
  }
});


p.then((message) => {console.log('This is in the then ' + message)})
 .catch((message) => { console.log('This is in the catch ' + message)});

