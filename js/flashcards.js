// Game configuration
const games = {
    body: {
        id: 'body',
        title: 'Body Parts',
        src: 'https://scratch.mit.edu/projects/1088888174/embed'
    },
    face: {
        id: 'face',
        title: 'Face Parts',
        src: 'https://scratch.mit.edu/projects/1121753523/embed'
    },
    internal: {
        id: 'internal',
        title: 'Internal Organs',
        src: 'https://scratch.mit.edu/projects/1125866028/embed'
    },
    hands: {
        id: 'hands',
        title: 'Hands & Feet',
        src: 'https://scratch.mit.edu/projects/1126350288/embed'
    }
};

// Function to show selected game
function showGame(gameId) {
    // Hide all games
    document.querySelectorAll('.game-frame').forEach(frame => {
        frame.classList.remove('active');
    });
    
    // Show selected game
    document.getElementById(gameId).classList.add('active');
    
    // Update button states
    document.querySelectorAll('.game-button').forEach(button => {
        button.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set default game (body parts)
    showGame('body');

    // Add click event listeners to game buttons
    document.querySelectorAll('.game-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const gameId = event.target.getAttribute('data-game');
            showGame(gameId);
        });
    });

    // Handle iframe loading
    document.querySelectorAll('.game-frame').forEach(frame => {
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
