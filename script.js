// Debug logging
console.log('Script starting to load');

// Story templates and data
const stories = {
    bicycle: {
        title: "The Bicycle Adventure",
        inputs: [
            { label: "Enter a body part:", type: "bodyPart", placeholder: "e.g., Wikèhèn (head)" },
            { label: "Enter another body part:", type: "bodyPart", placeholder: "e.g., Wikèk (leg)" },
            { label: "Enter a number:", type: "number", placeholder: "e.g., Nisha (two)" },
            { label: "Enter a color:", type: "color", placeholder: "e.g., Mòtànk (red)" },
            { label: "Enter an emotion:", type: "emotion", placeholder: "e.g., Nulitùn (happy)" }
        ],
        template: "I was riding my bike when I hit my {0} on a tree branch. I fell and hurt my {1}. It took {2} days to heal. My bruise turned {3}! I felt {4} when I got back on my bike."
    },
    dancing: {
        title: "Dancing with Friends",
        inputs: [
            { label: "Enter a number:", type: "number", placeholder: "e.g., Nash (three)" },
            { label: "Enter a body part:", type: "bodyPart", placeholder: "e.g., Wikèk (leg)" },
            { label: "Enter a color:", type: "color", placeholder: "e.g., Wapá (white)" },
            { label: "Enter an emotion:", type: "emotion", placeholder: "e.g., Wètëlaohake (excited)" }
        ],
        template: "{0} friends came to dance with me. We danced until our {1} hurt! We wore {2} shoes and felt {3}!"
    },
    school: {
        title: "A Day at School",
        inputs: [
            { label: "Enter a number:", type: "number", placeholder: "e.g., Palenaxk (five)" },
            { label: "Enter a color:", type: "color", placeholder: "e.g., Wëski (yellow)" },
            { label: "Enter a body part:", type: "bodyPart", placeholder: "e.g., Wikuwe (eyes)" },
            { label: "Enter an emotion:", type: "emotion", placeholder: "e.g., Nulitùn (happy)" }
        ],
        template: "Today at school, {0} friends and I wore {1} shirts. We read until our {2} were tired. We felt {3} learning new Lenape words!"
    },
    weather: {
        title: "The Weather Today",
        inputs: [
            { label: "Enter a color:", type: "color", placeholder: "e.g., Sàpe (black)" },
            { label: "Enter a body part:", type: "bodyPart", placeholder: "e.g., Wikuwàkane (nose)" },
            { label: "Enter a number:", type: "number", placeholder: "e.g., Lënuwe (one)" },
            { label: "Enter an emotion:", type: "emotion", placeholder: "e.g., Wjánte (afraid)" }
        ],
        template: "The sky turned {0} today! The rain hit my {1} as I counted {2} thunder claps. I felt {3} during the storm."
    },
    games: {
        title: "Playing Games",
        inputs: [
            { label: "Enter a number:", type: "number", placeholder: "e.g., Newa (four)" },
            { label: "Enter a body part:", type: "bodyPart", placeholder: "e.g., Wikèk (leg)" },
            { label: "Enter a color:", type: "color", placeholder: "e.g., Oxkàshe (green)" },
            { label: "Enter an emotion:", type: "emotion", placeholder: "e.g., Wètëlaohake (excited)" }
        ],
        template: "We played games for {0} hours! My {1} got tired from jumping. I won the {2} prize and felt {3}!"
    },
    ready: {
        title: "Getting Ready",
        inputs: [
            { label: "Enter a body part:", type: "bodyPart", placeholder: "e.g., Wikèhèn (head)" },
            { label: "Enter a color:", type: "color", placeholder: "e.g., Mòtànk (red)" },
            { label: "Enter another body part:", type: "bodyPart", placeholder: "e.g., Wikèhs (mouth)" },
            { label: "Enter an emotion:", type: "emotion", placeholder: "e.g., Nulitùn (happy)" }
        ],
        template: "This morning, I brushed my {0}. I put on my {1} clothes. I used my {2} to eat breakfast. I felt {3} about starting my day!"
    }
};

let currentStory = null;

// Initialize when document loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    setupEventListeners();
});

function setupEventListeners() {
    console.log('Setting up event listeners');
    
    // Story choice buttons
    document.querySelectorAll('.story-choice').forEach(button => {
        button.addEventListener('click', function() {
            const storyType = this.getAttribute('data-story');
            if (storyType) {
                selectStory(storyType);
            }
        });
    });

    // Generate button
    const generateButton = document.getElementById('generate-button');
    if (generateButton) {
        generateButton.addEventListener('click', generateStory);
    }

    // Reset button
    const resetButton = document.getElementById('reset-button');
    if (resetButton) {
        resetButton.addEventListener('click', resetStory);
    }

    // Example cards
    document.querySelectorAll('.example-card').forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });
}

function selectStory(storyType) {
    console.log(`Selecting story: ${storyType}`);
    
    // Reset previous selections
    document.querySelectorAll('.story-choice').forEach(btn => {
        btn.classList.remove('active');
    });

    // Get the story data
    currentStory = stories[storyType];
    if (!currentStory) {
        console.error(`Story type ${storyType} not found`);
        return;
    }

    // Update UI
    const selectedButton = document.querySelector(`[data-story="${storyType}"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }

    // Update title
    const titleElement = document.getElementById('selected-story-title');
    if (titleElement) {
        titleElement.textContent = currentStory.title;
    }

    // Create input fields
    createInputFields();

    // Show generate button
    const generateButton = document.getElementById('generate-button');
    if (generateButton) {
        generateButton.classList.remove('hidden');
    }

    // Hide story output and reset button
    const storyOutput = document.getElementById('story-output');
    const resetButton = document.getElementById('reset-button');
    
    if (storyOutput) storyOutput.classList.add('hidden');
    if (resetButton) resetButton.classList.add('hidden');
}

function createInputFields() {
    console.log('Creating input fields');
    
    const container = document.getElementById('input-container');
    if (!container) {
        console.error('Input container not found');
        return;
    }

    container.innerHTML = ''; // Clear existing inputs

    currentStory.inputs.forEach((input, index) => {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';

        const label = document.createElement('label');
        label.textContent = input.label;
        label.htmlFor = `input-${index}`;

        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.id = `input-${index}`;
        inputElement.placeholder = input.placeholder;
        inputElement.setAttribute('data-type', input.type);

        inputGroup.appendChild(label);
        inputGroup.appendChild(inputElement);
        container.appendChild(inputGroup);
    });
}

function generateStory() {
    console.log('Generating story');
    
    if (!currentStory) {
        console.error('No story selected');
        return;
    }

    const inputs = [];
    let allFilled = true;

    // Collect and validate inputs
    document.querySelectorAll('#input-container input').forEach(input => {
        const value = input.value.trim();
        if (!value) {
            allFilled = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
            inputs.push(value);
        }
    });

    if (!allFilled) {
        alert('Please fill in all fields!');
        return;
    }

    // Generate story text
    let storyText = currentStory.template;
    inputs.forEach((input, index) => {
        storyText = storyText.replace(`{${index}}`, `<span class="user-input">${input}</span>`);
    });

    // Update UI
    const outputElement = document.getElementById('story-output');
    const generateButton = document.getElementById('generate-button');
    const resetButton = document.getElementById('reset-button');

    if (outputElement) {
        outputElement.innerHTML = storyText;
        outputElement.classList.remove('hidden');
    }

    if (generateButton) generateButton.classList.add('hidden');
    if (resetButton) resetButton.classList.remove('hidden');
}

function resetStory() {
    console.log('Resetting story');
    
    currentStory = null;

    // Reset UI elements
    const elements = {
        inputContainer: document.getElementById('input-container'),
        storyOutput: document.getElementById('story-output'),
        storyTitle: document.getElementById('selected-story-title'),
        generateButton: document.getElementById('generate-button'),
        resetButton: document.getElementById('reset-button')
    };

    // Clear and hide elements
    if (elements.inputContainer) elements.inputContainer.innerHTML = '';
    if (elements.storyOutput) {
        elements.storyOutput.innerHTML = '';
        elements.storyOutput.classList.add('hidden');
    }
    if (elements.storyTitle) elements.storyTitle.textContent = 'Select a Story';
    if (elements.generateButton) elements.generateButton.classList.add('hidden');
    if (elements.resetButton) elements.resetButton.classList.add('hidden');

    // Remove active class from story buttons
    document.querySelectorAll('.story-choice').forEach(btn => {
        btn.classList.remove('active');
    });
}

// Add console log to confirm script loaded
console.log('Script loaded completely');
