// flashcards.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize variables
let currentGame = 'body';

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
    
    // Find and activate the clicked button
    const clickedButton = document.querySelector(`.game-button[onclick*="'${gameId}'"]`);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
    
    // Update current game
    currentGame = gameId;
}

// Make showGame function globally available
window.showGame = showGame;

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Show initial game (body parts)
    showGame('body');
});

    // Make showGame function globally available
    window.showGame = showGame;

    // Show initial game (body parts)
    showGame('body');

    // Add keyboard navigation
    document.addEventListener('keydown', (event) => {
        const games = ['body', 'body2', 'face', 'internal', 'hands'];
        const currentIndex = games.indexOf(currentGame);

        switch(event.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                const nextIndex = (currentIndex + 1) % games.length;
                showGame(games[nextIndex]);
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                const prevIndex = (currentIndex - 1 + games.length) % games.length;
                showGame(games[prevIndex]);
                break;
        }
    });

    // Add touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const games = ['body', 'body2', 'face', 'internal', 'hands'];
        const currentIndex = games.indexOf(currentGame);
        const swipeThreshold = 50;

        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left
            const nextIndex = (currentIndex + 1) % games.length;
            showGame(games[nextIndex]);
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right
            const prevIndex = (currentIndex - 1 + games.length) % games.length;
            showGame(games[prevIndex]);
        }
    }
});
