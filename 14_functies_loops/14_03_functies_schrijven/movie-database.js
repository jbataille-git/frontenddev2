let myFavMovie = {
    title: 'The Big Short',
    duration: 105,
    stars: ["Brad Pitt", "Christian Bale", "Phoebe International"]
}

const printMovie = function(movie) {
    let movieInfo = movie.title 
                    + " lasts for "
                    + movie.duration
                    + " minutes. Stars are "
                    + movie.stars[0]
                    + ", "
                    + movie.stars[1]
                    + " and "
                    + movie.stars[2]
                    + "."
                    ;
    console.log( movieInfo);
}

printMovie(myFavMovie);