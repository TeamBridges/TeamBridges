// Story templates
const stories = {
    'bicycle': {
        title: 'The Bicycle Adventure',
        inputs: [
            { label: 'Body Part (Wikèk - Leg)', type: 'bodyPart' },
            { label: 'Color (Wisukw - Yellow)', type: 'color' },
            { label: 'Emotion (Nulitùn - Happy)', type: 'emotion' }
        ],
        template: "Today, I rode my {color} bicycle down the street. My {bodyPart} was getting tired, but I felt {emotion} as I pedaled faster!"
    },
    'dancing': {
        title: 'Dancing with Friends',
        inputs: [
            { label: 'Body Part (Wikuwe - Eyes)', type: 'bodyPart' },
            { label: 'Emotion (Wètëlaohake - Excited)', type: 'emotion' }
        ],
        template: "We were dancing together when my friend's {bodyPart} lit up. Everyone was feeling {emotion} as we moved to the music!"
    },
    'school': {
        title: 'A Day at School',
        inputs: [
            { label: 'Body Part (Wikèhèn - Head)', type: 'bodyPart' },
            { label: 'Color (Machkeu - Red)', type: 'color' },
            { label: 'Emotion (Wsìkwàk - Angry)', type: 'emotion' }
        ],
        template: "In class today, my {bodyPart} hurt from thinking so hard. I wore my {color} shirt and felt {emotion} when I got all the answers right!"
    },
    'weather': {
        title: 'The Weather Today',
        inputs: [
            { label: 'Body Part (Wikuwàkane - Nose)', type: 'bodyPart' },
            { label: 'Color (Wapelechen - White)', type: 'color' },
            { label: 'Emotion (Wjánte - Afraid)', type: 'emotion' }
        ],
        template: "The {color} clouds made my {bodyPart} cold. I felt {emotion} when I heard thunder in the distance!"
    },
    'ready': {
        title: 'Getting Ready',
        inputs: [
            { label: 'Body Part (Wikèhs - Mouth)', type: 'bodyPart' },
            { label: 'Color (Sùkw - Black)', type: 'color' },
            { label: 'Emotion (Wichin - Sad)', type: 'emotion' }
        ],
        template: "This morning, I brushed my {bodyPart} and put on my {color} shoes. I felt {emotion} because I couldn't find my favorite shirt!"
    }
};

// Initialize variables
let currentStory = null;
const storyForm = document.querySelector('.story-form');
const inputContainer = document.getElementById('input-container');
const storyOutput = document.getElementById('story-output');
const generateButton = document.getElementById('generate-button');
const resetButton = document.getElementById('reset-button');

// Function to select a story
function selectStory(storyId) {
    // Reset any previous story
    resetStory();
    
    // Set current story
    currentStory = stories[storyId];
    
    // Update story title
    document.getElementById('selected-story-title').textContent = currentStory.title;
    
    // Create input fields
    currentStory.inputs.forEach(input => {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';
        
        const label = document.createElement('label');
        label.textContent = input.label;
        
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.setAttribute('data-type', input.type);
        inputField.required = true;
        
        inputGroup.appendChild(label);
        inputGroup.appendChild(inputField);
        inputContainer.appendChild(inputGroup);
    });
    
    // Show generate button
    generateButton.classList.remove('hidden');
}

// Function to generate story
function generateStory() {
    let storyText = currentStory.template;
    const inputs = inputContainer.querySelectorAll('input');
    const values = {};
    
    // Collect all input values
    inputs.forEach(input => {
        values[input.dataset.type] = input.value;
    });
    
    // Replace placeholders with values
    Object.keys(values).forEach(key => {
        storyText = storyText.replace(`{${key}}`, values[key]);
    });
    
    // Display story and show reset button
    storyOutput.textContent = storyText;
    storyOutput.classList.remove('hidden');
    generateButton.classList.add('hidden');
    resetButton.classList.remove('hidden');
}

// Function to reset story
function resetStory() {
    inputContainer.innerHTML = '';
    storyOutput.classList.add('hidden');
    generateButton.classList.add('hidden');
    resetButton.classList.add('hidden');
    document.getElementById('selected-story-title').textContent = 'Select a Story';
    currentStory = null;
}

// Event Listeners
generateButton.addEventListener('click', generateStory);
resetButton.addEventListener('click', resetStory);

// Initialize card flip functionality
document.querySelectorAll('.example-card').forEach(card => {
    card.addEventListener('click', () => {
        card.querySelector('.card-inner').classList.toggle('flipped');
    });
});
