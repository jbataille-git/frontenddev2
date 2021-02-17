let apiUrl = "https://icanhazdadjoke.com";

async function getJoke() {
  try {
    
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: { "Accept": "application/json" },
    });

    if (response.ok) {

      let result = await response.json();
      return result;

    }
  } catch(err) {
      console.log(err);
  }
}

// let apiUrl = "https://api.themoviedb.org/3/genre/movie/list";
// let API_KEY = "24aeec0dd801e7429403450d657860b2";

// async function getData() {
//   try {
//     apiUrl = apiUrl + "?api_key=" + API_KEY;

//     const result = await fetch(apiUrl);
//     console.log("Response received");
//     // console.log('wat is result: ' + typeof(result)) // object

//     const resultJson = await result.json();
//     console.log("Result to JSON");
//     // console.log("wat is resultJson: " + typeof resultJson); // object
//     return resultJson;
//   } catch (err) {
//     console.log(err);
//   }
// }
