// deel 1

async function doWork() {
  try {
    
    const getDataResolved = await getMovieGenres();
    // console.log(getDataResolved);
    return getDataResolved;

  } catch (error) {
     console.log(`Er gaat iets mis: ${error}`)
  }
}

const addToDocument = function (genresArray) {

  let ulGenres = document.getElementById("ul-genres");
  
  genresArray.forEach( genre => {
    
    let newGenreLi = document.createElement("li");
    newGenreLi.innerHTML = "genre naam: " + genre.name + ", id: " + parseInt(genre.id);
    ulGenres.append(newGenreLi);

  })
};

doWork().then( data => addToDocument(data.genres));

// moet ik in de hele async verhaal blijven of kan ik daar ook nog uit?
// als JS single-threaded is, kan het toch alleen maar dingen achter elkaar doen
// dan is async toch gewoon uitstel?

async function doMoreWork() {
  try {
    const movieById = await getMovieByImdbId("tt1596363");
    // console.log(movieById);
    return movieById;
  } catch (error) {
     console.log(`Er gaat iets mis: ${error}`)
  }
}

const addFavouriteMovie = function (favouriteMovie) {

  // hier moeten we iets aan toe gaan voegen
  let secondH1 = document.querySelector('body h1:nth-of-type(2)');
  let newP = document.createElement("p");
  newP.innerHTML = favouriteMovie.movie_results[0].title;
  secondH1.after(newP);
}

doMoreWork().then( data => addFavouriteMovie(data));
//
//
//
async function doEvenMoreWork() {
  try {

    const top20RatedMovies = await getTop20RatedMovies();
    return top20RatedMovies;

    console.log(top20RatedMovies);

  } catch (error) {
    console.log(`Er gaat iets mis: ${error}`);
  }
}

const addTop20RatedMovies = function (movieArray) {
  // console.log(movieArray);
  let ulTop20 = document.getElementById("ul-top-20")

  movieArray.forEach( movie => {
    let newTopLi = document.createElement("li");
    newTopLi.innerHTML = movie.title;
    ulTop20.append(newTopLi);
  })
}

doEvenMoreWork().then( data => addTop20RatedMovies(data.results));
//
//
//
async function doStillMoreWork () {
  try {
    const topRatedActionMovies = await getTopRatedActionMovies();
    // console.log(topRatedActionMovies);
    return topRatedActionMovies;
  } catch (err) {
    console.log(`Er gaat iets mis: ${err}`);
  }
}

const addTopRatedActionMovies = function (movieArray) {
  let ulTopAction = document.getElementById("ul-top-action");
  movieArray.forEach( movie => {
    let newActionLi = document.createElement("li");
    newActionLi.innerHTML = movie.title;
    ulTopAction.append(newActionLi);
  })
}

doStillMoreWork().then( data => addTopRatedActionMovies(data.results));
//
// ul-1975
//
async function keepWorking () {
  try {
    const movies1975 = await get1975Movies();
    return movies1975;
  } catch (err) {
    console.log(`Er gaat iets mis: ${err}`);
  }
}

// const add1975Movies = function (movieArray) {
//   let ul1975 = document.getElementById("ul-1975");
//   movieArray.forEach((movie) => {
//     let newLi = document.createElement("li");
//     newLi.innerHTML = movie.title;
//     ul1975.append(newLi);
//   });
// };

// keepWorking().then( data => add1975Movies(data.results));

// ik kan ook het geretourneerde object doorsturen vanuit keepWorking(), dan haal ik daar iets later en op een andere plek de array uit
const add1975Movies = function (moviesObject) {
  moviesObject.results.forEach((movie) => {
    let newLi = document.createElement("li");
    newLi.innerHTML = movie.title;
    document.getElementById("ul-1975").append(newLi);
  });
};

keepWorking().then( data => add1975Movies(data));


















