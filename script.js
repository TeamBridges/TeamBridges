// Initialize when document loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing site functionality');
    
    // Determine current page and initialize appropriate functionality
    const currentPage = getCurrentPage();
    initializePage(currentPage);
});

// Helper function to get current page
function getCurrentPage() {
    const path = window.location.pathname;
    return path.split('/').pop().replace('.html', '') || 'index';
}

// Main initialization function
function initializePage(page) {
    console.log(`Initializing ${page} page`);
    
    switch(page) {
        case 'index':
            initializeHome();
            break;
        case 'madlibs':
            initializeMadLibs();
            break;
        case 'dragdrop':
            initializeDragDrop();
            break;
        case 'crossword':
            initializeCrossword();
            break;
        case 'flashcards':
            initializeFlashcards();
            break;
        case 'grouppractice':
            initializeGroupPractice();
            break;
    }
}

// Mad Libs Page Functions
function initializeMadLibs() {
    const storyData = {
        bicycle: {
            title: "The Bicycle Adventure",
            description: "A thrilling tale about a bicycle ride!",
            inputs: [
                { label: "Enter a body part", type: "bodypart" },
                { label: "Enter another body part", type: "bodypart" },
                { label: "Enter a number", type: "number" },
                { label: "Enter a color", type: "color" },
                { label: "Enter an emotion", type: "emotion" }
            ],
            template: "I was riding my bike when I hurt my {0}! Then I fell and scraped my {1}. It took {2} days to heal, and my {1} turned {3}. Now I feel {4} when I ride my bike."
        },
        dancing: {
            title: "Dancing with Friends",
            description: "A fun story about dancing and friendship!",
            inputs: similar_structure
        }
        // Add other stories here
    };

    setupStoryButtons();
    setupWordExamples();
}

// Drag & Drop Page Functions
function initializeDragDrop() {
    const games = document.querySelectorAll('.game');
    
    function showGame(gameId) {
        games.forEach(game => game.style.display = 'none');
        document.getElementById(gameId).style.display = 'block';
        
        // Update active button state
        document.querySelectorAll('.game-choice').forEach(button => {
            button.classList.remove('active');
        });
        document.querySelector(`[onclick="showGame('${gameId}')"]`).classList.add('active');
    }

    // Show first game by default
    showGame('game1');

    // Make showGame available globally
    window.showGame = showGame;
}

// Crossword Page Functions
function initializeCrossword() {
    function showPuzzle(type) {
        const frames = document.querySelectorAll('.crossword-frame');
        const buttons = document.querySelectorAll('.puzzle-button');
        
        frames.forEach(frame => frame.classList.remove('active'));
        buttons.forEach(button => button.classList.remove('active'));
        
        document.getElementById(type).classList.add('active');
        event.target.classList.add('active');
    }

    // Make showPuzzle available globally
    window.showPuzzle = showPuzzle;
}

// Flash Cards Page Functions
function initializeFlashcards() {
    const games = document.querySelectorAll('.game-frame');
    
    function showGame(gameId) {
        games.forEach(frame => frame.classList.remove('active'));
        document.getElementById(gameId).classList.add('active');
        
        document.querySelectorAll('.game-button').forEach(button => {
            button.classList.remove('active');
        });
        event.target.classList.add('active');
    }

    // Make showGame available globally
    window.showGame = showGame;
}

// Group Practice Page Functions
function initializeGroupPractice() {
    const activityContent = {
        howmany: {
            title: "How Many?",
            description: "Practice counting in Lenape",
            prompts: ["Count objects in the room", "Use numbers in sentences"]
        },
        colors: {
            title: "Colors Around Us",
            description: "Learn color words in Lenape",
            prompts: ["Point to colors in the room", "Describe objects using colors"]
        }
        // Add other activities
    };

    function showActivity(activityType) {
        const content = activityContent[activityType];
        const contentSection = document.getElementById('activity-content');
        
        if (content) {
            contentSection.innerHTML = `
                <h2>${content.title}</h2>
                <p class="description">${content.description}</p>
                <div class="prompts-list">
                    ${content.prompts.map(prompt => 
                        `<div class="prompt-item">${prompt}</div>`
                    ).join('')}
                </div>
            `;
            contentSection.classList.remove('hidden');
        }
    }

    // Make showActivity available globally
    window.showActivity = showActivity;
}

// Home Page Functions
function initializeHome() {
    // Add any specific home page initialization if needed
    console.log('Home page initialized');
}

// Make necessary functions available globally
window.initializePage = initializePage;
