const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c"
    },
    {
        question: "Who is the CEO of Tesla?",
        a: "Jeff Bezos",
        b: "Elon Musk",
        c: "Bill Gates",
        d: "Warren Buffet",
        correct: "b"
    },
    {
        question: "What is the most used programming language in 2021?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "Which company created the iPhone?",
        a: "Apple",
        b: "Intel",
        c: "Amazon",
        d: "Microsoft",
        correct: "a"
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a"
    },
    {
        question: "What is the capital of Japan?",
        a: "Beijing",
        b: "Seoul",
        c: "Tokyo",
        d: "Bangkok",
        correct: "c"
    },
    {
        question: "What year did the Titanic sink?",
        a: "1912",
        b: "1921",
        c: "1898",
        d: "1905",
        correct: "a"
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Vincent van Gogh",
        b: "Pablo Picasso",
        c: "Leonardo da Vinci",
        d: "Claude Monet",
        correct: "c"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        a: "Gold",
        b: "Iron",
        c: "Diamond",
        d: "Silver",
        correct: "c"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Venus",
        correct: "b"
    }
];

let quizDataCopy = [...quizData];
quizDataCopy = quizDataCopy.sort(() => Math.random() - 0.5); // Shuffle questions

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizDataCopy[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    answersEl.innerHTML = `
        <label>
            <input type="radio" name="answer" value="a"> ${currentQuizData.a}
        </label>
        <label>
            <input type="radio" name="answer" value="b"> ${currentQuizData.b}
        </label>
        <label>
            <input type="radio" name="answer" value="c"> ${currentQuizData.c}
        </label>
        <label>
            <input type="radio" name="answer" value="d"> ${currentQuizData.d}
        </label>
    `;
}

function getSelected() {
    const answerEls = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            selectedAnswer = answerEl.value;
        }
    });

    return selectedAnswer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizDataCopy[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizDataCopy.length) {
            loadQuiz();
        } else {
            questionEl.innerHTML = `<h2>You answered ${score}/${quizDataCopy.length} questions correctly.</h2>`;
            answersEl.innerHTML = `<button onclick="location.reload()">Reload</button>`;
            submitBtn.style.display = "none";
        }
    }
});
