// Assignment 2A

const myQuiz = [
  { question: 'What is the capital of Liechtenstein?', answer: 'Vaduz' },
  { question: 'What is the capital of El Salvador?', answer: 'San Salvador' },
  { question: 'What is the capital of Ukraine?', answer: 'Kyiv' },
  { question: 'What is the capital of Algeria?', answer: 'Algiers' }
]

const randomQuestionIdx = myQuiz[Math.round(Math.random() * myQuiz.length - 1)];
let userAnswer = prompt(randomQuestionIdx.question, '');
alert('You said ' + userAnswer + '.' + ' The correct answer is ' + randomQuestionIdx.answer + '.');
