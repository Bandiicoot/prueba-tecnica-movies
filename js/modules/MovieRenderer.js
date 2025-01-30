export class MovieRenderer {
  constructor(container, onMovieClick) {
    this.container = container;
    this.onMovieClick = onMovieClick;
  }

  renderMovies(movieIds, movies) {
    this.container.classList.add("fade-out");

    setTimeout(() => {
      this.container.innerHTML = "";

      movieIds.forEach((movieId) => {
        const movie = movies[movieId];
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie-card");
        movieElement.innerHTML = `
            <img src="${movie.img}" alt="${movie.title}" loading="lazy">
            <p>${movie.title}</p>
          `;

        movieElement.addEventListener("click", () => this.onMovieClick(movie));

        this.container.appendChild(movieElement);
      });

      // Le damos un efecto de fade-in a las nuevas pelis
      this.container.classList.remove("fade-out");
      this.container.classList.add("fade-in");

      // Después de 600ms, le saco la clase "fade-in" para evitar bugs en transiciones
      setTimeout(() => {
        this.container.classList.remove("fade-in");
      }, 600);
    }, 300);
  }
}
