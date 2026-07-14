const movies = ["Saw", "Halloween", "Friday the 13th", "The Exorcist", "A Nightmare on Elm Street"];

function displayMovies(movies) {
    console.log("Traditional for loop:");
    for (let i = 0; i < movies.length; i++) {
        console.log(`${i + 1}. ${movies[i]}`);
    }
}

function uppercaseMovies(movies) {
    console.log("\nUppercase movie titles:");
    for (const movie of movies) {
        console.log(movie.toUpperCase());
    }
}

function totalCharacters(movies) {
    let total = 0;
    movies.forEach((movie) => total += movie.length);
    console.log(`\nTotal number of characters in movie titles: ${total}`);
}

displayMovies(movies);
uppercaseMovies(movies);
totalCharacters(movies);