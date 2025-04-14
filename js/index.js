// index.js

document.addEventListener('DOMContentLoaded', () => {
    // Game card data
    const gameCards = [
        {
            title: 'Flash Cards',
            description: 'Practice Lenape vocabulary with interactive flashcards',
            link: 'flashcards.html',
            icon: 'fas fa-clone',
            objectives: [
                'Memory training',
                'Word pairs',
                'Quick learning',
                'Vocabulary practice'
            ]
        },
        {
            title: 'Drag & Drop',
            description: 'Match Lenape words with their meanings',
            link: 'dragdrop.html',
            icon: 'fas fa-arrows-alt',
            objectives: [
                'Interactive learning',
                'Word matching',
                'Visual practice',
                'Word associations'
            ]
        },
        {
            title: 'Crossword',
            description: 'Test your knowledge with Lenape crossword puzzles',
            link: 'crossword.html',
            icon: 'fas fa-th',
            objectives: [
                'Vocabulary practice',
                'Word meanings',
                'Spelling practice',
                'Problem solving'
            ]
        },
        {
            title: 'Mad Libs',
            description: 'Create fun stories using Lenape words',
            link: 'madlibs.html',
            icon: 'fas fa-pencil-alt',
            objectives: [
                'Learn new words',
                'Practice grammar',
                'Create stories',
                'Creative learning'
            ]
        },
        {
            title: 'Group Practice',
            description: 'Learn together with group activities',
            link: 'grouppractice.html',
            icon: 'fas fa-users',
            objectives: [
                'Collaborative learning',
                'Interactive practice',
                'Social engagement',
                'Team activities'
            ]
        },
    
        {
            title: 'Glossary',
            description: 'A Quick & Easy Reference',
            link: 'glossary.html',
            icon: 'fas fa-pencil-alt',
            objectives: [
                'Find the word you need',
                'Check your spelling',
                
            ]
        };

    // Create game cards dynamically
    const gameContainer = document.querySelector('.game-container');
    
    gameCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'game-card';
        cardElement.onclick = () => window.location.href = card.link;

        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div class="game-icon">
                        <i class="${card.icon}"></i>
                    </div>
                    <h2>${card.title}</h2>
                    <p>${card.description}</p>
                </div>
                <div class="card-back">
                    <h3>Learning Objectives</h3>
                    <ul>
                        ${card.objectives.map(objective => `<li>${objective}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;

        gameContainer.appendChild(cardElement);
    });

    // Handle card hover effects
    const cards = document.querySelectorAll('.game-card');
    
    cards.forEach(card => {
        const cardInner = card.querySelector('.card-inner');
        
        card.addEventListener('mouseenter', () => {
            cardInner.style.transform = 'rotateY(180deg)';
        });

        card.addEventListener('mouseleave', () => {
            cardInner.style.transform = 'rotateY(0deg)';
        });
    });

    // Handle navigation
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Optional: Add smooth scrolling for navigation
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
