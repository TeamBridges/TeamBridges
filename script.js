
// Initialize when document loads
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    console.log('Current page:', currentPage);
    initializePage(currentPage);
});

// Page initialization router
function initializePage(page) {
    switch(page) {
        case 'flashcards':
            initializeFlashCards();
            break;
        case 'dragdrop':
            initializeDragDrop();
            break;
        case 'crosswords':
            initializeCrossword();
            break;
        case 'madlibs':
            initializeMadLibs();
            break;
        case 'grouppractice':
            initializeGroupPractice();
            break;
        default:
            initializeHome();
    }
}


// Mad Libs Stories Data
const stories = {
    1: {
        title: "The Bicycle Adventure",
        description: "A thrilling tale about a bicycle ride!",
        inputs: [
            { label: "Enter a body part", placeholder: "e.g., Wikèhèn (head)", type: "bodypart" },
            { label: "Enter another body part", placeholder: "e.g., Wikèk (leg)", type: "bodypart2" },
            { label: "Enter a number", placeholder: "e.g., Nisha (two)", type: "number" },
            { label: "Enter a color", placeholder: "e.g., Mòtànk (red)", type: "color" },
            { label: "Enter an emotion", placeholder: "e.g., Nulitùn (happy)", type: "emotion" }
        ],
        template: "I was riding my bicycle when I hit my {bodypart} on a tree branch. I fell and hurt my {bodypart2}. It took {number} days to heal. My bruise turned {color}. Now I feel {emotion} when I ride my bike."
    },
    2: {
        title: "Dancing with Friends",
        description: "A fun story about dancing and friendship!",
        inputs: [
            { label: "Enter a number", placeholder: "e.g., Nash (three)", type: "number" },
            { label: "Enter a friend's name", type: "name" },
            { label: "Enter a body part", placeholder: "e.g., Wsita (feet)", type: "bodypart" },
            { label: "Enter a color", placeholder: "e.g., Wëski (yellow)", type: "color" }
        ],
        template: "Last {number} days ago, I went dancing with {name}. They stepped on my {bodypart} and it turned {color}! Maybe we need more dance practice."
    },
    3: {
        title: "A Day at School",
        description: "Learning and playing with friends!",
        inputs: [
            { label: "Enter a color", placeholder: "e.g., Oxkàshe (green)", type: "color" },
            { label: "Enter a body part", placeholder: "e.g., Wikuwe (eyes)", type: "bodypart" },
            { label: "Enter a number", placeholder: "e.g., Palenaxk (five)", type: "number" },
            { label: "Enter an emotion", placeholder: "e.g., Wichin (sad)", type: "emotion" }
        ],
        template: "I wore my {color} shirt to school today. During gym class, I hurt my {bodypart}. The teacher made me do {number} exercises. I felt {emotion} after that."
    },
    4: {
        title: "The Weather Today",
        description: "An adventure in different weather!",
        inputs: [
            { label: "Enter a color", placeholder: "e.g., Sàpe (black)", type: "color" },
            { label: "Enter a body part", placeholder: "e.g., Wikuwàkane (nose)", type: "bodypart" },
            { label: "Enter a number", placeholder: "e.g., Lënuwe (one)", type: "number" },
            { label: "Enter an emotion", placeholder: "e.g., Wètëlaohake (excited)", type: "emotion" }
        ],
        template: "The sky was {color} today. {number} raindrops fell on my {bodypart}. The weather made me feel {emotion}!"
    },
    5: {
        title: "Playing Games",
        description: "Fun and games with Lenape words!",
        inputs: [
            { label: "Enter a body part", placeholder: "e.g., Naxka (hands)", type: "bodypart" },
            { label: "Enter a color", placeholder: "e.g., Wapá (white)", type: "color" },
            { label: "Enter a number", placeholder: "e.g., Newa (four)", type: "number" },
            { label: "Enter an emotion", placeholder: "e.g., Wsìkwàk (angry)", type: "emotion" }
        ],
        template: "I used my {bodypart} to catch the ball. Our team wore {color} shirts. We scored {number} points! I felt {emotion} when we won!"
    },
    6: {
        title: "Getting Ready",
        description: "Morning routine adventure!",
        inputs: [
            { label: "Enter a body part", placeholder: "e.g., Milaxk (hair)", type: "bodypart" },
            { label: "Enter a color", placeholder: "e.g., Mòtànk (red)", type: "color" },
            { label: "Enter a number", placeholder: "e.g., Nash (three)", type: "number" },
            { label: "Enter an emotion", placeholder: "e.g., Nulitùn (happy)", type: "emotion" }
        ],
        template: "This morning, I brushed my {bodypart}. I put on my favorite {color} shirt. It took me {number} minutes to get ready. I felt {emotion} about how I looked!"
    }
};
// Lenape Word Examples Data
const wordExamples = {
    bodyParts: [
        { lenape: "Wikèhèn", english: "Head", pronunciation: "wee-keh-hen" },
        { lenape: "Wikèhs", english: "Mouth", pronunciation: "wee-kehs" },
        { lenape: "Wikuwàkane", english: "Nose", pronunciation: "wee-koo-wah-kah-neh" },
        { lenape: "Wikuwe", english: "Eyes", pronunciation: "wee-koo-weh" },
        { lenape: "Wikèk", english: "Leg", pronunciation: "wee-kek" },
        { lenape: "Naxka", english: "Hands", pronunciation: "nax-ka" },
        { lenape: "Wsita", english: "Feet", pronunciation: "w-see-ta" },
        { lenape: "Milaxk", english: "Hair", pronunciation: "mee-laxk" },
        { lenape: "Hwitaoka", english: "Ears", pronunciation: "hwee-tao-ka" },
        { lenape: "Mutaya", english: "Stomach", pronunciation: "moo-tay-a" },
        { lenape: "Welencha", english: "Fingers", pronunciation: "wel-en-cha" },
        { lenape: "Kwetsita", english: "Toes", pronunciation: "kwet-see-ta" },
        { lenape: "Tuhwepia", english: "Body", pronunciation: "tuh-wep-ia" }
    ],
    colors: [
        { lenape: "Sàpe", english: "Black", pronunciation: "sah-peh" },
        { lenape: "Wapá", english: "White", pronunciation: "wah-pah" },
        { lenape: "Mòtànk", english: "Red", pronunciation: "moh-tank" },
        { lenape: "Wëski", english: "Yellow", pronunciation: "wes-kee" },
        { lenape: "Oxkàshe", english: "Green", pronunciation: "ox-kah-sheh" }
    ],
    numbers: [
        { lenape: "Lënuwe", english: "One", pronunciation: "leh-noo-weh" },
        { lenape: "Nisha", english: "Two", pronunciation: "nee-shah" },
        { lenape: "Nash", english: "Three", pronunciation: "nahsh" },
        { lenape: "Newa", english: "Four", pronunciation: "neh-wah" },
        { lenape: "Palenaxk", english: "Five", pronunciation: "pah-leh-naxk" }
    ],
    emotions: [
        { lenape: "Nulitùn", english: "Happy", pronunciation: "noo-lee-tun" },
        { lenape: "Wichin", english: "Sad", pronunciation: "wee-chin" },
        { lenape: "Wètëlaohake", english: "Excited", pronunciation: "wet-el-ao-ha-ke" },
        { lenape: "Wsìkwàk", english: "Angry", pronunciation: "w-sik-wak" }
    ]
};

// Word Examples Display Functions
function displayWordExamples() {
    const exampleSection = document.getElementById('example-section');
    if (!exampleSection) return;

    Object.entries(wordExamples).forEach(([category, words]) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'word-category';
        
        const categoryTitle = category.replace(/([A-Z])/g, ' $1').trim();
        categoryDiv.innerHTML = `
            <h3>${categoryTitle}</h3>
            <div class="word-grid">
                ${words.map(word => `
                    <div class="word-card">
                        <div class="word-card-inner">
                            <div class="lenape">${word.lenape}</div>
                            <div class="english">${word.english}</div>
                            <div class="pronunciation">${word.pronunciation}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        exampleSection.appendChild(categoryDiv);
    });
}
// Mad Libs Core Functions
function initializeMadLibs() {
    console.log('Initializing Mad Libs page');
    setupStorySelection();
    setupWordExamples();
    // Hide the input section initially
    document.querySelector('.story-workspace').style.display = 'none';
}

function setupStorySelection() {
    const storyButtons = document.querySelectorAll('.story-choice');
    storyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const storyId = this.getAttribute('data-story');
            loadStory(storyId);
            // Show the workspace when a story is selected
            document.querySelector('.story-workspace').style.display = 'block';
        });
    });
}

function loadStory(storyId) {
    const story = stories[storyId];
    if (!story) {
        console.error('Story not found:', storyId);
        return;
    }

    const inputsContainer = document.getElementById('word-inputs');
    inputsContainer.innerHTML = '';

    // Create input fields based on story requirements
    story.inputs.forEach((input, index) => {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';
        inputGroup.innerHTML = `
            <label for="input-${index}">${input.label}</label>
            <input type="text" 
                   id="input-${index}" 
                   placeholder="${input.placeholder || ''}"
                   data-type="${input.type}">
        `;
        inputsContainer.appendChild(inputGroup);
    });

    // Show generate button
    const generateButton = document.querySelector('.generate-button');
    generateButton.style.display = 'block';
}

function generateStory(storyId) {
    const story = stories[storyId];
    const inputs = {};
    let isValid = true;

    // Collect and validate inputs
    story.inputs.forEach((input, index) => {
        const value = document.getElementById(`input-${index}`).value.trim();
        if (!value) {
            isValid = false;
            document.getElementById(`input-${index}`).classList.add('error');
        } else {
            inputs[input.type] = value;
        }
    });

    if (!isValid) {
        alert('Please fill in all fields!');
        return;
    }

    // Generate the story
    let generatedStory = story.template;
    Object.entries(inputs).forEach(([key, value]) => {
        const regex = new RegExp(`{${key}}`, 'g');
        generatedStory = generatedStory.replace(regex, value);
    });

    // Display the generated story
    const outputDiv = document.getElementById('story-output');
    outputDiv.textContent = generatedStory;
    outputDiv.classList.remove('hidden');

    // Hide input section and show reset button
    document.querySelector('.input-section').style.display = 'none';
    document.querySelector('.reset-button').style.display = 'block';
}

function resetStory() {
    // Clear inputs and hide story output
    document.querySelectorAll('.input-group input').forEach(input => {
        input.value = '';
        input.classList.remove('error');
    });
    
    // Hide story output and reset button
    document.getElementById('story-output').classList.add('hidden');
    document.querySelector('.reset-button').style.display = 'none';
    
    // Show input section
    document.querySelector('.input-section').style.display = 'block';
}
// Event Handlers and Page Initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Mad Libs page
    if (document.querySelector('.madlibs-container')) {
        initializeMadLibs();
    }
});

// Story Selection and Display Functions
function loadStory(storyId) {
    const story = stories[storyId];
    if (!story) {
        console.error('Story not found:', storyId);
        return;
    }

    // Update story workspace
    const workspace = document.querySelector('.story-workspace');
    workspace.innerHTML = `
        <div class="input-section">
            <h3>${story.title}</h3>
            <p>${story.description}</p>
            <div id="word-inputs" class="word-inputs"></div>
            <button onclick="generateStory('${storyId}')" class="generate-button">Generate Story!</button>
        </div>
        <div id="story-output" class="story-output hidden">
            <h3>Your Story</h3>
            <div id="story-text"></div>
            <button onclick="resetStory()" class="reset-button">Create Another Story</button>
        </div>
    `;

    // Generate input fields
    const inputsContainer = document.getElementById('word-inputs');
    story.inputs.forEach((input, index) => {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';
        inputGroup.innerHTML = `
            <label for="input-${index}">${input.label}</label>
            <input 
                type="text" 
                id="input-${index}" 
                placeholder="${input.placeholder || ''}"
                data-type="${input.type}"
                required
            >
        `;
        inputsContainer.appendChild(inputGroup);
    });

    // Update active story selection
    document.querySelectorAll('.story-choice').forEach(choice => {
        choice.classList.remove('active');
        if (choice.getAttribute('data-story-id') === storyId) {
            choice.classList.add('active');
        }
    });
}

// Error Handling Functions
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    const workspace = document.querySelector('.story-workspace');
    workspace.insertBefore(errorDiv, workspace.firstChild);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// Input Validation
function validateInputs(inputs) {
    let isValid = true;
    let errorMessages = [];

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
            errorMessages.push(`Please fill in the ${input.getAttribute('data-type')} field`);
        } else {
            input.classList.remove('error');
        }
    });

    if (!isValid) {
        showError(errorMessages.join('\n'));
    }

    return isValid;
}

// Add event listeners for input fields
function setupInputListeners() {
    document.querySelectorAll('.input-group input').forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('error');
        });
    });
}

// index.js
function initializeHome() {
    console.log('Initializing home page');
    setupGameCards();
}

function setupGameCards() {
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('click', function() {
            const gamePage = this.getAttribute('data-game');
            window.location.href = `${gamePage}.html`;
        });
    });
}

// crossword.js
function initializeCrossword() {
    console.log('Initializing crossword page');
    const crosswordData = {
        grid: [
            ['W', 'I', 'K', 'E', 'H', 'E', 'N'],
            ['I', '', '', '', '', '', ''],
            ['K', '', '', '', '', '', ''],
            ['E', '', '', '', '', '', ''],
            ['H', '', '', '', '', '', ''],
            ['S', '', '', '', '', '', '']
        ],
        clues: {
            across: [
                { number: 1, clue: "Lenape word for 'head'", answer: "WIKEHEN" }
            ],
            down: [
                { number: 1, clue: "Lenape word for 'mouth'", answer: "WIKEHS" }
            ]
        }
    };
    
    setupCrosswordGrid(crosswordData);
}

function setupCrosswordGrid(data) {
    const gridContainer = document.getElementById('crossword-grid');
    data.grid.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const cellElement = document.createElement('div');
            cellElement.className = 'crossword-cell';
            if (cell !== '') {
                cellElement.innerHTML = `
                    <input type="text" maxlength="1" class="cell-input" 
                           data-row="${rowIndex}" data-col="${colIndex}">
                `;
            }
            gridContainer.appendChild(cellElement);
        });
    });
}

// cardflip.js
function initializeCardFlip() {
    console.log('Initializing card flip game');
    const cardData = [
        { lenape: "Wikèhèn", english: "Head" },
        { lenape: "Wikèhs", english: "Mouth" },
        { lenape: "Wikuwàkane", english: "Nose" },
        { lenape: "Wikuwe", english: "Eyes" }
    ];
    
    setupCardGame(cardData);
}

function setupCardGame(cards) {
    const gameContainer = document.getElementById('card-game');
    const shuffledCards = [...cards, ...cards].sort(() => Math.random() - 0.5);
    
    shuffledCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'memory-card';
        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-front"></div>
                <div class="card-back">${card.lenape}</div>
            </div>
        `;
        gameContainer.appendChild(cardElement);
    });
}

// Drag & Drop Page JavaScript
function initializeDragDrop() {
    console.log('Initializing Drag & Drop page');
    
    // Hide all games initially
    document.querySelectorAll('.scratch-game').forEach(game => {
        game.style.display = 'none';
    });

    // Setup game selection buttons
    setupGameButtons();
}

function setupGameButtons() {
    const gameButtons = document.querySelectorAll('.game-button');
    gameButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            gameButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all games
            document.querySelectorAll('.scratch-game').forEach(game => {
                game.style.display = 'none';
            });
            
            // Show selected game
            const gameId = this.getAttribute('data-game');
            const selectedGame = document.getElementById(gameId);
            if (selectedGame) {
                selectedGame.style.display = 'block';
            }
        });
    });
}
// grouppractice.js
function initializeGroupPractice() {
    console.log('Initializing group practice');
    const activities = [
        {
            title: "Body Parts Practice",
            instructions: "Follow the leader and practice these movements:",
            prompts: [
                "Touch your wikèhèn (head)",
                "Point to your wikèhs (mouth)",
                "Cover your wikuwe (eyes)"
            ]
        }
    ];
    
    setupGroupActivity(activities[0]);
}

function setupGroupActivity(activity) {
    const activityContainer = document.getElementById('activity-container');
    activityContainer.innerHTML = `
        <h2>${activity.title}</h2>
        <p>${activity.instructions}</p>
        <div id="prompt-display"></div>
        <div class="controls">
            <button onclick="previousPrompt()">Previous</button>
            <button onclick="nextPrompt()">Next</button>
        </div>
    `;
}
