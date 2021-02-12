// promises
const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];


function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// een tweede parameter geven
function createPost(post)  {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      // const error = false;
      const error = true;

      if(!error) {
        resolve();
      } else {
        reject("Error, something went wrong");
      }
    }, 2000);

  })
}
// returnt een promise dus kunnen we .then zeggen
// createPost({title: 'Post Three', body: 'This is post three'})
//   .then(getPosts)
//   .catch(err => console.log(err))  // die heb je nodig om error = true op te vangen
//   ;

// Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, 'Goodbye')
 );

// wordt uitgevoerd als alle promises klaar zijn
// in ons geval duurt dat dus 2000 ms
// Promise.all([promise1, promise2, promise3])
//   .then(values => console.log(values));

// uitbreiden met een vierde promise
// een fetch heeft wat extra nodig
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());


Promise.all([promise1, promise2, promise3, promise4])
  .then(values => console.log(values));
