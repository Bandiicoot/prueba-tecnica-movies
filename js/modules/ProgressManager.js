export class ProgressManager {
  constructor() {
    this.title = document.querySelector(".title");
    this.progressText = document.querySelector(".progress-text");
    this.dotsContainer = document.querySelector(".progress-dots");

    // Las preguntas que van a aparecer en cada paso y aca se puede agregar mas si es necesario
    this.questionTexts = [
      "Choose one of the three movies",
      "Which one do you like the most?",
      "Which one do you want to watch now?",
    ];

    this.totalSteps = this.questionTexts.length;
    this.generateDots();
  }

  generateDots() {
    this.dotsContainer.innerHTML = "";

    for (let i = 0; i < this.totalSteps; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      this.dotsContainer.appendChild(dot);
    }

    this.dots = document.querySelectorAll(".dot");
  }

  updateProgress(currentStep) {
    // Nos aseguramos de no pasarnos de la cantidad de preguntas
    this.title.textContent =
      this.questionTexts[Math.min(currentStep, this.totalSteps - 1)];
    this.progressText.textContent = `QUESTION ${currentStep + 1} OF ${
      this.totalSteps
    }`;

    this.dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentStep);
    });
  }

  incrementSteps() {
    this.totalSteps++; // Aumentamos la cantidad de pasos si agregamos más preguntas
  }
}
