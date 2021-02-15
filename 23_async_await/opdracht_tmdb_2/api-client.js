// voorbeeld:
// https://api.themoviedb.org/3/movie/550?api_key=24aeec0dd801e7429403450d657860b2

let apiUrl = "https://api.themoviedb.org/3/genre/movie/list";
let API_KEY = "24aeec0dd801e7429403450d657860b2";

async function getMovieGenres() {
  try {
    apiUrl = apiUrl + "?api_key=" + API_KEY;

    const result = await fetch(apiUrl);
    const resultJson = await result.json();
    return resultJson;

  } catch (err) {
    console.log(err);
  }
}

async function getMovieByImdbId(imdbId) {
  try {
    let apiUrl = "https://api.themoviedb.org/3/find/";
    apiUrl += imdbId;
    apiUrl += "?api_key=" + API_KEY + "&external_source=imdb_id";

    // console.log(apiUrl);

    const resultJson = await (await fetch(apiUrl)).json();
    return resultJson;

  } catch (err) {
    console.log(err);
  }
};

async function getTop20RatedMovies() {
  try {
    let apiUrl =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=24aeec0dd801e7429403450d657860b2&language=en-US&page=1";

    const resultJson = await (await fetch(apiUrl)).json();
    return resultJson;

  } catch (err) {
    console.log(err);
  }
};


async function getTopRatedActionMovies() {
  try {

    let apiUrl = "https://api.themoviedb.org/3/discover/movie?api_key=24aeec0dd801e7429403450d657860b2&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_genres=28";

    const resultJson = await (await fetch(apiUrl)).json();
    return resultJson;

  } catch (err) {
    console.log(err);
  }
}

async function get1975Movies () {
  try {
      let apiUrl =
       "https://api.themoviedb.org/3/discover/movie?api_key=24aeec0dd801e7429403450d657860b2&page=1&primary_release_year=1975";
      const resultJson = await (await fetch(apiUrl)).json();
      return resultJson;
  } catch (err) {
    console.log(err);
  }
};




// primary_release_year
// 