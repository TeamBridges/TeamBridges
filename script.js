// script.js - Core Initialization

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
    console.log('Initializing Flash Cards');
    setupGameSelection();
}

let currentGame = 'game1';

function setupGameSelection() {
    const gameButtons = document.querySelectorAll('.game-choice');
    const gameContainers = document.querySelectorAll('.game-container');

    gameButtons.forEach(button => {
        button.addEventListener('click', () => {
            const gameId = button.getAttribute('data-game');
            showGame(gameId);
            updateButtonStates(button);
        });
    });

    // Show first game by default
    showGame('game1');
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
    
    currentGame = gameId;
}

function updateButtonStates(activeButton) {
    const buttons = document.querySelectorAll('.game-choice');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}
// Drag & Drop functionality
function initializeDragDrop() {
    console.log('Initializing Drag & Drop Games');
    setupGameSelection();
}

let currentGame = 'game1';

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
    
    currentGame = gameId;
}

function updateButtonStates(activeButton) {
    const buttons = document.querySelectorAll('.game-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}
// Crossword Game functionality
function initializeCrossword() {
    console.log('Initializing Crossword Games');
    setupCrosswordSelection();
}

let currentCrossword = 'crossword1';

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
    
    currentCrossword = gameId;
}

function updateButtonStates(activeButton) {
    const buttons = document.querySelectorAll('.crossword-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}
// Crossword Game functionality
function initializeCrossword() {
    console.log('Initializing Crossword Games');
    setupCrosswordSelection();
}

let currentCrossword = 'crossword1';

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
    
    currentCrossword = gameId;
}

function updateButtonStates(activeButton) {
    const buttons = document.querySelectorAll('.crossword-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}
// Mad Libs Stories Data
const stories = {
    1: {
        title: "The Bicycle Adventure",
        description: "A thrilling tale about a bicycle ride!",
        inputs: [
            { label: "Enter a body part:", id: "bodyPart1", type: "text", placeholder: "e.g., Wihle (head)" },
            { label: "Enter another body part:", id: "bodyPart2", type: "text", placeholder: "e.g., Wikat (leg)" },
            { label: "Enter a number:", id: "number1", type: "text", placeholder: "e.g., Nisha (two)" },
            { label: "Enter a color:", id: "color1", type: "text", placeholder: "e.g., Machke (red)" },
            { label: "Enter an emotion:", id: "emotion1", type: "text", placeholder: "e.g., Nulhatam (happy)" }
        ],
        template: "I was riding my bike when I hit my {bodyPart1} on a tree branch. I fell and hurt my {bodyPart2}. It took {number1} days to heal. My bruise turned {color1}. Now I feel {emotion1} when I ride my bike."
    },
    2: {
        title: "Dancing with Friends",
        description: "A fun story about dancing and friendship!",
        inputs: [
            { label: "Enter a number:", id: "number1", type: "text", placeholder: "e.g., Naxa (three)" },
            { label: "Enter a body part:", id: "bodyPart1", type: "text", placeholder: "e.g., Wikat (leg)" },
            { label: "Enter a color:", id: "color1", type: "text", placeholder: "e.g., Ope (white)" },
            { label: "Enter an emotion:", id: "emotion1", type: "text", placeholder: "e.g., Wisachgihhele (excited)" }
        ],
        template: "{number1} friends were dancing when I moved my {bodyPart1} too fast. We wore {color1} shoes and felt {emotion1}!"
    },
    3: {
        title: "A Day at School",
        description: "Learning and playing with friends!",
        inputs: [
            { label: "Enter a body part:", id: "bodyPart1", type: "text", placeholder: "e.g., Wiske (eyes)" },
            { label: "Enter a color:", id: "color1", type: "text", placeholder: "e.g., Askaske (green)" },
            { label: "Enter a number:", id: "number1", type: "text", placeholder: "e.g., Newa (four)" },
            { label: "Enter an emotion:", id: "emotion1", type: "text", placeholder: "e.g., Nulhatam (happy)" }
        ],
        template: "In class today, my {bodyPart1} saw something {color1}. {number1} of my friends noticed it too. We all felt {emotion1}!"
    },
    4: {
        title: "The Weather Today",
        description: "An adventure in different weather!",
        inputs: [
            { label: "Enter a color:", id: "color1", type: "text", placeholder: "e.g., Seke (black)" },
            { label: "Enter a body part:", id: "bodyPart1", type: "text", placeholder: "e.g., Naxka (hands)" },
            { label: "Enter an emotion:", id: "emotion1", type: "text", placeholder: "e.g., Kwishele (afraid)" }
        ],
        template: "The {color1} clouds made my {bodyPart1} feel cold. The storm made me feel {emotion1}!"
    },
    5: {
        title: "Playing Games",
        description: "Fun and games with Lenape words!",
        inputs: [
            { label: "Enter a number:", id: "number1", type: "text", placeholder: "e.g., Palenaxk (five)" },
            { label: "Enter a body part:", id: "bodyPart1", type: "text", placeholder: "e.g., Wsita (feet)" },
            { label: "Enter an emotion:", id: "emotion1", type: "text", placeholder: "e.g., Nulhatam (happy)" }
        ],
        template: "{number1} friends played together. We used our {bodyPart1} to play hopscotch. Everyone felt {emotion1}!"
    },
    6: {
        title: "Getting Ready",
        description: "Morning routine adventure!",
        inputs: [
            { label: "Enter a body part:", id: "bodyPart1", type: "text", placeholder: "e.g., Milaxk (hair)" },
            { label: "Enter a color:", id: "color1", type: "text", placeholder: "e.g., Wisawe (yellow)" },
            { label: "Enter an emotion:", id: "emotion1", type: "text", placeholder: "e.g., Wisachgihhele (excited)" }
        ],
        template: "This morning I brushed my {bodyPart1} and put on my {color1} shirt. I felt {emotion1} about the day!"
    }
};

let currentStory = null;

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupExampleCards();
    setupStoryButtons();
});

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

    // Update story form
    document.getElementById('story-form-title').textContent = currentStory.title;
    const inputsContainer = document.getElementById('story-inputs');
    inputsContainer.innerHTML = '';

    currentStory.inputs.forEach(input => {
        const inputGroup = createInputGroup(input);
        inputsContainer.appendChild(inputGroup);
    });

    // Show generate button
    document.getElementById('generate-button').style.display = 'block';
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
        storyText = storyText.replace(`{${key}}`, inputs[key]);
    });

    document.getElementById('story-output').innerHTML = storyText;
    document.querySelector('.story-card-inner').classList.add('flipped');
}

function resetCard() {
    document.querySelector('.story-card-inner').classList.remove('flipped');
    document.getElementById('story-inputs').innerHTML = '';
    document.getElementById('story-output').innerHTML = '';
    document.getElementById('generate-button').style.display = 'none';
    currentStory = null;
}

// Example Cards Data
const exampleCards = {
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
        { lenape: "Palenaxk", english: "five" },
        { lenape: "Kwetash", english: "six" },
        { lenape: "Nishash", english: "seven" },
        { lenape: "Xash", english: "eight" },
        { lenape: "Peshkunk", english: "nine" },
        { lenape: "Telen", english: "ten" }
    ],
    emotions: [
        { lenape: "Nulhatam", english: "happy" },
        { lenape: "Kwitey", english: "angry" },
        { lenape: "Wawitam", english: "sad" },
        { lenape: "Wisachgihhele", english: "excited" },
        { lenape: "Kwishele", english: "afraid" }
    ]
};

function setupExampleCards() {
    const container = document.querySelector('.example-cards');
    if (!container) return;

    Object.entries(exampleCards).forEach(([category, words]) => {
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
// Group Practice functionality
function initializeGroupPractice() {
    console.log('Initializing Group Practice page');
    setupActivityCards();
}

const groupActivities = {
    howMany: {
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
    simonSays: {
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
            "Pat your right ketukw (knee)",
            "Raise your left naolk (arm)",
            "Touch your wikiyon (nose) naxen (three times)",
            "Hold your right wiskon (elbow)",
            "Tap your left hwikxkon (shin)",
            "Hold up a tukwelench (fist)"
        ]
    },
    creatureFeature: {
        title: "Creature Feature",
        description: "Invent a new creature by combining different parts of various animals. Give it a name, and make up an interesting fact about your creature. This should incorporate vocabulary words for animals and body parts, and it could also include numbers or colors as appropriate.",
        prompts: [
            "Create a creature with three hwikiyona (noses)",
            "Design an animal with extra welencha (fingers)",
            "Imagine a being with unusual colored milaxk (hair)",
            "Describe a creature with multiple hwitaoka (ears)",
            "Make up an animal with special wsita (feet)",
            "Example: My creature has the naxka (hands) and weshkinkw (face) of a nahenem (raccoon), the tuhwepi (body) of an askaskontpat (duck), and the shemu (horn) of a unicorn. Its name is the Waddling Raccoon-icorn!"
        ]
    },
    conversation: {
        title: "Conversation Prompts",
        description: "Use the following prompts to start a conversation. Encourage learners to respond using words in Lenape as often as possible, especially focusing on Lenape body parts, colors, numbers, and animals.",
        prompts: [
            "What are your three favorite physical features about yourself, why?",
            "Describe someone in this room based on their physical features.",
            "Which body part do you think is the most/least useful, why?",
            "Compare and contrast the physical appearances between a baby and an adult.",
            "Describe a mystery body part for the other students to guess.",
            "Describe your morning routine, using as many body parts as possible.",
            "Pretend you're at the doctor's office and explain what's wrong and how you feel.",
            "Describe your favorite animal based on their physical appearance."
        ]
    }
};

function setupActivityCards() {
    const container = document.getElementById('activity-container');
    if (!container) return;

    Object.entries(groupActivities).forEach(([key, activity]) => {
        const card = createActivityCard(key, activity);
        container.appendChild(card);
    });
}

function createActivityCard(key, activity) {
    const card = document.createElement('div');
    card.className = 'activity-card';
    card.setAttribute('data-activity', key);
    
    card.innerHTML = `
        <h2>${activity.title}</h2>
        <p class="description">${activity.description}</p>
        <button class="view-prompts-btn" onclick="showActivity('${key}')">View Prompts</button>
    `;
    
    return card;
}

function showActivity(activityKey) {
    const activity = groupActivities[activityKey];
    if (!activity) return;

    const contentArea = document.getElementById('activity-content');
    if (!contentArea) return;

    let html = `
        <h2>${activity.title}</h2>
        <p class="description">${activity.description}</p>
        <div class="prompts-list">
    `;

    activity.prompts.forEach(prompt => {
        html += `<div class="prompt-item">${prompt}</div>`;
    });

    html += '</div>';
    contentArea.innerHTML = html;

    // Update active states
    document.querySelectorAll('.activity-card').forEach(card => {
        card.classList.remove('active');
        if (card.getAttribute('data-activity') === activityKey) {
            card.classList.add('active');
        }
    });

    // Show the content area if it was hidden
    contentArea.classList.remove('hidden');
}

// Initialize when document loads
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    if (currentPage === 'grouppractice') {
        initializeGroupPractice();
    }
});
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all activity cards
    const cards = document.querySelectorAll('.activity-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            cards.forEach(c => c.classList.remove('active'));
            // Add active class to clicked card
            this.classList.add('active');
            
            // Get activity content
            const activityId = this.getAttribute('data-activity');
            const contentArea = document.getElementById('activity-content');
            
            if (contentArea) {
                // Show loading state if needed
                contentArea.innerHTML = '<div class="loading">Loading activity...</div>';
                
                // Simulate content load (remove in production)
                setTimeout(() => {
                    displayActivityContent(activityId);
                }, 300);
            }
        });
    });
});

// Function to handle back to activities list
function backToActivities() {
    const contentArea = document.getElementById('activity-content');
    const activityCards = document.querySelector('.activity-cards');
    
    if (contentArea && activityCards) {
        contentArea.classList.add('hidden');
        activityCards.classList.remove('hidden');
    }
}

// Function to handle card flips
function flipCard(cardElement) {
    cardElement.classList.toggle('flipped');
}

// Function to reset all cards
function resetCards() {
    const cards = document.querySelectorAll('.activity-card');
    cards.forEach(card => {
        card.classList.remove('flipped');
        card.classList.remove('active');
    });
}

// Function to handle print activity
function printActivity() {
    window.print();
}

// Add keyboard accessibility
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        resetCards();
    }
});
</script>
