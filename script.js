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
  questionsContainer.innerHTML = '';
  questionsContainer.appendChild(questionElement);

  const submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', () => {
    const answer = document.getElementById('answer').value;
    if (answer === question.correctAnswer) {
      correctAnswers++;
      showCorrectMessage();
    } else {
      incorrectAnswers++;
      showErrorMessage(question.errorMessage);
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  });
}

function showCorrectMessage() {
  const messageElement = document.createElement('div');
  messageElement.innerHTML = `
    <p>EXCELENTE MI AMOR SIGUE ASÍ</p>
    <span class="heart">❤️</span>
  `;
  questionsContainer.appendChild(messageElement);
  setTimeout(() => {
    messageElement.remove();
  }, 2000);
}

function showErrorMessage(errorMessage) {
  const messageElement = document.createElement('div');
  messageElement.innerHTML = `
    <p>${errorMessage}</p>
    <span class="sad-face">☹️</span>
  `;
  questionsContainer.appendChild(messageElement);
  setTimeout(() => {
    messageElement.remove();
  }, 2000);
}

function showResults() {
  questionsContainer.style.display = 'none';
  resultsContainer.style.display = 'block';
  const resultsElement = document.createElement('div');
  resultsElement.innerHTML = `
    <p>Resultados:</p>
    <p>Correctas: ${correctAnswers}</p>
    <p>Incorrectas: ${incorrectAnswers}</p>
    ${correctAnswers > incorrectAnswers ? `
      <p>Me quieres, pero quiereme más 😊</p>
    ` : correctAnswers === questions.length ? `
      <p>Me quiero mucho, pero yo te quiero más 😊</p>
    ` : `
      <p>No me quieres 😔</p>
    `}
  `;
  resultsContainer.appendChild(resultsElement);
}
