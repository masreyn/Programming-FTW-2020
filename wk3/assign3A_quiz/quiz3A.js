let submitAnswerButton;
let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let message;

let statements = [
  { question: 'What is the capital of Canada?', answer: 'Ottawa' },
  // { question: 'What is the capital of El Salvador?', answer: 'San Salvador' },
  { question: 'What is the capital of England?', answer: 'London' },
  { question: 'What is the capital of Ukraine?', answer: 'Kyiv' },
  { question: 'What is the capital of France?', answer: 'Paris' },
  { question: 'What is the capital of Algeria?', answer: 'Algiers' }
];

function next () {
  if (statements.length < 1) {
    window.alert('You won');
    return;
  }
  const randomIndex = Math.ceil(Math.random() * statements.length - 1);
  return statements[randomIndex];
}
/*  if (currentQuestion.answer.toLowerCase()) === questionInput.value.toLowerCase()) {
  ??? is this correct? */
function checkQuestion () {
  if (currentQuestion.answer === questionInput.value()) {
  // remove correct answer form array
    statements = statements.filter(statementsObj => {
      return currentQuestion.answer !== statementsObj.answer;
    });
    // this is the correct condition
    response = 'Correct! Next Question';
    responseColor = 'green';
  } else {
    // this is the wrong condition
    response = 'Oops, that was not correct! Try again';
    responseColor = 'red';
  }
  currentQuestion = next();
  questionInput.value('');
  message = currentQuestion.question;
}
currentQuestion = next();
message = currentQuestion.question;

function setup () {
  createCanvas(800, 600);
  textFont('Ubuntu', 'sans-serif');
  textSize(30);
  heading = createElement('h2', ['World Capital Quiz']);
  heading.position(100, 100);
  questionInput = createInput('');
  questionInput.size(250, 24);
  questionInput.position(100, 220);
  submitAnswerButton = createButton('Submit Answer');
  submitAnswerButton.size(250, 24);
  submitAnswerButton.position(100, 260);
  submitAnswerButton.mousePressed(checkQuestion);
}

function draw() {
  background('#dee4cc');
  fill('purple');
  textSize(26);
  text(message, 95, 200); 
  fill(responseColor); 
  text(response, 95, 350);
  // text('Score:' + currentQuestion.answer + ' out of ' + statemtents.length);
}