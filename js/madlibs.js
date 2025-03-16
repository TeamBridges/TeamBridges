// Story templates
const stories = {
    'bicycle': {
        title: 'The Bicycle Adventure',
        inputs: [
            { label: 'Body Part (Wikèk - Leg)', type: 'bodyPart' },
            { label: 'Color (Wisukw - Yellow)', type: 'color' },
            { label: 'Emotion (Nulitùn - Happy)', type: 'emotion' }
        ],
        template: "Today, I rode my LENAPE_COLOR bicycle down the street. My LENAPE_BODYPART was getting tired, but I felt LENAPE_EMOTION as I pedaled faster!"
    },
    'dancing': {
        title: 'Dancing with Friends',
        inputs: [
            { label: 'Body Part (Wikuwe - Eyes)', type: 'bodyPart' },
            { label: 'Emotion (Wètëlaohake - Excited)', type: 'emotion' }
        ],
        template: "We were dancing together when my friend's LENAPE_BODYPART lit up. Everyone was feeling LENAPE_EMOTION as we moved to the music!"
    },
    'school': {
        title: 'A Day at School',
        inputs: [
            { label: 'Body Part (Wikèhèn - Head)', type: 'bodyPart' },
            { label: 'Color (Machkeu - Red)', type: 'color' },
            { label: 'Emotion (Wsìkwàk - Angry)', type: 'emotion' }
        ],
        template: "In class today, my LENAPE_BODYPART hurt from thinking so hard. I wore my LENAPE_COLOR shirt and felt LENAPE_EMOTION when I got all the answers right!"
    },
    'weather': {
        title: 'The Weather Today',
        inputs: [
            { label: 'Body Part (Wikuwàkane - Nose)', type: 'bodyPart' },
            { label: 'Color (Wapelechen - White)', type: 'color' },
            { label: 'Emotion (Wjánte - Afraid)', type: 'emotion' }
        ],
        template: "The LENAPE_COLOR clouds made my LENAPE_BODYPART cold. I felt LENAPE_EMOTION when I heard thunder in the distance!"
    },
    'ready': {
        title: 'Getting Ready',
        inputs: [
            { label: 'Body Part (Wikèhs - Mouth)', type: 'bodyPart' },
            { label: 'Color (Sùkw - Black)', type: 'color' },
            { label: 'Emotion (Wichin - Sad)', type: 'emotion' }
        ],
        template: "This morning, I brushed my LENAPE_BODYPART and put on my LENAPE_COLOR shoes. I felt LENAPE_EMOTION because I couldn't find my favorite shirt!"
    }
};

// Current story selection
let currentStory = null;

// Function to select a story
function selectStory(storyId) {
    currentStory = stories[storyId];
    document.getElementById('selected-story-title').textContent = currentStory.title;
    
    // Generate input form
    const inputContainer = document.getElementById('input-container');
    inputContainer.innerHTML = '';
    
    currentStory.inputs.forEach((input, index) => {
        const inputDiv = document.createElement('div');
        inputDiv.className = 'input-group';
        
        const label = document.createElement('label');
        label.textContent = input.label;
        
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.required = true;
        inputField.dataset.type = input.type;
        
        inputDiv.appendChild(label);
        inputDiv.appendChild(inputField);
        inputContainer.appendChild(inputDiv);
    });
    
    // Show generate button
    document.getElementById('generate-button').classList.remove('hidden');
}

// Function to generate the story
function generateStory() {
    const inputs = document.querySelectorAll('#input-container input');
    let storyText = currentStory.template;
    
    inputs.forEach(input => {
        const type = input.dataset.type.toUpperCase();
        storyText = storyText.replace(`LENAPE_${type}`, input.value);
    });
    
    const outputDiv = document.getElementById('story-output');
    outputDiv.textContent = storyText;
    outputDiv.classList.remove('hidden');
    
    document.getElementById('reset-button').classList.remove('hidden');
}

// Event Listeners
document.getElementById('generate-button').addEventListener('click', generateStory);

document.getElementById('reset-button').addEventListener('click', () => {
    document.getElementById('input-container').innerHTML = '';
    document.getElementById('story-output').classList.add('hidden');
    document.getElementById('generate-button').classList.add('hidden');
    document.getElementById('reset-button').classList.add('hidden');
    document.getElementById('selected-story-title').textContent = 'Select a Story';
    currentStory = null;
});
