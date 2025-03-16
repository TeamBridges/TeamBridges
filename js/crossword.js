// Puzzle configuration
const puzzles = {
    singular: {
        id: 'singular',
        title: 'Body Parts (Singular)',
        src: 'https://crosswordlabs.com/embed/lenape-body-parts-singular'
    },
    plural: {
        id: 'plural',
        title: 'Body Parts (Plural)',
        src: 'https://crosswordlabs.com/embed/lenape-body-parts-plural'
    }
};

// Function to show selected puzzle
function showPuzzle(puzzleId) {
    // Hide all puzzles
    document.querySelectorAll('.crossword-frame').forEach(frame => {
        frame.classList.remove('active');
    });
    
    // Show selected puzzle
    document.getElementById(puzzleId).classList.add('active');
    
    // Update button states
    document.querySelectorAll('.puzzle-button').forEach(button => {
        button.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set default puzzle (singular)
    document.getElementById('singular').classList.add('active');
    document.querySelector('.puzzle-button').classList.add('active');

    // Add click event listeners to puzzle buttons
    document.querySelectorAll('.puzzle-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const puzzleId = event.target.getAttribute('data-puzzle');
            showPuzzle(puzzleId);
        });
    });

    // Handle iframe loading
    document.querySelectorAll('.crossword-frame').forEach(frame => {
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
        errorMessage.textContent = 'Sorry, the puzzle could not be loaded. Please try again later.';
        frame.parentNode.insertBefore(errorMessage, frame);
    }
}
