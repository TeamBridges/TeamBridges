// dragdrop.js

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
        document.querySelectorAll('.game-choice').forEach(button => {
            button.classList.remove('active');
        });
        
        // Update current game
        currentGame = gameId;
        
        // Find and activate the clicked button
        const clickedButton = document.querySelector(`[onclick="showGame('${gameId}')"]`);
        if (clickedButton) {
            clickedButton.classList.add('active');
        }
    }

    // Make showGame function globally available
    window.showGame = showGame;

    // Show initial game
    showGame('game1');
});
