// script.js
const startButton = document.getElementById('start-button');
const questionsContainer = document.getElementById('questions-container');
const resultsContainer = document.getElementById('results-container');

const questions = [
  {
    question: '¿Cuál es mi nombre completo?',
    correctAnswer: 'DENIS ENRIQUE BENAVIDES CAIPE',
    errorMessage: 'Error! No es correcto.'
  },
  {
    question: '¿Cuál es la fecha de mi nacimiento en formato DD/MM/AAAA?',
    correctAnswer: '13/04/2004',
    errorMessage: 'Error! No es correcto.'
  },
  {
    question: '¿Cuál es la fecha de nuestro cumple meses o aniversario (número)?',
    correctAnswer: '24',
    errorMessage: 'Error! No es correcto.'
  },
  {
    question: '¿Cuál es mi equipo favorito?',
    options: ['Bayer Munich', 'Bayern Munchen', 'Bayern Munich', 'Bayern de Múnich'],
    correctAnswer: 'Bayern de Múnich',
    errorMessage: 'Error! No es correcto.'
  },
  {
    question: '¿Cuál es mi jugador favorito?',
    correctAnswer: 'NEYMAR',
    errorMessage: 'Error! No es correcto.'
  },
  {
    question: '¿Dónde fue nuestro primer beso?',
    options: ['Universidad', 'Boulevard', 'Coctiki', 'Parque'],
    correctAnswer: 'Coctiki',
    errorMessage: 'Error! No es correcto.'
  },
  {
    question: '¿Cuáles son las dos palabras que más nos hemos dicho en nuestros chats? (en mayúsculas)',
    correctAnswer: 'TE QUIERO',
    errorMessage: 'Error! No es correcto.'
  }
];

let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
  questionsContainer.style.display = 'block';
  showQuestion();
});

function showQuestion() {
  const question = questions[currentQuestion];
  const questionElement = document.createElement('div');
  questionElement.innerHTML = `
    <p>${question.question}</p>
    ${question.options ? `
      <ul>
        ${question.options.map(option => `<li>${option}</li>`).join('')}
      </ul>
    ` : ''}
    <input type="text" id="answer" placeholder="Respuesta">
    <button id="submit-button">Enviar</button>
  `;
  questionsContainer.appendChild(questionElement);

  const submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', () => {
    const answer = document.getElementById('answer').value;
    if (answer === question.correctAnswer) {
      correctAnswers++;
      showCorrectMessage();
    } else {
      incorrectAnswers++;
      showErrorMessage(question
