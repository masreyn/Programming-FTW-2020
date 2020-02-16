let submitAnswerButton;
let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let message;
let rightAnswer = 0;
let wrongAnswer = 0;
let button;

let statements = [
  { question: 'What is the capital of Canada?', answer: 'ottawa' },
  { question: 'What is the capital of England?', answer: 'london' },
  { question: 'What is the capital of Ukraine?', answer: 'kyiv' },
  { question: 'What is the capital of France?', answer: 'paris' },
  { question: 'What is the capital of Greece?', answer: 'athens' },
];

function resetSketch () {
  checkQuestion ();
  // next ();
  // alert("HELP!");
  // reload();
  // redraw();
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
    rightAnswer = rightAnswer + 1;
  } else {
    // this is the wrong condition
    response = 'Oops, that was not correct! Try again';
    responseColor = 'red';
    wrongAnswer = wrongAnswer + 1;
  }
  currentQuestion = next();
  questionInput.value('');
  message = currentQuestion.question;
}
currentQuestion = next();
message = currentQuestion.question;

// alerting user they won the quiz
function next () {
  if (statements.length < 1) {
    window.alert('Great Job!!');
    return;
  }
  if (wrongAnswer > 4) {
    alert('Sorry you lost, you had too many wrong answers');
    return;
  }
  const randomIndex = Math.ceil(Math.random() * statements.length - 1);
  return statements[randomIndex];
}

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
  button = createButton('Reset');
  button.mousePressed(resetSketch);
  button.size(125, 28);
  button.position(100, 375);
}

function draw () {
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
  text('Score: ' + rightAnswer + ' out of 5', 100, 425);
  text('Percent Correct ' + (rightAnswer / 5 * 100) + '%', 100, 450);
  // text('Score:' + rightAnswer + ' out of ' + statements.length, 100, 425); <--NO NO NO this just decreases as click-->>statements.length
  // + currentQuestion.answer + ' out of ' + statemtents.length);
  // text('PERCENT MATH' + (rightAnswer/statements.length -1), 100, 540);// this is doing something
}
