import { MovieSelector } from "./modules/MovieSelector.js";
import { ModalManager } from "./modules/ModalManager.js";
import { movies, initialMovieIds } from "./modules/moviesData.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".movies-container");
  const modalElement = document.querySelector(".modal");

  const modalManager = new ModalManager(modalElement);
  new MovieSelector(container, modalManager, movies, initialMovieIds);

  modalElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      modalManager.hideModal();
    }
  });
});
document.addEventListener("click", (event) => {
  const movies = document.querySelectorAll(".movie-card");

  // Si el clic NO fue dentro de una tarjeta
  if (!event.target.closest(".movie-card")) {
    movies.forEach((movie) => {
      movie.classList.remove("pulse-effect");
      void movie.offsetWidth;
      movie.classList.add("pulse-effect");
    });
  }
});
