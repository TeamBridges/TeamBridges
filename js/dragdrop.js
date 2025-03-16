// Game configuration
const games = {
    game1: {
        id: 'game1',
        title: 'Lenape Drag & Drop I',
        description: 'Practice body parts and colors!',
        src: 'https://scratch.mit.edu/projects/1121398388/embed'
    },
    game2: {
        id: 'game2',
        title: 'Lenape Drag & Drop II',
        description: 'Practice numbers and emotions!',
        src: 'https://scratch.mit.edu/projects/1122262027/embed'
    }
};

// Function to show selected game
function showGame(gameId) {
    // Hide all games
    document.querySelectorAll('.game').forEach(game => {
        game.style.display = 'none';
    });
    
    // Show selected game
    document.getElementById(gameId).style.display = 'block';
    
    // Update button states
    document.querySelectorAll('.game-choice').forEach(button => {
        button.classList.remove('active');
    });
    event.target.closest('.game-choice').classList.add('active');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set default game (game1)
    document.getElementById('game1').style.display = 'block';
    document.querySelector('.game-choice').classList.add('active');

    // Add click event listeners to game buttons
    document.querySelectorAll('.game-choice').forEach(button => {
        button.addEventListener('click', (event) => {
            const gameId = event.target.closest('.game-choice').getAttribute('data-game');
            showGame(gameId);
        });
    });

    // Handle iframe loading
    document.querySelectorAll('iframe').forEach(frame => {
        frame.addEventListener('load', () => {
            frame.style.opacity = '1';
        });
    });
});

// Error handling for iframes
function handleIframeError(frameId) {
    const frame = document.getElementById(frameId);
    if (frame) {
        frame.style.display = 'none';
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'Sorry, the game could not be loaded. Please try again later.';
        frame.parentNode.insertBefore(errorMessage, frame);
    }
}
