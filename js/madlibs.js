// Story templates and word requirements
const stories = {
    bicycle: {
        title: "The Bicycle Adventure",
        template: "One day, I was riding my bicycle when my {bodyPart1} started to feel {emotion1}. I looked down and noticed my bicycle was {color1}! What a strange day!",
        requirements: [
            { id: 'bodyPart1', label: 'Body Part (Wikèk - Leg)', type: 'bodyPart' },
            { id: 'emotion1', label: 'Emotion (Nulitùn - Happy)', type: 'emotion' },
            { id: 'color1', label: 'Color (Wisukw - Yellow)', type: 'color' }
        ]
    },
    dancing: {
        title: "Dancing with Friends",
        template: "We were dancing when my {bodyPart1} felt very {emotion1}. Everyone was moving and having fun!",
        requirements: [
            { id: 'bodyPart1', label: 'Body Part (Wikuwe - Eyes)', type: 'bodyPart' },
            { id: 'emotion1', label: 'Emotion (Wètëlaohake - Excited)', type: 'emotion' }
        ]
    },
    school: {
        title: "A Day at School",
        template: "At school today, my {bodyPart1} was feeling {emotion1}. The teacher wrote on the board with {color1} chalk.",
        requirements: [
            { id: 'bodyPart1', label: 'Body Part (Wikèhèn - Head)', type: 'bodyPart' },
            { id: 'emotion1', label: 'Emotion (Wsìkwàk - Angry)', type: 'emotion' },
            { id: 'color1', label: 'Color (Machkeu - Red)', type: 'color' }
        ]
    },
    weather: {
        title: "The Weather Today",
        template: "The weather made my {bodyPart1} feel {emotion1}. The clouds were {color1} in the sky.",
        requirements: [
            { id: 'bodyPart1', label: 'Body Part (Wikuwàkane - Nose)', type: 'bodyPart' },
            { id: 'emotion1', label: 'Emotion (Wjánte - Afraid)', type: 'emotion' },
            { id: 'color1', label: 'Color (Wapelechen - White)', type: 'color' }
        ]
    },
    ready: {
        title: "Getting Ready",
        template: "This morning, I woke up and my {bodyPart1} was feeling {emotion1}. I put on my {color1} shirt and got ready for the day!",
        requirements: [
            { id: 'bodyPart1', label: 'Body Part (Wikèhs - Mouth)', type: 'bodyPart' },
            { id: 'emotion1', label: 'Emotion (Wichin - Sad)', type: 'emotion' },
            { id: 'color1', label: 'Color (Sùkw - Black)', type: 'color' }
        ]
    }
};

// DOM Elements
const inputContainer = document.getElementById('input-container');
const generateButton = document.getElementById('generate-button');
const storyOutput = document.getElementById('story-output');
const resetButton = document.getElementById('reset-button');
const storyTitle = document.getElementById('selected-story-title');

// Select a story and show its form
function selectStory(storyKey) {
    const story = stories[storyKey];
    storyTitle.textContent = story.title;
    
    // Clear previous inputs
    inputContainer.innerHTML = '';
    
    // Create input fields for each requirement
    story.requirements.forEach(req => {
        const div = document.createElement('div');
        div.className = 'input-group';
        
        const label = document.createElement('label');
        label.textContent = req.label;
        
        const input = document.createElement('input');
        input.type = 'text';
        input.id = req.id;
        input.required = true;
        
        div.appendChild(label);
        div.appendChild(input);
        inputContainer.appendChild(div);
    });
    
    // Show generate button
    generateButton.classList.remove('hidden');
    storyOutput.classList.add('hidden');
    resetButton.classList.add('hidden');
    
    // Store current story key
    generateButton.dataset.storyKey = storyKey;
}

// Generate the story
generateButton.addEventListener('click', () => {
    const storyKey = generateButton.dataset.storyKey;
    const story = stories[storyKey];
    let storyText = story.template;
    
    // Replace placeholders with input values
    story.requirements.forEach(req => {
        const input = document.getElementById(req.id);
        storyText = storyText.replace(`{${req.id}}`, input.value);
    });
    
    // Display the story
    storyOutput.textContent = storyText;
    storyOutput.classList.remove('hidden');
    resetButton.classList.remove('hidden');
    generateButton.classList.add('hidden');
});

// Reset the form
resetButton.addEventListener('click', () => {
    storyTitle.textContent = 'Select a Story';
    inputContainer.innerHTML = '';
    storyOutput.classList.add('hidden');
    resetButton.classList.add('hidden');
    generateButton.classList.add('hidden');
});

// Initialize card flip functionality
document.querySelectorAll('.example-card').forEach(card => {
    card.addEventListener('click', () => {
        card.querySelector('.card-inner').classList.toggle('flipped');
    });
});
