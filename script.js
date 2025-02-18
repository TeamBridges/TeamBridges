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
            initializeFlashcards();
            break;
        case 'dragdrop':
            initializeDragDrop();
            break;
        case 'crossword':
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

// Group Practice Page Content
const activityContent = {
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
            "Touch your wsita (feet)"
        ]
    },
    creature: {
        title: "Creature Feature",
        description: "Create imaginative creatures by combining different parts of various animals. Use Lenape words for body parts and colors to describe your creation.",
        prompts: [
            "Create a creature with three hwikiyona (noses)",
            "Design an animal with extra welencha (fingers)",
            "Imagine a being with unusual colored milaxk (hair)",
            "Describe a creature with multiple hwitaoka (ears)",
            "Make up an animal with special wsita (feet)"
        ]
    },
    conversation: {
        title: "Conversation Prompts",
        description: "Use the following prompts to start a conversation. Encourage learners to respond using Lenape body parts, colors, numbers, and animals.",
        prompts: [
            "What are your three favorite animals and why?",
            "Describe someone in this room based on their physical features.",
            "Which body part do you think is the most/least useful, why?",
            "Compare and contrast the physical appearances between a baby and an adult.",
            "Describe a mythical body part for the other students to guess.",
            "Describe your morning routine, using as many body parts as possible.",
            "Pretend you're at the doctor's office and explain what's wrong with you.",
            "Describe your favorite animal based on their physical appearance."
        ]
    }
};

// Group Practice Functions
function initializeGroupPractice() {
    console.log('Initializing Group Practice page');
    showActivity('howmany');
}

function showActivity(activityType) {
    console.log('Showing activity:', activityType);
    const content = activityContent[activityType];
    const contentSection = document.getElementById('activity-content');
    
    let html = `
        <h2>${content.title}</h2>
        <p class="description">${content.description}</p>
    `;

    if (content.prompts) {
        html += '<div class="prompts-list">';
        content.prompts.forEach(prompt => {
            html += `<div class="prompt-item">${prompt}</div>`;
        });
        html += '</div>';
    }

    contentSection.innerHTML = html;
    contentSection.classList.remove('hidden');
    
    // Update active states
    document.querySelectorAll('.activity-card').forEach(card => {
        card.classList.remove('active');
        if(card.getAttribute('onclick').includes(activityType)) {
            card.classList.add('active');
        }
    });
}

// Drag & Drop Functions
function initializeDragDrop() {
    console.log('Initializing Drag & Drop page');
    showGame('game1');
}

function showGame(gameId) {
    console.log('Showing game:', gameId);
    document.querySelectorAll('.game').forEach(game => {
        game.classList.remove('active');
    });
    
    document.getElementById(gameId).classList.add('active');
    
    document.querySelectorAll('.game-choice').forEach(button => {
        button.classList.remove('active');
        if(button.getAttribute('onclick').includes(gameId)) {
            button.classList.add('active');
        }
    });
}

// Crossword Functions
function initializeCrossword() {
    console.log('Initializing Crossword page');
    showPuzzle('singular');
}

function showPuzzle(type) {
    const frames = document.querySelectorAll('.crossword-frame');
    const buttons = document.querySelectorAll('.puzzle-button');
    
    frames.forEach(frame => frame.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('active'));
    
    document.getElementById(type).classList.add('active');
    event.target.classList.add('active');
}

// Mad Libs Functions
function initializeMadLibs() {
    console.log('Initializing Mad Libs page');
    // Add Mad Libs specific initialization
}

// Flash Cards Functions
function initializeFlashcards() {
    console.log('Initializing Flash Cards page');
    showFlashcardSet('lower');
}

function showFlashcardSet(setId) {
    document.querySelectorAll('.game-frame').forEach(frame => {
        frame.classList.remove('active');
    });
    
    document.getElementById(setId).classList.add('active');
    
    document.querySelectorAll('.game-button').forEach(button => {
        button.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Home Page Functions
function initializeHome() {
    console.log('Initializing Home page');
    // Add home page specific initialization
}

// Error handling
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error('Error: ', msg, '\nURL: ', url, '\nLine: ', lineNo, '\nColumn: ', columnNo, '\nError object: ', error);
    return false;
};
