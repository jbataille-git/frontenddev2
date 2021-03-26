// tmdb api key
// v4
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGFlZWMwZGQ4MDFlNzQyOTQwMzQ1MGQ2NTc4NjBiMiIsInN1YiI6IjYwMjZiN2QxOTVjMGFmMDA0MTU2NzU2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W6Gue2u6nPD-4RpS-IKlu5t4iCIVo-UB_Ih9J7ZGAM4
//
// v3
// 24aeec0dd801e7429403450d657860b2
//
// https://api.themoviedb.org/3/movie/550?api_key=24aeec0dd801e7429403450d657860b2

let apiUrl = "https://api.themoviedb.org/3/genre/movie/list";
let API_KEY = "24aeec0dd801e7429403450d657860b2";

async function getData() {
  try {
    apiUrl = apiUrl + "?api_key=" + API_KEY;

    const result = await fetch(apiUrl);
    console.log("Response received");
    // console.log('wat is result: ' + typeof(result)) // object

    const resultJson = await result.json();
    console.log("Result to JSON");
    // console.log("wat is resultJson: " + typeof resultJson); // object
    return resultJson;

  } catch (err) {
    console.log(err);
  }
}
