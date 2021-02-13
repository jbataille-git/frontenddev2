// console.log(doWork());

// async function doWork() {
//   try {
//     const getDataResolved = await getData();
//     // console.log(typeof getDataResolved);
//     return getDataResolved;
//   } catch (error) {

//     console.log(`Oeps, foutje! ${error}`)

//   }
// }

//console.log(doWork());

// uit vraagbaak JS Advanced Dirk Kaandorp
// async function getMoviesTop20() {
//   console.log('Bezig met films op te halen...')
//   try {
// //    const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4ba7d3b5cecdf7950d04bb83714dfdcb");
//     const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=24aeec0dd801e7429403450d657860b2");
//     if (!response.ok) {
//       throw new Error(response.status)
//     }
//     const result = await response.json();
//     // console.log(result);
//     return result
//   } catch (error) {
//     console.log(`Oeps, foutje! ${error}`)
//   }
// }

// async function test(){
//   const a = await getMoviesTop20();
//   console.log(a);
// }
// test();

// .then((myJson) => {
//     document.body.innerHTML =
//       "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>";
//   });


// fetch("http://swapi.dev/api/planets/1/")
//   .then((response) => response.json())
//   .then((myJson) => {
//     document.body.innerHTML =
//       "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>";
//   });

