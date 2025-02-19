// script.js - Core Initialization and Navigation
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    console.log('Initializing:', currentPage);
    initializePage(currentPage);
    initializeNavigation();
});

// Page router
function initializePage(page) {
    switch(page) {
        case 'index':
            initializeHome();
            break;
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
    }
}

// Navigation initialization
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Home page initialization
function initializeHome() {
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('click', function() {
            const gamePage = this.getAttribute('data-game');
            if (gamePage) {
                window.location.href = `${gamePage}.html`;
            }
        });
    });
}
// Flash Cards functionality
function initializeFlashCards() {
    console.log('Initializing Flash Cards page');
    setupGameSelection();
    setupCardFlips();
}

// Game selection functionality
function setupGameSelection() {
    const gameButtons = document.querySelectorAll('.game-choice');
    const gameContainers = document.querySelectorAll('.game-container');

    // Hide all games initially
    gameContainers.forEach(container => {
        container.style.display = 'none';
    });

    // Add click event listeners to buttons
    gameButtons.forEach(button => {
        button.addEventListener('click', () => {
            const gameId = button.getAttribute('data-game');
            showGame(gameId);
            updateButtonStates(button);
        });
    });

    // Show first game by default
    showGame('flashcards1');
}

// Show selected game
function showGame(gameId) {
    const gameContainers = document.querySelectorAll('.game-container');
    gameContainers.forEach(container => {
        container.style.display = 'none';
    });
    
    const selectedGame = document.getElementById(gameId);
    if (selectedGame) {
        selectedGame.style.display = 'block';
    }
}

// Update active button states
function updateButtonStates(activeButton) {
    const buttons = document.querySelectorAll('.game-choice');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}

// Setup card flip functionality for any non-embedded cards
function setupCardFlips() {
    const cards = document.querySelectorAll('.flash-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
}

// Handle game completion
function handleGameCompletion(gameId, score) {
    console.log(`Game ${gameId} completed with score: ${score}`);
    // Add any completion handling logic here
}

// Handle game reset
function resetGame(gameId) {
    const game = document.getElementById(gameId);
    if (game) {
        // Reset game state
        game.contentWindow.postMessage({ action: 'reset' }, '*');
    }
}

// Listen for messages from embedded games
window.addEventListener('message', function(event) {
    // Verify the origin of the message for security
    // Handle any messages from the embedded games
    if (event.data.type === 'gameComplete') {
        handleGameCompletion(event.data.gameId, event.data.score);
    }
});
// Drag & Drop functionality
function initializeDragDrop() {
    console.log('Initializing Drag & Drop Games');
    setupGameSelection();
}

function setupGameSelection() {
    const gameButtons = document.querySelectorAll('.game-button');
    const gameContainers = document.querySelectorAll('.game-container');

    // Hide all games initially
    gameContainers.forEach(container => {
        container.style.display = 'none';
    });

    // Add click event listeners to buttons
    gameButtons.forEach(button => {
        button.addEventListener('click', () => {
            const gameId = button.getAttribute('data-game');
            showGame(gameId);
            updateButtonStates(button);
        });
    });

    // Show first game by default
    showGame('dragdrop1');
}

function showGame(gameId) {
    const gameContainers = document.querySelectorAll('.game-container');
    gameContainers.forEach(container => {
        container.style.display = 'none';
    });
    
    const selectedGame = document.getElementById(gameId);
    if (selectedGame) {
        selectedGame.style.display = 'block';
    }
}

function updateButtonStates(activeButton) {
    const buttons = document.querySelectorAll('.game-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}

// Crossword functionality
function initializeCrossword() {
    console.log('Initializing Crossword Games');
    setupCrosswordSelection();
}

function setupCrosswordSelection() {
    const gameButtons = document.querySelectorAll('.crossword-button');
    const gameContainers = document.querySelectorAll('.crossword-container');

    // Hide all games initially
    gameContainers.forEach(container => {
        container.style.display = 'none';
    });

    // Add click event listeners to buttons
    gameButtons.forEach(button => {
        button.addEventListener('click', () => {
            const gameId = button.getAttribute('data-game');
            showCrossword(gameId);
            updateButtonStates(button);
        });
    });

    // Show first crossword by default
    showCrossword('crossword1');
}

function showCrossword(gameId) {
    const gameContainers = document.querySelectorAll('.crossword-container');
    gameContainers.forEach(container => {
        container.style.display = 'none';
    });
    
    const selectedGame = document.getElementById(gameId);
    if (selectedGame) {
        selectedGame.style.display = 'block';
    }
}

function updateButtonStates(activeButton) {
    const buttons = document.querySelectorAll('.crossword-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}
// Mad Libs functionality
function initializeMadLibs() {
    console.log('Initializing Mad Libs');
    setupExampleCards();
    setupStoryButtons();
}

// Story Data
// Story templates with their inputs and templates
const stories = {
    1: {
        title: "The Bicycle Adventure",
        description: "A thrilling tale about a bicycle ride!",
        inputs: [
            { label: "Enter a body part", id: "bodyPart1", type: "text", placeholder: "e.g., Wihle (head)" },
            { label: "Enter another body part", id: "bodyPart2", type: "text", placeholder: "e.g., Wikat (leg)" },
            { label: "Enter a number", id: "number1", type: "text", placeholder: "e.g., Nisha (two)" },
            { label: "Enter a color", id: "color1", type: "text", placeholder: "e.g., Machke (red)" },
            { label: "Enter an emotion", id: "emotion1", type: "text", placeholder: "e.g., Nulhatam (happy)" }
        ],
        template: "One day, I was riding my bicycle when I hit my <span class='user-input'>{bodyPart1}</span> on a tree branch. I fell and hurt my <span class='user-input'>{bodyPart2}</span>. It took <span class='user-input'>{number1}</span> days to heal. My bruise turned <span class='user-input'>{color1}</span>. Now I feel <span class='user-input'>{emotion1}</span> when I ride my bike."
    },
    2: {
        title: "Dancing with Friends",
        description: "A fun story about dancing and friendship!",
        inputs: [
            { label: "Enter a number", id: "number1", type: "text", placeholder: "e.g., Naxa (three)" },
            { label: "Enter a body part", id: "bodyPart1", type: "text", placeholder: "e.g., Wikat (leg)" },
            { label: "Enter another body part", id: "bodyPart2", type: "text", placeholder: "e.g., Wihle (head)" },
            { label: "Enter a color", id: "color1", type: "text", placeholder: "e.g., Wapa (white)" },
            { label: "Enter an emotion", id: "emotion1", type: "text", placeholder: "e.g., Wisachgihhele (excited)" }
        ],
        template: "<span class='user-input'>{number1}</span> friends were dancing when I moved my <span class='user-input'>{bodyPart1}</span> too fast. I hit my <span class='user-input'>{bodyPart2}</span>! My <span class='user-input'>{color1}</span> outfit got wrinkled. I felt <span class='user-input'>{emotion1}</span>."
    },
    3: {
        title: "A Day at School",
        description: "Learning and playing with friends!",
        inputs: [
            { label: "Enter a color", id: "color1", type: "text", placeholder: "e.g., Askaske (green)" },
            { label: "Enter a body part", id: "bodyPart1", type: "text", placeholder: "e.g., Wiske (eyes)" },
            { label: "Enter a number", id: "number1", type: "text", placeholder: "e.g., Palenaxk (five)" },
            { label: "Enter another body part", id: "bodyPart2", type: "text", placeholder: "e.g., Witun (mouth)" },
            { label: "Enter an emotion", id: "emotion1", type: "text", placeholder: "e.g., Wawitam (sad)" }
        ],
        template: "I wore my <span class='user-input'>{color1}</span> shirt to school. My <span class='user-input'>{bodyPart1}</span> were tired after reading <span class='user-input'>{number1}</span> books. I used my <span class='user-input'>{bodyPart2}</span> to tell stories. I felt <span class='user-input'>{emotion1}</span> when school ended."
    },
    4: {
        title: "The Weather Today",
        description: "An adventure in different weather!",
        inputs: [
            { label: "Enter an emotion", id: "emotion1", type: "text", placeholder: "e.g., Kwitey (angry)" },
            { label: "Enter a color", id: "color1", type: "text", placeholder: "e.g., Seke (black)" },
            { label: "Enter a body part", id: "bodyPart1", type: "text", placeholder: "e.g., Wixkwan (nose)" },
            { label: "Enter a number", id: "number1", type: "text", placeholder: "e.g., Kweti (one)" }
        ],
        template: "I felt <span class='user-input'>{emotion1}</span> when I saw the <span class='user-input'>{color1}</span> clouds. The rain hit my <span class='user-input'>{bodyPart1}</span> as I counted <span class='user-input'>{number1}</span> thunder claps."
    },
    5: {
        title: "Playing Games",
        description: "Fun and games with Lenape words!",
        inputs: [
            { label: "Enter a number", id: "number1", type: "text", placeholder: "e.g., Newa (four)" },
            { label: "Enter a body part", id: "bodyPart1", type: "text", placeholder: "e.g., Wikat (leg)" },
            { label: "Enter a color", id: "color1", type: "text", placeholder: "e.g., Wisawe (yellow)" },
            { label: "Enter an emotion", id: "emotion1", type: "text", placeholder: "e.g., Nulhatam (happy)" }
        ],
        template: "We played games for <span class='user-input'>{number1}</span> hours. My <span class='user-input'>{bodyPart1}</span> got tired from jumping. I won the <span class='user-input'>{color1}</span> prize and felt <span class='user-input'>{emotion1}</span>!"
    },
    6: {
        title: "Getting Ready",
        description: "Morning routine adventure!",
        inputs: [
            { label: "Enter a body part", id: "bodyPart1", type: "text", placeholder: "e.g., Wihle (head)" },
            { label: "Enter a color", id: "color1", type: "text", placeholder: "e.g., Machke (red)" },
            { label: "Enter another body part", id: "bodyPart2", type: "text", placeholder: "e.g., Witun (mouth)" },
            { label: "Enter an emotion", id: "emotion1", type: "text", placeholder: "e.g., Wisachgihhele (excited)" }
        ],
        template: "I brushed my <span class='user-input'>{bodyPart1}</span> in the morning. Put on my <span class='user-input'>{color1}</span> clothes. Used my <span class='user-input'>{bodyPart2}</span> to eat breakfast. I felt <span class='user-input'>{emotion1}</span> about the day ahead!"
    }
};

// Example Cards Data
const exampleWords = {
    bodyParts: [
        { lenape: "Wixkwan", english: "nose" },
        { lenape: "Witun", english: "mouth" },
        { lenape: "Wihle", english: "head" },
        { lenape: "Wiske", english: "eyes" },
        { lenape: "Wikat", english: "leg" },
        { lenape: "Naxka", english: "hands" },
        { lenape: "Welencha", english: "fingers" },
        { lenape: "Wsita", english: "feet" },
        { lenape: "Kwetsita", english: "toes" },
        { lenape: "Hwitaoka", english: "ears" },
        { lenape: "Mutaya", english: "stomach" }
    ],
    colors: [
        { lenape: "Seke", english: "black" },
        { lenape: "Ope", english: "white" },
        { lenape: "Machke", english: "red" },
        { lenape: "Wisawe", english: "yellow" },
        { lenape: "Askaske", english: "green" },
        { lenape: "Wape", english: "grey" }
    ],
    numbers: [
        { lenape: "Kweti", english: "one" },
        { lenape: "Nisha", english: "two" },
        { lenape: "Naxa", english: "three" },
        { lenape: "Newa", english: "four" },
        { lenape: "Palenaxk", english: "five" }
    ],
    emotions: [
        { lenape: "Nulhatam", english: "happy" },
        { lenape: "Kwitey", english: "angry" },
        { lenape: "Wawitam", english: "sad" },
        { lenape: "Wisachgihhele", english: "excited" },
        { lenape: "Kwishele", english: "afraid" }
    ]
};



let currentStory = null;

function setupStoryButtons() {
    const storyButtons = document.querySelectorAll('.story-choice');
    storyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const storyId = this.getAttribute('data-story-id');
            selectStory(storyId);
        });
    });
}

function selectStory(storyId) {
    currentStory = stories[storyId];
    if (!currentStory) return;

    // Update active story selection
    document.querySelectorAll('.story-choice').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-story-id="${storyId}"]`).classList.add('active');

    // Clear and update the input container
    const inputContainer = document.getElementById('input-container');
    if (!inputContainer) return;
    inputContainer.innerHTML = '';

    // Create input fields for the selected story
    currentStory.inputs.forEach(input => {
        const inputGroup = createInputGroup(input);
        inputContainer.appendChild(inputGroup);
    });

    // Show generate button and hide story output
    const generateButton = document.getElementById('generate-button');
    if (generateButton) {
        generateButton.classList.remove('hidden');
    }

    const storyOutput = document.getElementById('story-output');
    if (storyOutput) {
        storyOutput.classList.add('hidden');
    }
}

function createInputGroup(input) {
    const div = document.createElement('div');
    div.className = 'input-group';

    const label = document.createElement('label');
    label.textContent = input.label;
    label.htmlFor = input.id;

    const inputElement = document.createElement('input');
    inputElement.type = input.type;
    inputElement.id = input.id;
    inputElement.placeholder = input.placeholder;
    inputElement.className = 'input-field';

    div.appendChild(label);
    div.appendChild(inputElement);
    return div;
}

function generateStory() {
    if (!currentStory) return;

    const inputs = {};
    let allFilled = true;

    currentStory.inputs.forEach(input => {
        const value = document.getElementById(input.id)?.value.trim();
        if (!value) {
            allFilled = false;
        }
        inputs[input.id] = value;
    });

    if (!allFilled) {
        alert('Please fill in all fields!');
        return;
    }

    let storyText = currentStory.template;
    Object.keys(inputs).forEach(key => {
        const value = `<span class="user-input">${inputs[key]}</span>`;
        storyText = storyText.replace(`{${key}}`, value);
    });

    const storyOutput = document.getElementById('story-output');
    if (storyOutput) {
        storyOutput.classList.remove('hidden');
        storyOutput.innerHTML = storyText;
    }
}

function resetStory() {
    const inputContainer = document.getElementById('input-container');
    const storyOutput = document.getElementById('story-output');
    const generateButton = document.getElementById('generate-button');

    if (inputContainer) inputContainer.innerHTML = '';
    if (storyOutput) {
        storyOutput.classList.add('hidden');
        storyOutput.innerHTML = '';
    }
    if (generateButton) generateButton.classList.add('hidden');

    document.querySelectorAll('.story-choice').forEach(btn => {
        btn.classList.remove('active');
    });
    
    currentStory = null;
}

function setupExampleCards() {
    const container = document.querySelector('.example-cards');
    if (!container) return;

    Object.entries(exampleWords).forEach(([category, words]) => {
        const card = createExampleCard(category, words);
        container.appendChild(card);
    });
}

function createExampleCard(category, words) {
    const card = document.createElement('div');
    card.className = 'example-card';
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <p>Click to see examples</p>
            </div>
            <div class="card-back">
                ${words.map(word => `<p>${word.lenape} = ${word.english}</p>`).join('')}
            </div>
        </div>
    `;
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    return card;
}

// Initialize when document loads
document.addEventListener('DOMContentLoaded', function() {
    setupStoryButtons();
    setupExampleCards();
});
// Group Practice functionality
function initializeGroupPractice() {
    console.log('Initializing Group Practice page');
    setupActivitySelection();
    loadActivityContent();
}

// Activity Data
const groupActivities = {
    howmany: {
        title: "How Many...?",
        description: "The prompts below are recommended for class or group discussions. They can be used as part of a Lenape language class (either in person or through a virtual meeting), or you can try them out with a group of your friends and family.",
        prompts: [
            "How many hwikiyona (noses) are in this room?",
            "How many weshkinko (eyes) are in this room? How many blue eyes? Green eyes? Brown eyes?",
            "How many tuna (mouths) are in this room?",
            "How many naxka (hands) are in this room?",
            "How many welencha (fingers)?",
            "How many wsita (feet) are in this room?",
            "How many kwetsita (toes)?",
            "How many people in this room have long milaxk (hair)?",
            "How many have short milaxk (hair)?",
            "How many people in this room have brown milaxk (hair)?",
            "How many have black milaxk (hair)?",
            "How many have gray milaxk (hair)?",
            "How many have red milaxk (hair)?",
            "How many have blonde milaxk (hair)?",
            "How many hwitaoka (ears) are in this room?",
            "How many mutaya (stomachs) are in this room?",
            "How many tuhwepia (bodies) are in this room?"
        ]
    },
    simonsays: {
        title: "Simon Says...",
        description: "The directions below can be used as a Simon Says game in a group setting, either in class or informally. One person (the leader or instructor) gives the direction, and the group responds. The leader can choose whether any incorrect responses constitute an 'out' or if everyone gets unlimited chances.",
        prompts: [
            "Wave your right naxk (hand)",
            "Tap your left wsit (foot)",
            "Hold up nisha (two) welencha (fingers)",
            "Wiggle your hwitaoka (ears)",
            "Close your weshkinko (eyes)",
            "Touch your wikuwàkane (nose)",
            "Pat your mutaya (stomach)",
            "Shake your milaxk (hair)",
            "Point to your tuna (mouth)",
            "Touch your wsita (feet)",
            "Pat your right ketukw (knee)",
            "Raise your left naolk (arm)",
            "Touch your wikiyon (nose) naxen (three times)",
            "Hold your right wiskon (elbow)",
            "Tap your left hwikxkon (shin)",
            "Hold up a tukwelench (fist)"
        ]
    },
    creature: {
        title: "Creature Feature",
        description: "Invent a new creature by combining different parts of various animals. Give it a name, and make up an interesting fact about your creature. This should incorporate vocabulary words for animals and body parts, and it could also include numbers or colors as appropriate.",
        example: "My creature has the naxka (hands) and weshkinkw (face) of a nahenem (raccoon), the tuhwepi (body) of an askaskontpat (duck), and the shemu (horn) of a unicorn. Its name is the Waddling Raccoon-icorn, and if you see one, it means you will soon discover trash that is actually treasure.",
        prompts: [
            "Create a creature with three hwikiyona (noses)",
            "Design an animal with extra welencha (fingers)",
            "Imagine a being with unusual colored milaxk (hair)",
            "Describe a creature with multiple hwitaoka (ears)",
            "Make up an animal with special wsita (feet)"
        ]
    }
};

function setupActivitySelection() {
    const activityButtons = document.querySelectorAll('.activity-button');
    activityButtons.forEach(button => {
        button.addEventListener('click', () => {
            const activityId = button.getAttribute('data-activity');
            showActivity(activityId);
            updateButtonStates(button);
        });
    });

    // Show first activity by default
    showActivity('howmany');
}

function showActivity(activityId) {
    const activity = groupActivities[activityId];
    if (!activity) return;

    const contentSection = document.getElementById('activity-content');
    let html = `
        <div class="activity-container">
            <h2>${activity.title}</h2>
            <p class="description">${activity.description}</p>
            <div class="prompts-list">
    `;

    if (activityId === 'creature' && activity.example) {
        html += `
            <div class="example-box">
                <h3>Example:</h3>
                <p>${activity.example}</p>
            </div>
        `;
    }

    html += `<ul>`;
    activity.prompts.forEach(prompt => {
        html += `<li>${prompt}</li>`;
    });
    html += `</ul></div></div>`;

    contentSection.innerHTML = html;
}

function updateButtonStates(activeButton) {
    const buttons = document.querySelectorAll('.activity-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}

// Initialize when document loads
document.addEventListener('DOMContentLoaded', function() {
    initializeGroupPractice();
});

function generateInputFields(storyId) {
    const inputContainer = document.querySelector('.input-section');
    inputContainer.innerHTML = ''; // Clear existing inputs
    
    const story = stories[storyId];
    if (!story) return;

    const form = document.createElement('form');
    form.id = 'madlibs-form';
    form.innerHTML = `<h2>Fill in the Blanks</h2>`;

    // Create input fields based on the selected story
    story.inputs.forEach(input => {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';
        inputGroup.innerHTML = `
            <label for="${input.id}">${input.label}</label>
            <input type="text" 
                   id="${input.id}" 
                   placeholder="${input.placeholder}"
                   required>
        `;
        form.appendChild(inputGroup);
    });

    // Add generate button
    const generateButton = document.createElement('button');
    generateButton.type = 'submit';
    generateButton.className = 'generate-button';
    generateButton.textContent = 'Generate Story!';
    form.appendChild(generateButton);

    inputContainer.appendChild(form);

    // Add form submission handler
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        generateStory(storyId);
    });
}

// Add event listeners to story choices
document.addEventListener('DOMContentLoaded', function() {
    const storyButtons = document.querySelectorAll('.story-choice');
    storyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            storyButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Generate input fields for selected story
            const storyId = this.dataset.storyId;
            generateInputFields(storyId);
        });
    });

    // Initialize with first story
    generateInputFields('1');
});

// Function to generate the story
function generateStory(storyId) {
    const story = stories[storyId];
    if (!story) return;

    const inputs = {};
    story.inputs.forEach(input => {
        inputs[input.id] = document.getElementById(input.id).value;
    });

    let storyText = story.template;
    Object.keys(inputs).forEach(key => {
        storyText = storyText.replace(`{${key}}`, inputs[key]);
    });

    // Display the generated story
    const storyOutput = document.createElement('div');
    storyOutput.className = 'story-output';
    storyOutput.innerHTML = storyText;

    const inputSection = document.querySelector('.input-section');
    // Remove any existing story output
    const existingOutput = inputSection.querySelector('.story-output');
    if (existingOutput) {
        existingOutput.remove();
    }
    inputSection.appendChild(storyOutput);

    // Add reset button
    const resetButton = document.createElement('button');
    resetButton.className = 'reset-button';
    resetButton.textContent = 'Create Another Story';
    resetButton.onclick = () => {
        generateInputFields(storyId);
    };
    inputSection.appendChild(resetButton);
    // Function to handle puzzle switching
document.addEventListener('DOMContentLoaded', function() {
    initializeCrossword();
});

function initializeCrossword() {
    const puzzleButtons = document.querySelectorAll('.puzzle-button');
    const puzzleFrames = document.querySelectorAll('.crossword-frame');

    // Hide all puzzles initially except the first one
    puzzleFrames.forEach((frame, index) => {
        if (index === 0) {
            frame.style.display = 'block';
            puzzleButtons[0].classList.add('active');
        } else {
            frame.style.display = 'none';
        }
    });

    // Add click event listeners to buttons
    puzzleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const puzzleId = button.getAttribute('data-puzzle');
            switchPuzzle(puzzleId, puzzleButtons, puzzleFrames);
        });
    });
}

function switchPuzzle(puzzleId, buttons, frames) {
    // Remove active class from all buttons
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Hide all puzzle frames
    frames.forEach(frame => {
        frame.style.display = 'none';
    });

    // Show selected puzzle and activate button
    const selectedPuzzle = document.getElementById(puzzleId);
    const selectedButton = document.querySelector(`[data-puzzle="${puzzleId}"]`);

    if (selectedPuzzle && selectedButton) {
        selectedPuzzle.style.display = 'block';
        selectedButton.classList.add('active');
    }
}
