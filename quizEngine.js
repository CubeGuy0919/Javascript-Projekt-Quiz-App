// VARIABLES
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let startTime;

// START LOGIC
window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    // Set theme based on category
    const category = params.get('category');
    // Select questions and reset stats
    if (category && quizData[category]) {
        document.getElementById('category-title').innerText = category;
        currentQuestions = quizData[category];
        startTime = Date.now();
        showQuestion();
    }
};

// GAMEPLAY LOGIC
function showQuestion() {
    const actualQ = currentQuestions[currentIndex];
    document.getElementById('question-text').innerText = actualQ.q;
    const btnContainer = document.getElementById('answer-buttons');
    btnContainer.innerHTML = '';

    // Update Progress
    const progress = (currentIndex / currentQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = progress + "%";

    actualQ.a.forEach(choice => {
        const btn = document.createElement('button');
        btn.innerText = choice;
        btn.className = 'btn';
        btn.onclick = () => checkAnswer(btn, choice, actualQ.correct);
        btnContainer.appendChild(btn);
    });
}

function checkAnswer(btn, choice, correct) {
    if (choice === correct) {
        score += 100;
        btn.classList.add('correct-flash');
    } else {
        btn.classList.add('wrong-flash');
    }

    setTimeout(() => {
        currentIndex++;
        if (currentIndex < currentQuestions.length) showQuestion();
        else endQuiz();
    }, 1000);
}

function endQuiz() {
    const time = ((Date.now() - startTime) / 1000).toFixed(1);
    document.getElementById('game-area').classList.add('hidden');
    document.getElementById('results-area').classList.remove('hidden');
    document.getElementById('final-score').innerText = `${score} pts (${time}s)`;
}

// startQuiz('Marvel');