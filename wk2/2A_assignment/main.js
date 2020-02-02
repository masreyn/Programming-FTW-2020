// // Assignment 2A

const myQuiz  = [
    { question: 'What is the capital of Liechtenstein?', answer: 'Vaduz' },
    { question: 'What is the capital of El Salvador?', answer: 'San Salvador' },
    { question: 'What is the capital of Ukraine?', answer: 'Kyiv' },
    { question: 'What is the capital of Algeria?', answer: 'Algiers' }
]

const randomQuestionIdx = myQuiz [Math.round(Math.random() * myQuiz.length -1)];
let userAnswer = prompt(randomQuestionIdx.question, "")
alert('You said "' + userAnswer + '".' + ' The correct answer is ' + randomQuestionIdx.answer +'.');


/* Create an array objects that represent a question and answer. 
The object should include a question property ("question" as the key and the actual question as the value) and an answer property ("answer" as the key with the actual answer as the value).
A random question prompt should appear when the page loads. 
The question prompt should include the value of the question. 
The user will respond with their guess.
Do not check the answer yet. 
Just fire an alert combining "You answered " and then the response and then add " The correct answer was " and then display the answer property from the object. 
Use concatenation to string all these strings together. */