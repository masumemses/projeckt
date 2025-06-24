const numberOfFilms = +prompt("Скільки філмів ви вже переглянули?", ""); 

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Останній переглянутий фільи?", ''),
    b = prompt("Яка його оцінка?", ''),
    c = prompt("Останній переглянутий фільи?", ''),
      d = prompt("Яка його оцінка?", '');
     
personaMovieDB.movies[a] = b;
personaMovieDB.movies[c] = d;

console.log(personaMovieDB);