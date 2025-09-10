const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correct: 0
    },
    {
        question: "What is 5 + 3?",
        answers: ["5", "8", "12", "15"],
        correct: 1
    },
    {
        question: "What is the color of the sky?",
        answers: ["Blue", "Green", "Red", "Yellow"],
        correct: 0
    },
    {
        question: "What is the boiling point of water?",
        answers: ["90°C", "100°C", "80°C", "120°C"],
        correct: 1
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-button");
const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("score");
const reviewElement = document.getElementById("review");

function startQuiz() {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = `Question ${currentQuestionIndex + 1}`;
    answerButtons.forEach((button, index) => {
        button.textContent = question.answers[index];
        button.onclick = () => checkAnswer(index);
    });
    updateProgressBar();
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correct) {
        score++;
        reviewElement.innerHTML += `<p>Question ${currentQuestionIndex + 1}: <span style='color: green;'>Correct</span></p>`;
    } else {
        reviewElement.innerHTML += `<p>Question ${currentQuestionIndex + 1}: <span style='color: red;'>Incorrect</span></p>`;
    }
    nextQuestion();
}

function nextQuestion() {
    clearInterval(timer);
    timeLeft = 10;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        startTimer();
    } else {
        endQuiz();
    }
}

function startTimer() {
    timerElement.textContent = timeLeft;
    const circle = document.querySelector(".circle-progress");
    circle.style.strokeDashoffset = 440;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        circle.style.strokeDashoffset = 440 - (440 * (10 - timeLeft)) / 10;
        if (timeLeft <= 0) {
            reviewElement.innerHTML += `<p>Question ${currentQuestionIndex + 1}: <span style='color: red;'>Time Up</span></p>`;
            nextQuestion();
        }
    }, 1000);
}

function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
}

function endQuiz() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    scoreElement.textContent = `Your score: ${score}`;
}

document.getElementById("start-button").onclick = startQuiz;
document.getElementById("restart-button").onclick = () => {
    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
    reviewElement.innerHTML = "";
};
