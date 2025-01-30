/**
 * Explicacion rapida:
 *   El sistema es como un arbol de pelis donde:
* - Las `initialMovieIds` son las opciones de arranque
* - Cada elección te lleva a nuevas opciones, en nexStep se indica a que peliculas ir.
* - Si no tiene nexStep se agrega "imdbUrl" para indicar que es una pelicula final y dirigirse a su imdb 
* - Se pueden agregar niveles infinitos (mientras los IDs conecten)
  - Si se agregan niveles recomiendo ir a ProgressManager para agregar titulos
 */

export const movies = {
  //  PELÍCULAS INICIALES
  1: {
    id: 1,
    title: "The Gray Man",
    img: "./img/gray.webp",
    nextStep: [13, 4, 14],
  },
  2: { id: 2, title: "Blonde", img: "./img/blonde.png", nextStep: [5, 15, 16] },
  3: {
    id: 3,
    title: "Minions",
    img: "./img/minions.webp",
    nextStep: [29, 12, 9],
  },

  //  PELÍCULAS DE SEGUNDA FASE
  4: {
    id: 4,
    title: "Bullet Train",
    img: "./img/bullet-train.png",
    nextStep: [22, 21, 20],
  },
  5: {
    id: 5,
    title: "Purple Hearts",
    img: "./img/PurpleHearts.webp",
    nextStep: [23, 24, 25],
  },
  9: {
    id: 9,
    title: "Space Jam",
    img: "./img/SpaceJam.png",
    nextStep: [17, 31, 30],
  },
  12: {
    id: 12,
    title: "Mission: Impossible - Fallout",
    img: "./img/Mission-Fallout.webp",
    nextStep: [6, 11, 10],
  },
  13: {
    id: 13,
    title: "Top Gun: Maverick",
    img: "./img/top-gun.png",
    nextStep: [17, 18, 19],
  },
  14: {
    id: 14,
    title: "Thor: Love and Thunder",
    img: "./img/thor.png",
    nextStep: [6, 7, 8],
  },
  15: {
    id: 15,
    title: "Wakanda Forever",
    img: "./img/wakanda.png",
    nextStep: [26, 27, 28],
  },
  16: {
    id: 16,
    title: "The Godfather",
    img: "./img/TheGodFather.png",
    nextStep: [21, 20, 22],
  },
  29: {
    id: 29,
    title: "Doctor Strange",
    img: "./img/DoctorStrange.png",
    nextStep: [24, 19, 6],
  },

  //  PELÍCULAS FINALES (CON ENLACES A IMDb)
  6: {
    id: 6,
    title: "The Batman",
    img: "./img/the-batman.png",
    imdbUrl: "https://www.imdb.com/title/tt1877830/",
  },
  7: {
    id: 7,
    title: "Spider-Man",
    img: "./img/spider-man.png",
    imdbUrl: "https://www.imdb.com/title/tt10872600/",
  },
  8: {
    id: 8,
    title: "Flash",
    img: "./img/flash.png",
    imdbUrl: "https://www.imdb.com/title/tt2294629/",
  },
  10: {
    id: 10,
    title: "Toy Story",
    img: "./img/ToyStory.png",
    imdbUrl: "https://www.imdb.com/title/tt0114709/",
  },
  11: {
    id: 11,
    title: "Guardians",
    img: "./img/Guardians.png",
    imdbUrl: "https://www.imdb.com/title/tt2015381/",
  },
  17: {
    id: 17,
    title: "Interstellar",
    img: "./img/Interestellar.png",
    imdbUrl: "https://www.imdb.com/title/tt0816692/",
  },
  18: {
    id: 18,
    title: "Star Wars",
    img: "./img/StarWars.png",
    imdbUrl: "https://www.imdb.com/title/tt0076759/",
  },
  19: {
    id: 19,
    title: "Shin Godzilla",
    img: "./img/ShinGodzilla.png",
    imdbUrl: "https://www.imdb.com/title/tt4262980/",
  },
  20: {
    id: 20,
    title: "Iron Man",
    img: "./img/IronMan.webp",
    imdbUrl: "https://www.imdb.com/title/tt0371746/",
  },
  21: {
    id: 21,
    title: "Inception",
    img: "./img/Inception.png",
    imdbUrl: "https://www.imdb.com/title/tt1375666/",
  },
  22: {
    id: 22,
    title: "Parasite",
    img: "./img/Parasite.webp",
    imdbUrl: "https://www.imdb.com/title/tt6751668/",
  },
  23: {
    id: 23,
    title: "La La Land",
    img: "./img/lalaland.webp",
    imdbUrl: "https://www.imdb.com/title/tt3783958/",
  },
  24: {
    id: 24,
    title: "Pirates of the Caribbean",
    img: "./img/PiratesOfTheCaribbean.webp",
    imdbUrl: "https://www.imdb.com/title/tt0325980/",
  },
  25: {
    id: 25,
    title: "Coco",
    img: "./img/Coco.png",
    imdbUrl: "https://www.imdb.com/title/tt2380307/",
  },
  26: {
    id: 26,
    title: "The Lion King",
    img: "./img/TheLionKing.png",
    imdbUrl: "https://www.imdb.com/title/tt0110357/",
  },
  27: {
    id: 27,
    title: "A Quiet Place",
    img: "./img/AQuietPlace.png",
    imdbUrl: "https://www.imdb.com/title/tt6644200/",
  },
  28: {
    id: 28,
    title: "Pride & Prejudice",
    img: "./img/Pride&Prejudice.webp",
    imdbUrl: "https://www.imdb.com/title/tt0414387/",
  },
  30: {
    id: 30,
    title: "Sonic 3",
    img: "./img/Sonic3.png",
    imdbUrl: "https://www.imdb.com/title/tt18259086/",
  },
  31: {
    id: 31,
    title: "John Wick",
    img: "./img/John-Wick.webp",
    imdbUrl: "https://www.imdb.com/title/tt2911666/",
  },
};

/**
 Lista de películas iniciales.
 */
export const initialMovieIds = [1, 2, 3];
