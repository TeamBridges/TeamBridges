document.addEventListener('DOMContentLoaded', () => {
    // Initialize variables
    let currentGame = 'game1';

    // Function to show selected game
    function showGame(gameId) {
        // Hide all games
        document.querySelectorAll('.game').forEach(game => {
            game.classList.remove('active');
        });
        
        // Show selected game
        document.getElementById(gameId).classList.add('active');
        
        // Update button states
        document.querySelectorAll('.game-button').forEach(button => {
            button.classList.remove('active');
        });
        
        // Find and activate the clicked button
        const clickedButton = document.querySelector(`[onclick="showGame('${gameId}')"]`);
        if (clickedButton) {
            clickedButton.classList.add('active');
        }

        // Update current game
        currentGame = gameId;
    }

    // Make showGame function globally available
    window.showGame = showGame;

    // Handle iframe loading
    document.querySelectorAll('iframe').forEach(frame => {
        frame.addEventListener('load', () => {
            frame.style.opacity = '1';
        });

        // Add error handling
        frame.addEventListener('error', () => {
            handleIframeError(frame.id);
        });
    });

    // Error handling function
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

    // Show initial game
    showGame('game1');
});
