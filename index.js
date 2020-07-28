
personalMovieDB = {
count:0,
movies : {},
actors : {},
genres : [],
privat : false
};
//numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
//count = numberOfFilms;


a = prompt("Один из последних просмотренных фильмов?",""),
b = prompt("На сколько вы оцените его?",""),
c = prompt("Один из последних просмотренных фильмов?",""),
d = prompt("На сколько вы оцените его?","");
    




personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;



//console.log(`${numberOfFilms}`);
console.log(personalMovieDB.movies);