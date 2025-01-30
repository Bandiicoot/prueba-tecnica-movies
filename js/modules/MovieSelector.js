import { ProgressManager } from "./ProgressManager.js";
import { MovieRenderer } from "./MovieRenderer.js";

export class MovieSelector {
  constructor(container, modalManager, movies, initialMovieIds) {
    this.container = container;
    this.modalManager = modalManager;
    this.movies = movies;
    this.currentMovieIds = initialMovieIds;
    this.history = [];

    this.progressManager = new ProgressManager();

    this.movieRenderer = new MovieRenderer(this.container, (movie) =>
      this.handleMovieClick(movie)
    );

    this.movieRenderer.renderMovies(this.currentMovieIds, this.movies);
    this.progressManager.updateProgress(this.history.length);
  }

  handleMovieClick(movie) {
    console.log("Película seleccionada:", movie.title);

    // Si la peli tiene un link de IMDb, mostramos el modal y reiniciamos el flujo
    if (movie.imdbUrl) {
      console.log("Abriendo modal con URL:", movie.imdbUrl);
      this.modalManager.showModal(movie.imdbUrl);

      this.resetSelection();
      return;
    }

    if (movie.nextStep.length > 0) {
      this.history.push(movie.id);
      this.currentMovieIds = movie.nextStep;

      // Si agregamos más preguntas, actualizamos la cantidad de pasos para que quede prolijo
      if (this.history.length > this.progressManager.totalSteps - 1) {
        this.progressManager.incrementSteps();
        this.progressManager.generateDots();
      }

      this.movieRenderer.renderMovies(this.currentMovieIds, this.movies);
    }

    this.progressManager.updateProgress(this.history.length);
  }

  // Método para reiniciar la selección desde cero
  resetSelection() {
    setTimeout(() => {
      this.history = [];
      this.currentMovieIds = Object.keys(this.movies).slice(0, 3); // Volvemos a la primera tanda de películas

      // Reiniciamos el progreso
      this.progressManager.totalSteps =
        this.progressManager.questionTexts.length;
      this.progressManager.generateDots();
      this.progressManager.updateProgress(0);

      // Volvemos a renderizar las pelis iniciales
      this.movieRenderer.renderMovies(this.currentMovieIds, this.movies);
    }, 500); // Le damos un pequeño delay para que no sea tan brusco
  }
}
