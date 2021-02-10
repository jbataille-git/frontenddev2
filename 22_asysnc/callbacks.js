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
function createPost(post, callback)  {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000)
}

// getPosts(); hoeft niet meer

createPost({ title: 'Post Three', body: 'This is post three'}, getPosts);
// let now = new Date();
// console.log(now.getSeconds());

