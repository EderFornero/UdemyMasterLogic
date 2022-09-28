//dado un array de objetos de peliculas, mostrar cuales ví "titulo" + "director" y cuales me faltan por ver "titulo" + "director" 

const myFilms = (films) => {

    for (film of films) {
        
        let filmWatched = `"${film.name}" direct by ${film.director}`
        
        if(film.watched){ 
            console.log("I watched", filmWatched);
        }else{ 
            console.log("I don't watch", filmWatched, "yet");
        }
    }
}


const filmsWatched = [
    {
        name: "Cars", year: 2006, director: "John Lasseter", watched: false
    },
    {
        name: "Toy Story", year: 1995, director: "John Lasseter", watched: true
    }
];


myFilms(filmsWatched);