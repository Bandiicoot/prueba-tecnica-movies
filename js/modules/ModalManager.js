// Maneja el modal y su relación con IMDB
export class ModalManager {
  constructor(modalElement) {
    this.modal = modalElement;
    this.modalContent = this.modal.querySelector(".modal-content");
    this.watchButton = this.modal.querySelector(".watch-btn");

    this.watchButton.addEventListener("click", () => this.openImdb());
    this.imdbUrl = "";
  }

  // Muestra el modal y setea la URL de IMDB
  showModal(imdbUrl) {
    this.imdbUrl = imdbUrl;
    this.modal.classList.remove("hidden");
  }

  // Esconde el modal como un profesional del escape
  hideModal() {
    this.modal.classList.add("hidden");
  }

  // Abre IMDB en nueva pestaña (si hay URL) y cierra el modal
  openImdb() {
    if (this.imdbUrl) window.open(this.imdbUrl, "_blank");
    this.hideModal(); // Chau modal, hola IMDB
  }
}
