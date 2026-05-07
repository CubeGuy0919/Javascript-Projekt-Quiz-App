const quizData = {
    "Marvel": [
        { q: "What is the name of Thor's hammer?", a: ["Mjolnir", "Stormbreaker", "Gungnir", "Jarnbjorn"], correct: "Mjolnir" },
        { q: "What is Wanda Maximoff's superhero name?", a: ["Scarlet Witch", "Black Widow", "Captain Marvel", "Echo"], correct: "Scarlet Witch" },
        { q: "What is Captain America's shield made of?", a: ["Adamantium", "Vibranium", "Uru", "Titanium"], correct: "Vibranium" },
        { q: "Who is the God of Mischief?", a: ["Thor", "Loki", "Odin", "Hela"], correct: "Loki" },
        { q: "What is the name of the dwarf who forged Stormbreaker?", a: ["Eitri", "Brok", "Sindri", "Glum"], correct: "Eitri" },
        { q: "Which Marvel character has bulletproof skin?", a: ["Luke Cage", "Iron Fist", "The Thing", "Colossus"], correct: "Luke Cage" },
        { q: "What is Peter Parker's middle name?", a: ["Benjamin", "Mary", "John", "Richard"], correct: "Benjamin" },
        { q: "Which stone was inside Vision's forehead?", a: ["Space", "Time", "Mind", "Power"], correct: "Mind" },
        { q: "What is the real name of the Black Panther?", a: ["T'Challa", "M'Baku", "Killmonger", "N'Jadaka"], correct: "T'Challa" },
        { q: "Who was the first Avenger in the MCU timeline?", a: ["Iron Man", "Captain America", "Thor", "Hulk"], correct: "Captain America" },
        { q: "What species is Groot?", a: ["Flora Colossus", "Treeant", "Ent", "Asgardian"], correct: "Flora Colossus" },
        { q: "Who killed Tony Stark's parents?", a: ["Thanos", "Red Skull", "The Winter Soldier", "Obadiah Stane"], correct: "The Winter Soldier" },
        { q: "What is the name of the AI that replaced JARVIS?", a: ["EDITH", "FRIDAY", "KAREN", "ALICE"], correct: "FRIDAY" },
        { q: "In which movie did Spider-Man make his MCU debut?", a: ["Homecoming", "Civil War", "Infinity War", "Endgame"], correct: "Civil War" },
        { q: "What is the name of the planet where the Soul Stone was found?", a: ["Vormir", "Titan", "Knowhere", "Sakaar"], correct: "Vormir" }
    ],
    "DC": [
        { q: "What is the real name of the Joker?", a: ["Jack Napier", "Arthur Fleck", "Unknown", "Joe Chill"], correct: "Unknown" },
        { q: "Which city does The Flash protect?", a: ["Star City", "Gotham", "Central City", "Metropolis"], correct: "Central City" },
        { q: "What drug gives Bane his super strength?", a: ["Titan", "Miraclo", "Venom", "Velocity-9"], correct: "Venom" },
        { q: "Who was the first character in Action Comics #1?", a: ["Batman", "Superman", "Flash", "Wonder Woman"], correct: "Superman" },
        { q: "What is Wonder Woman's weapon called?", a: ["Lasso of Truth", "Spear of Destiny", "Golden Rope", "Trident"], correct: "Lasso of Truth" },
        { q: "What is the name of Batman's butler?", a: ["Alfred Pennyworth", "Jarvis", "Geoffrey", "Hudson"], correct: "Alfred Pennyworth" },
        { q: "Who is the King of Atlantis?", a: ["Namor", "Aquaman", "Ocean Master", "Black Manta"], correct: "Aquaman" },
        { q: "Which green ring-wielder is a pilot?", a: ["Hal Jordan", "John Stewart", "Guy Gardner", "Kyle Rayner"], correct: "Hal Jordan" },
        { q: "What is Superman's birth name?", a: ["Kal-El", "Jor-El", "Zod", "Kara"], correct: "Kal-El" },
        { q: "Who is the sidekick of Batman?", a: ["Robin", "Kid Flash", "Speedy", "Bucky"], correct: "Robin" },
        { q: "Which villain broke Batman's back?", a: ["Joker", "Bane", "Ra's al Ghul", "Penguin"], correct: "Bane" },
        { q: "What is the headquarters of the Justice League?", a: ["Watchtower", "Hall of Justice", "Batcave", "Avengers Tower"], correct: "Watchtower" },
        { q: "Who is the fastest man alive?", a: ["Superman", "The Flash", "Shazam", "Nightwing"], correct: "The Flash" },
        { q: "What is the home planet of Starfire?", a: ["Tamaran", "Krypton", "Mars", "Oa"], correct: "Tamaran" },
        { q: "What is the name of Aquaman's wife?", a: ["Mera", "Iris", "Selina", "Diana"], correct: "Mera" }
    ],
    "Science": [
        { q: "What is the symbol for Gold?", a: ["Gd", "Ag", "Au", "Pb"], correct: "Au" },
        { q: "Which planet has the most moons?", a: ["Jupiter", "Saturn", "Mars", "Neptune"], correct: "Saturn" },
        { q: "What is the hardest natural substance?", a: ["Gold", "Iron", "Diamond", "Quartz"], correct: "Diamond" },
        { q: "How many bones in the adult human body?", a: ["180", "206", "215", "250"], correct: "206" },
        { q: "What is the liquid metal at room temperature?", a: ["Mercury", "Gallium", "Cesium", "Iron"], correct: "Mercury" },
        { q: "What gas do plants absorb?", a: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: "Carbon Dioxide" },
        { q: "Who developed the theory of relativity?", a: ["Newton", "Tesla", "Einstein", "Hawking"], correct: "Einstein" },
        { q: "What is the largest organ in the human body?", a: ["Liver", "Brain", "Skin", "Heart"], correct: "Skin" },
        { q: "What is the speed of light?", a: ["300k km/s", "150k km/s", "1m km/s", "500k km/s"], correct: "300k km/s" },
        { q: "What is the boiling point of water (Celsius)?", a: ["90°C", "100°C", "110°C", "120°C"], correct: "100°C" },
        { q: "Which planet is known as the Red Planet?", a: ["Venus", "Mars", "Jupiter", "Saturn"], correct: "Mars" },
        { q: "What is the closest star to Earth?", a: ["Sirius", "Proxima Centauri", "The Sun", "Vega"], correct: "The Sun" },
        { q: "What is the power house of the cell?", a: ["Nucleus", "Ribosome", "Mitochondria", "Vacuole"], correct: "Mitochondria" },
        { q: "How many elements are in the periodic table?", a: ["100", "118", "125", "112"], correct: "118" },
        { q: "What is the study of mushrooms called?", a: ["Biology", "Mycology", "Botany", "Zoology"], correct: "Mycology" }
    ],
    "Geography": [
        { q: "What is the smallest country?", a: ["Monaco", "Malta", "Vatican City", "San Marino"], correct: "Vatican City" },
        { q: "Which country has the most lakes?", a: ["USA", "Russia", "Canada", "Brazil"], correct: "Canada" },
        { q: "What is the largest hot desert?", a: ["Gobi", "Sahara", "Kalahari", "Arabian"], correct: "Sahara" },
        { q: "In which city are the Spanish Steps?", a: ["Madrid", "Barcelona", "Rome", "Lisbon"], correct: "Rome" },
        { q: "Which river is the longest?", a: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: "Nile" },
        { q: "What is the capital of Japan?", a: ["Osaka", "Kyoto", "Tokyo", "Hiroshima"], correct: "Tokyo" },
        { q: "Which continent is the driest?", a: ["Africa", "Australia", "Antarctica", "Asia"], correct: "Antarctica" },
        { q: "Which country has the most people (2026)?", a: ["China", "India", "USA", "Indonesia"], correct: "India" },
        { q: "What is the capital of Australia?", a: ["Sydney", "Melbourne", "Canberra", "Perth"], correct: "Canberra" },
        { q: "Which ocean is the largest?", a: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: "Pacific" },
        { q: "In which country is Mount Kilimanjaro?", a: ["Kenya", "Tanzania", "Ethiopia", "Uganda"], correct: "Tanzania" },
        { q: "What is the capital of Canada?", a: ["Toronto", "Vancouver", "Ottawa", "Montreal"], correct: "Ottawa" },
        { q: "Which country is shaped like a boot?", a: ["Greece", "Italy", "Spain", "Portugal"], correct: "Italy" },
        { q: "What is the tallest mountain?", a: ["K2", "Mount Everest", "Fuji", "Kilimanjaro"], correct: "Mount Everest" },
        { q: "Which sea is the saltiest?", a: ["Red Sea", "Dead Sea", "Black Sea", "Caspian Sea"], correct: "Dead Sea" }
    ],
    "The Year That Was": [
        { q: "Who won the Women's Rugby World Cup 2025?", a: ["New Zealand", "England", "France", "Canada"], correct: "England" },
        { q: "Which band reunited for a global tour in 2025?", a: ["The Beatles", "Oasis", "One Direction", "Led Zeppelin"], correct: "Oasis" },
        { q: "Which city hosted the 2026 Winter Olympics?", a: ["Paris", "Milan-Cortina", "Beijing", "Vancouver"], correct: "Milan-Cortina" },
        { q: "What major film won Best Picture in early 2026?", a: ["Dune 3", "Mickey 17", "Superman", "Avatar 3"], correct: "Mickey 17" },
        { q: "Who won the 2025 Eurovision Contest?", a: ["Sweden", "Austria", "Switzerland", "Croatia"], correct: "Austria" },
        { q: "Which billionaire launched the first private space hotel in 2025?", a: ["Elon Musk", "Jeff Bezos", "Richard Branson", "Yusaku Maezawa"], correct: "Elon Musk" },
        { q: "Which country joined the EU in late 2025?", a: ["Ukraine", "Turkey", "Norway", "Iceland"], correct: "Ukraine" },
        { q: "What was the most downloaded app of 2025?", a: ["TikTok", "Instagram", "Threads", "ChatGPT"], correct: "ChatGPT" },
        { q: "Who won the 2025 Ballon d'Or?", a: ["Mbappe", "Bellingham", "Vinicius Jr", "Haaland"], correct: "Vinicius Jr" },
        { q: "Which tech company reached a $4 trillion valuation in 2025?", a: ["Apple", "Nvidia", "Microsoft", "Google"], correct: "Nvidia" },
        { q: "What is the official name of the 2026 World Cup?", a: ["FIFA 26", "United 2026", "America Cup", "Global 26"], correct: "United 2026" },
        { q: "Which singer had the highest grossing tour of 2025?", a: ["Taylor Swift", "Beyoncé", "Billie Eilish", "Harry Styles"], correct: "Taylor Swift" },
        { q: "What viral dance trend dominated early 2026?", a: ["The Glitch", "Sway", "Robot-Pop", "Moon-Walk"], correct: "The Glitch" },
        { q: "Which video game won Game of the Year in 2025?", a: ["GTA VI", "Death Stranding 2", "Metroid Prime 4", "Fable"], correct: "GTA VI" },
        { q: "Who became the new leader of the Catholic Church in 2025?", a: ["Pope Francis II", "Pope Leo XIV", "Pope John III", "Pope Peter"], correct: "Pope Leo XIV" }
    ],
    "Guinness Records": [
        { q: "Most followed person on Instagram (2026)?", a: ["Selena Gomez", "Messi", "Ronaldo", "The Rock"], correct: "Cristiano Ronaldo" },
        { q: "World's fastest land animal?", a: ["Cheetah", "Pronghorn", "Lion", "Greyhound"], correct: "Cheetah" },
        { q: "Longest breath held underwater?", a: ["15m", "18m", "24m", "30m"], correct: "24m" },
        { q: "Tallest living man?", a: ["Wadlow", "Sultan Kösen", "Yao Ming", "Shaq"], correct: "Sultan Kösen" },
        { q: "Loudest animal on Earth?", a: ["Lion", "Blue Whale", "Sperm Whale", "Monkey"], correct: "Sperm Whale" },
        { q: "Fastest bird?", a: ["Eagle", "Peregrine Falcon", "Ostrich", "Swift"], correct: "Peregrine Falcon" },
        { q: "Most Olympic Gold medals?", a: ["China", "USA", "Russia", "Germany"], correct: "USA" },
        { q: "Longest fingernails ever (Female)?", a: ["Lee Redmond", "Ayanna Williams", "Diana Armstrong", "Chris Walton"], correct: "Diana Armstrong" },
        { q: "Smallest dog breed?", a: ["Pug", "Chihuahua", "Pomeranian", "Yorkie"], correct: "Chihuahua" },
        { q: "Oldest person to ever live?", a: ["Jeanne Calment", "Kane Tanaka", "Jiroemon Kimura", "Sarah Knauss"], correct: "Jeanne Calment" },
        { q: "Most subscribed YouTuber (2026)?", a: ["PewDiePie", "MrBeast", "T-Series", "Cocomelon"], correct: "MrBeast" },
        { q: "Country with most islands?", a: ["Philippines", "Indonesia", "Sweden", "Norway"], correct: "Sweden" },
        { q: "Highest grossing movie?", a: ["Avatar", "Endgame", "Titanic", "Star Wars"], correct: "Avatar" },
        { q: "Longest running TV show?", a: ["Simpsons", "Law & Order", "Doctor Who", "The Price is Right"], correct: "Simpsons" },
        { q: "Most poisonous animal?", a: ["Box Jellyfish", "King Cobra", "Golden Poison Frog", "Stonefish"], correct: "Box Jellyfish" }
    ]
};

// VARIABLES
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let startTime;

const questionElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const progressBar = document.getElementById('progress-bar');

// START LOGIC
function startQuiz(category) {
    // Set theme based on category
    setTheme(category);
    
    // Select questions and reset stats
    currentQuestions = quizData[category];
    currentQuestionIndex = 0;
    score = 0;
    startTime = Date.now();
    
    // UI Transitions
    document.getElementById('results-area').classList.add('hidden');
    document.getElementById('game-area').classList.remove('hidden');
    
    showQuestion(currentQuestions[currentQuestionIndex]);
}

function setTheme(category) {
    if(category === 'Marvel') {
        document.body.style.background = "linear-gradient(135deg, #800000, #000000)";
    } else if (category === 'Science' || category === 'Nature') {
        document.body.style.background = "linear-gradient(135deg, #134e5e, #71b280)";
    } else {
        document.body.style.background = "#1a1a2e"; // Default
    }
}

// GAMEPLAY LOGIC
function showQuestion(question) {
    // Update Progress Bar
    const progressPercent = (currentQuestionIndex / currentQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    questionElement.innerText = question.q;
    answerButtonsElement.innerHTML = ''; 
    
    question.a.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.onclick = () => selectAnswer(button, answer, question.correct);
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(button, selected, correct) {
    // Disable all buttons 
    const buttons = answerButtonsElement.querySelectorAll('.btn');
    buttons.forEach(btn => btn.disabled = true);

    if (selected === correct) {
        score += 100;
        button.classList.add('correct-flash');
    } else {
        button.classList.add('wrong-flash');
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            showQuestion(currentQuestions[currentQuestionIndex]);
        } else {
            finishQuiz();
        }
    }, 1000);
}

function finishQuiz() {
    progressBar.style.width = "100%";
    const timeTaken = ((Date.now() - startTime) / 1000).toFixed(1);
    document.getElementById('game-area').classList.add('hidden');
    document.getElementById('results-area').classList.remove('hidden');
    document.getElementById('final-score').innerText = `${score} (Time: ${timeTaken}s)`;
}

// startQuiz('Marvel');
