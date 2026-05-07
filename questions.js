const questions = [
    { 
        q: "Who is the God of Mischief?", 
        a: ["Thor", "Loki", "Odin", "Hela"],
        correct: "Loki" 
    },
    { 
        q: "What is Black Panther's home country?", 
        a: ["Wakanda", "Zamunda", "Latveria", "Genosha"], 
        correct: "Wakanda" 
    }
];

function setTheme(category) {
    if(category === 'Marvel') {
        document.body.style.background = "linear-gradient(135deg, #800000, #000000)";
    } else if (category === 'Nature') {
        document.body.style.background = "linear-gradient(135deg, #134e5e, #71b280)";
    }
}


let currentQuestionIndex = 0;
let score = 0;
let startTime = Date.now();

const questionElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');

function startQuiz() {
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.q;
    answerButtonsElement.innerHTML = ''; // Clear old buttons
    
    question.a.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.onclick = () => selectAnswer(answer, question.correct);
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(selected, correct) {
    if (selected === correct) {
        score += 100;
        alert("Correct! 🎉");
    } else {
        alert("Wrong! 💀");
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    const timeTaken = (Date.now() - startTime) / 1000;
    document.getElementById('game-area').classList.add('hidden');
    document.getElementById('results-area').classList.remove('hidden');
    document.getElementById('final-score').innerText = `${score} (Time: ${timeTaken}s)`;
}

startQuiz();

const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
document.getElementById('progress-bar').style.width = progressPercent + "%";