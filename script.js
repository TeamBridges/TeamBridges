// Main initialization
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    initializePage(currentPage);
});

// Page router
function initializePage(page) {
    switch(page) {
        case 'index':
            initializeHome();
            break;
        case 'cardflip':
            initializeCardFlip();
            break;
        case 'crosswords':
            initializeCrosswords();
            break;
        case 'madlibs':
            initializeMadLibs();
            break;
        case 'dragdrop':
            initializeDragDrop();
            break;
    }
    initializeNavigation();
}

// Navigation
function initializeNavigation() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    document.querySelectorAll('.nav-bar a').forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });
}

// Card Flip Page
function initializeCardFlip() {
    const cards = document.querySelectorAll('.flip-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });
}

// Crosswords Page
function initializeCrosswords() {
    const frames = document.querySelectorAll('.crossword-frame');
    const buttons = document.querySelectorAll('.puzzle-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const puzzleType = this.getAttribute('data-puzzle');
            showPuzzle(puzzleType);
        });
    });
}

function showPuzzle(type) {
    document.querySelectorAll('.crossword-frame').forEach(frame => {
        frame.style.display = 'none';
    });
    document.getElementById(type).style.display = 'block';
    
    document.querySelectorAll('.puzzle-button').forEach(button => {
        button.classList.remove('active');
        if(button.getAttribute('data-puzzle') === type) {
            button.classList.add('active');
        }
    });
}

// Mad Libs Page
function initializeMadLibs() {
    setupExampleCards();
    setupStorySelection();
    setupInputValidation();
}

function setupExampleCards() {
    document.querySelectorAll('.example-card').forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });
}

function setupStorySelection() {
    document.querySelectorAll('.story-choice').forEach(choice => {
        choice.addEventListener('click', function() {
            const storyId = this.getAttribute('data-story');
            selectStory(storyId);
        });
    });
}

function setupInputValidation() {
    document.querySelectorAll('.word-input').forEach(input => {
        input.addEventListener('input', function() {
            validateInput(this);
        });
    });
}

function validateInput(input) {
    const value = input.value.trim();
    const isValid = /^[A-Za-z\s]+$/.test(value);
    input.classList.toggle('invalid', !isValid);
}

// Drag & Drop Page
function initializeDragDrop() {
    showGame('game1');
    setupGameButtons();
}

function showGame(gameId) {
    document.querySelectorAll('.game').forEach(game => {
        game.style.display = 'none';
    });
    document.getElementById(gameId).style.display = 'block';
    
    document.querySelectorAll('.game-choice').forEach(button => {
        button.classList.remove('active');
        if(button.getAttribute('data-game') === gameId) {
            button.classList.add('active');
        }
    });
}

function setupGameButtons() {
    document.querySelectorAll('.game-choice').forEach(button => {
        button.addEventListener('click', function() {
            const gameId = this.getAttribute('data-game');
            showGame(gameId);
        });
    });
}

// Home Page
function initializeHome() {
    setupGameCards();
}

function setupGameCards() {
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', function() {
            const gameUrl = this.getAttribute('data-url');
            if (gameUrl) {
                window.location.href = gameUrl;
            }
        });
    });
}

// Error Handling
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error('Error: ', msg, '\nURL: ', url, '\nLine: ', lineNo, '\nColumn: ', columnNo, '\nError object: ', error);
    return false;
};
