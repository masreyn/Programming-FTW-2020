let submitAnswerButton;
let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let message;
let score;
let total;
let percent;
let resetButton;

let statements = [
  { question: 'What is the capital of Canada?', answer: 'ottawa' },
  { question: 'What is the capital of England?', answer: 'london' },
  { question: 'What is the capital of Ukraine?', answer: 'kyiv' },
  { question: 'What is the capital of France?', answer: 'paris' },
  { question: 'What is the capital of Greece?', answer: 'athens' },
];

function next () {
  if (statements.length < 1) {
    window.alert('Great Job!!');
    return;
  }
  const randomIndex = Math.ceil(Math.random() * statements.length - 1);
  return statements[randomIndex];
}
// if (currentQuestion.answer === questionInput.value.toLowerCase()) { ??
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
  questionInput.size(250, 28);
  questionInput.position(100, 240);
  submitAnswerButton = createButton('Submit Answer');
  submitAnswerButton.size(250, 28);
  submitAnswerButton.position(100, 290);
  submitAnswerButton.mousePressed(checkQuestion);
  resetButton = createButton('Play Again');
  resetButton.mousePressed(reset);
  resetButton.size(125, 28);
  resetButton.position(100, 375);
}
function reset () {
  //resetButton.html(checkQuestion());
  //resetButton.html(next());
}
function draw() {
  background('#dee4cc');
  fill('purple');
  textSize(26);
  text(message, 95, 195);
  fill(responseColor);
  text(response, 95, 350);
  textSize(14);
  fill('gray');
  text('(lowercase)', 100, 217);
  textSize(14);
  fill('gray');
  text('Score:', 100, 425);
  // + currentQuestion.answer + ' out of ' + statemtents.length);
}