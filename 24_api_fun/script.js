async function doWork() {
  try {
    const joke = await getJoke();
    // console.log(joke);
    return joke;
  } catch (error) {
    console.log(`Er gaat iets mis: ${error}`);
  }
}

const addToDocument = function (joke) {
  
  document.getElementById("div-text").innerHTML = joke.joke;

  let imageSrc = "<img src='https://icanhazdadjoke.com/j/"
                + joke.id
                + ".png' />"
                ;

  document.getElementById("div-image").innerHTML = imageSrc;

};

const processClick = function () {
  doWork().then((joke) => addToDocument(joke))
};

document.getElementById("grap-button").addEventListener("click", processClick);

