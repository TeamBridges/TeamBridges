// index.js

document.addEventListener('DOMContentLoaded', () => {
    // Handle game card hover effects
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        // Add hover effect
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });

        // Handle play button clicks
        const playButton = card.querySelector('.play-button');
        if (playButton) {
            playButton.addEventListener('click', (event) => {
                // Prevent the card's onclick from firing
                event.stopPropagation();
                // Navigate to the corresponding page
                const href = card.getAttribute('onclick').match(/'([^']+)'/)[1];
                window.location.href = href;
            });
        }
    });

    // Optional: Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});

// Optional: Add a function to handle game card clicks
function navigateToGame(url) {
    window.location.href = url;
}
