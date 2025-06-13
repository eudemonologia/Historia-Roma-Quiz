// UI Elements
const screens = {
  start: document.getElementById("start-screen"),
  question: document.getElementById("question-screen"),
  result: document.getElementById("result-screen"),
  share: document.getElementById("share-modal"),
};
const startButton = document.getElementById("start-button");
const backFromQuizButton = document.getElementById("back-from-quiz-button");
const restartButton = document.getElementById("restart-button");
const homeButton = document.getElementById("home-button");
const shareButton = document.getElementById("share-button");
const closeModalButton = document.getElementById("close-modal-button");
const generateImageButton = document.getElementById("generate-image-button");
const questionText = document.getElementById("question-text");
const answerOptionsContainer = document.getElementById("answer-options");
const scoreTracker = document.getElementById("score-tracker");
const correctCountEl = document.getElementById("correct-count");
const incorrectCountEl = document.getElementById("incorrect-count");
const finalScoreDetails = document.getElementById("final-score-details");
const scoreText = document.getElementById("score-text");
const scoreMessage = document.getElementById("score-message");
const progressBarInner = document.getElementById("progress-bar-inner");

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = 0;
let finalScore = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startQuiz() {
  shuffleArray(questionBank);
  currentQuestions = questionBank.slice(0, 40); // Actualizado a 40 preguntas
  currentQuestionIndex = 0;
  score = 0;
  wrongAnswers = 0;
  showScreen("question");
  updateScoreTracker();
  displayQuestion();
}

function updateScoreTracker() {
  correctCountEl.textContent = score;
  incorrectCountEl.textContent = wrongAnswers;
}

function displayQuestion() {
  answerOptionsContainer.innerHTML = "";
  const progress = (currentQuestionIndex / currentQuestions.length) * 100;
  progressBarInner.style.width = `${progress}%`;
  const questionData = currentQuestions[currentQuestionIndex];
  questionText.textContent = questionData.question;
  const options = [...questionData.distractors, questionData.correctAnswer];
  shuffleArray(options);
  options.forEach((optionText) => {
    const button = document.createElement("button");
    button.textContent = optionText;
    button.classList.add(
      "answer-option",
      "w-full",
      "p-4",
      "rounded-md",
      "text-lg",
      "min-h-[80px]"
    );
    button.onclick = () => selectAnswer(button, questionData.correctAnswer);
    answerOptionsContainer.appendChild(button);
  });
}

function selectAnswer(selectedButton, correctAnswer) {
  const buttons = answerOptionsContainer.querySelectorAll("button");
  buttons.forEach((button) => (button.disabled = true));

  scoreTracker.classList.remove("score-pulse-correct", "score-pulse-incorrect");

  if (selectedButton.textContent === correctAnswer) {
    score++;
    selectedButton.classList.add("correct");
    scoreTracker.classList.add("score-pulse-correct");
  } else {
    wrongAnswers++;
    selectedButton.classList.add("incorrect");
    scoreTracker.classList.add("score-pulse-incorrect");
    buttons.forEach((button) => {
      if (button.textContent === correctAnswer) {
        button.classList.add("correct");
      }
    });
  }
  updateScoreTracker();

  setTimeout(() => {
    scoreTracker.classList.remove(
      "score-pulse-correct",
      "score-pulse-incorrect"
    );
  }, 600);

  setTimeout(() => {
    const quizScreenDiv = document.getElementById("question-screen");
    quizScreenDiv.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < currentQuestions.length) {
        displayQuestion();
      } else {
        showResults();
      }
    }, 300);
  }, 1500);
}

function showResults() {
  showScreen("result");
  finalScore = Math.ceil((score / currentQuestions.length) * 10);

  finalScoreDetails.textContent = `Correctas: ${score} | Incorrectas: ${wrongAnswers}`;
  scoreText.textContent = `Puntuación Final: ${finalScore} / 10`;

  let message = "";
  if (finalScore >= 9) {
    message = "¡Excelente! Eres un verdadero experto en historia romana.";
  } else if (finalScore >= 7) {
    message = "¡Muy buen trabajo! Tienes un sólido conocimiento del tema.";
  } else if (finalScore >= 4) {
    message = "¡Buen esfuerzo! Sigue repasando los detalles.";
  } else {
    message = "No te desanimes. ¡Vuelve a intentarlo!";
  }
  scoreMessage.textContent = message;
}

function showScreen(screenName) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[screenName].classList.add("active");
}

function openShareModal() {
  screens.share.classList.remove("hidden");
  document.getElementById("share-step-1").classList.remove("hidden");
  document.getElementById("share-step-2").classList.add("hidden");
  document.getElementById("share-name-input").value = "";
  document.getElementById("image-container").innerHTML = "";
}

function generateImage() {
  const certName =
    document.getElementById("share-name-input").value.trim() ||
    "Valiente Estudiante";
  document.getElementById("cert-name").textContent = certName;
  document.getElementById(
    "cert-score"
  ).textContent = `Puntuación: ${finalScore} / 10`;

  const certificateElement = document.getElementById("certificate");

  certificateElement.classList.remove("hidden");
  certificateElement.style.left = "0px";

  html2canvas(certificateElement, { scale: 2, useCORS: true, allowTaint: true })
    .then((canvas) => {
      certificateElement.style.left = "-9999px";
      certificateElement.classList.add("hidden");

      const imageUrl = canvas.toDataURL("image/jpeg", 0.9);

      const imageContainer = document.getElementById("image-container");
      imageContainer.innerHTML = `<img src="${imageUrl}" alt="Certificado de resultado" class="w-full h-auto border-2 border-amber-800">`;

      document.getElementById("share-step-1").classList.add("hidden");
      document.getElementById("share-step-2").classList.remove("hidden");
    })
    .catch((e) => {
      console.error("Error al generar la imagen:", e);
      certificateElement.style.left = "-9999px";
      certificateElement.classList.add("hidden");
    });
}

// Event Listeners
startButton.addEventListener("click", startQuiz);
backFromQuizButton.addEventListener("click", () => showScreen("start"));
restartButton.addEventListener("click", startQuiz);
homeButton.addEventListener("click", () => showScreen("start"));
shareButton.addEventListener("click", openShareModal);
closeModalButton.addEventListener("click", () =>
  screens.share.classList.add("hidden")
);
generateImageButton.addEventListener("click", generateImage);
