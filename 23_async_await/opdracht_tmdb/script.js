async function doWork() {
  try {
    
  const getDataResolved = await getData();
  console.log(getDataResolved);
  return getDataResolved;

  } catch (error) {
     console.log(`Er gaat iets mis: ${error}`)
  }
}

const addToDocument = function (genresArray) {

  let ulGenres = document.getElementById("ulGenres");
  
  genresArray.forEach( genre => {
    
    let newGenreLi = document.createElement("li");
    newGenreLi.innerHTML = genre.name;
    ulGenres.append(newGenreLi);

  })
};

doWork().then( data => addToDocument(data.genres));

// moet ik in de hele async verhaal blijven of kan ik daar ook nog uit?
// als JS single-threaded is, kan het toch alleen maar dingen achter elkaar doen
// dan is async toch gewoon uitstel?
