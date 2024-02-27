const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'Paris'
    },
    {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        answer: '4'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        answer: 'Mars'
    }
];

const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

loadQuestion();

optionsElement.addEventListener('click', (event) => {
    const selectedOption = event.target;
    if (selectedOption.classList.contains('option')) {
        const userAnswer = selectedOption.textContent;
        checkAnswer(userAnswer, selectedOption);
    }
});

submitButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('button');
        optionElement.textContent = option;
        optionElement.classList.add('option');
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer(userAnswer, selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (userAnswer === correctAnswer) {
        selectedOption.classList.add('correct');
        score++;
    } else {
        selectedOption.classList.add('incorrect');
    }
    // Disable further selection after answering
    optionsElement.querySelectorAll('.option').forEach(option => {
        option.disabled = true;
    });
}

function showResult() {
    quizContainer.style.display = 'none';
    resultElement.style.display = 'block';
    resultElement.textContent = `Your score: ${score}/${quizData.length}`;
}
