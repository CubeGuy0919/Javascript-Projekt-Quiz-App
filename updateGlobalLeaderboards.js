document.addEventListener('DOMContentLoaded', () => {
    // --- DEVELOPER SEED LOGIC ---
    if (!localStorage.getItem('galaxyLeaderboards')) {
        const dummyData = {
            "Marvel": [
                { name: "MARVEL JESUS", score: 15, time: "44.4", date: "2026.05.14" },
                { name: "SPOODER-MAN", score: 14, time: "51.2", date: "2026.05.14" },
                { name: "I AM...", score: 14, time: "53.2", date: "2026.05.14" },

            ],
            "DC": [
                { name: "BATMAAAAN", score: 15, time: "46.1", date: "2026.05.14" },
                { name: "ULTRA_MAN", score: 9, time: "51.4", date: "2026.05.14" }
            ],
            "History": [
                { name: "Adolf...", score: 15, time: "66.6", date: "2026.05.14" }
            ]
        };
        localStorage.setItem('galaxyLeaderboards', JSON.stringify(dummyData));
    }

    const container = document.getElementById('global-leaderboard-container');
    const allData = JSON.parse(localStorage.getItem('galaxyLeaderboards')) || {};
    
    if (!container) return;
    container.innerHTML = '';

    const categories = Object.keys(allData);
    
    if (categories.length === 0) {
        container.innerHTML = '<p class="text-center text-muted">The Galaxy is quiet... play a game to wake it up!</p>';
        return;
    }

    categories.forEach(category => {
        const scores = allData[category];
        const col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-4 mb-4'; 
        
        let listHTML = `
            <div class="category-leaderboard-column">
                <h4>${category}</h4>
                <div class="mini-header">
                    <span>Rank/Name</span>
                    <span>Score</span>
                    <span>Time</span>
                </div>
                <ul class="mini-score-list">`;
        
        // Show Top 5 
        scores.slice(0, 5).forEach((entry, index) => {
            // Add a special class for the #1 player
            const crown = index === 0 ? '👑' : `#${index + 1}`;
            
            listHTML += `
                <li class="mini-score-item">
                    <span class="mini-name">
                        <span class="rank-badge">${crown}</span> ${entry.name}
                    </span>
                    <span class="mini-pts">${entry.score}</span>
                    <span class="mini-time">${entry.time}s</span>
                </li>`;
        });

        listHTML += `</ul></div>`;
        col.innerHTML = listHTML;
        container.appendChild(col);
    });
});