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
    displayLeaderboard();
};

// GAMEPLAY LOGIC
function showQuestion() {
    const actualQ = currentQuestions[currentIndex];
    document.getElementById('question-text').innerText = actualQ.q;
    const btnContainer = document.getElementById('answer-buttons');
    btnContainer.innerHTML = '';

    // Update Progress Bar
    const progress = (currentIndex / currentQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = progress + "%";

    // Create buttons
    actualQ.a.forEach(choice => {
        const btn = document.createElement('button');
        btn.innerText = choice;
        btn.className = 'answerButton';
        btn.onclick = () => checkAnswer(btn, choice, actualQ.correct);
        btnContainer.appendChild(btn);
    });

    updateStatus(currentIndex, currentQuestions.length);
    
    if (currentIndex === 0) startTimer();
}

function checkAnswer(btn, choice, correct) {
    const buttons = document.querySelectorAll('.answerButton-grid .answerButton');
    buttons.forEach(b => b.style.pointerEvents = 'none');

    if (choice === correct) {
        score += 1; 
        btn.classList.add('correct-flash');
        updateLiveScore(score); 
    } else {
        btn.classList.add('wrong-flash');
    }

    setTimeout(() => {
        currentIndex++;
        if (currentIndex < currentQuestions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timerInterval);
    const timeTaken = ((Date.now() - startTime) / 1000).toFixed(1);
    
    document.getElementById('game-area').classList.add('hidden');
    document.getElementById('results-area').classList.remove('hidden');
    document.getElementById('final-score').innerText = `${score} pts (${timeTaken}s)`;

    document.getElementById('save-btn').onclick = () => {
        const playerName = document.getElementById('player-name').value.trim() || "Anonymous";
        saveScore(score, playerName); 
        
        document.getElementById('name-input-container').style.display = 'none';
    };
}


/* TIMER SYSTEM */
let timeLeft = 60; 
let timerInterval;

function startTimer() {
    clearInterval(timerInterval); // Reset any existing timer
    timeLeft = 60; 
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz(); 
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timer-text').innerText = display;
    
    // Turn text red when under 10 seconds
    if (timeLeft <= 10) {
        document.getElementById('timer-text').style.color = "#ff4d4d";
    } else {
        document.getElementById('timer-text').style.color = "#ff4d8d";
    }
}

// UPDATE : question-counter
function updateStatus(currentIndex, totalQuestions) {
    const counter = document.getElementById('question-counter');
    counter.innerText = `${currentIndex + 1} / ${totalQuestions}`;
}

// UPDATE : live-score
function saveScore(finalScore, name) {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category') || "General";
    const timeTaken = ((Date.now() - startTime) / 1000).toFixed(1);

    let allLeaderboards = JSON.parse(localStorage.getItem('galaxyLeaderboards')) || {};
    if (!allLeaderboards[category]) allLeaderboards[category] = [];

    const newEntry = {
        name: name, // SAVE THE NAME
        score: finalScore,
        time: timeTaken,
        date: new Date().toLocaleDateString()
    };

    allLeaderboards[category].push(newEntry);
    allLeaderboards[category].sort((a, b) => (b.score !== a.score) ? b.score - a.score : a.time - b.time);
    allLeaderboards[category] = allLeaderboards[category].slice(0, 5);

    localStorage.setItem('galaxyLeaderboards', JSON.stringify(allLeaderboards));
    displayLeaderboard();
}

// Update displayLeaderboard to show the name
function displayLeaderboard() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category') || "General";
    const listElement = document.getElementById('score-list');
    const allLeaderboards = JSON.parse(localStorage.getItem('galaxyLeaderboards')) || {};
    const categoryScores = allLeaderboards[category] || [];

    listElement.innerHTML = categoryScores.map((entry, index) => `
        <li>
            <span class="rank">#${index + 1}</span>
            <span class="name">${entry.name}</span> <span class="pts">${entry.score} pts</span>
            <span class="time">${entry.time}s</span>
        </li>
    `).join('');
}

// startQuiz('Marvel');