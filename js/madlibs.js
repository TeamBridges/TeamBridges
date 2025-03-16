// Story Templates
const stories = {
    bicycle: {
        title: "The Bicycle Adventure",
        difficulty: "easy",
        template: "Yesterday, I rode my bicycle to the {noun1}. My {bodyPart1} was feeling {emotion1} as I pedaled. The {color1} sky made me feel {emotion2}. I saw {number} {animal} on my way. When I got home, my {bodyPart2} was tired but I felt {emotion3}!",
        inputs: [
            { id: "noun1", label: "Place (in Lenape)" },
            { id: "bodyPart1", label: "Body Part (in Lenape)" },
            { id: "emotion1", label: "Emotion (in Lenape)" },
            { id: "color1", label: "Color (in Lenape)" },
            { id: "emotion2", label: "Emotion (in Lenape)" },
            { id: "number", label: "Number (in Lenape)" },
            { id: "animal", label: "Animal (in Lenape)" },
            { id: "bodyPart2", label: "Body Part (in Lenape)" },
            { id: "emotion3", label: "Emotion (in Lenape)" }
        ]
    },
    dancing: {
        title: "Dancing with Friends",
        difficulty: "easy",
        template: "I love to dance! My {bodyPart1} moves to the rhythm while my {bodyPart2} keeps the beat. My friend has {color1} {bodyPart3} that move so gracefully. We feel {emotion1} when we dance together. {number} other friends joined us, and we all felt {emotion2}!",
        inputs: [
            { id: "bodyPart1", label: "Body Part (in Lenape)" },
            { id: "bodyPart2", label: "Body Part (in Lenape)" },
            { id: "color1", label: "Color (in Lenape)" },
            { id: "bodyPart3", label: "Body Part (in Lenape)" },
            { id: "emotion1", label: "Emotion (in Lenape)" },
            { id: "number", label: "Number (in Lenape)" },
            { id: "emotion2", label: "Emotion (in Lenape)" }
        ]
    },
    school: {
        title: "A Day at School",
        difficulty: "easy",
        template: "At school today, I used my {bodyPart1} to learn new words. My teacher has {color1} {bodyPart2} and always looks {emotion1}. During lunch, {number} friends shared their food. By the end of the day, my {bodyPart3} was tired but I felt {emotion2}!",
        inputs: [
            { id: "bodyPart1", label: "Body Part (in Lenape)" },
            { id: "color1", label: "Color (in Lenape)" },
            { id: "bodyPart2", label: "Body Part (in Lenape)" },
            { id: "emotion1", label: "Emotion (in Lenape)" },
            { id: "number", label: "Number (in Lenape)" },
            { id: "bodyPart3", label: "Body Part (in Lenape)" },
            { id: "emotion2", label: "Emotion (in Lenape)" }
        ]
    }
};

// Main Functions
function selectStory(storyId) {
    const story = stories[storyId];
    if (!story) return;

    document.getElementById('selected-story-title').textContent = story.title;
    
    const inputContainer = document.getElementById('input-container');
    inputContainer.innerHTML = '';
    
    story.inputs.forEach(input => {
        const div = document.createElement('div');
        div.className = 'input-group';
        
        const label = document.createElement('label');
        label.htmlFor = input.id;
        label.textContent = input.label;
        
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.id = input.id;
        inputElement.required = true;
        
        div.appendChild(label);
        div.appendChild(inputElement);
        inputContainer.appendChild(div);
    });

    document.getElementById('generate-button').classList.remove('hidden');
    document.getElementById('story-output').classList.add('hidden');
    document.getElementById('reset-button').classList.add('hidden');
}

function generateStory() {
    const storyId = getCurrentStoryId();
    if (!storyId) return;

    const story = stories[storyId];
    let storyText = story.template;

    story.inputs.forEach(input => {
        const value = document.getElementById(input.id).value;
        storyText = storyText.replace(`{${input.id}}`, value);
    });

    const outputDiv = document.getElementById('story-output');
    outputDiv.textContent = storyText;
    outputDiv.classList.remove('hidden');
    
    document.getElementById('generate-button').classList.add('hidden');
    document.getElementById('reset-button').classList.remove('hidden');
}

function resetStory() {
    document.getElementById('input-container').innerHTML = '';
    document.getElementById('selected-story-title').textContent = 'Select a Story';
    document.getElementById('story-output').classList.add('hidden');
    document.getElementById('generate-button').classList.add('hidden');
    document.getElementById('reset-button').classList.add('hidden');
}

// Helper Functions
function getCurrentStoryId() {
    const title = document.getElementById('selected-story-title').textContent;
    return Object.keys(stories).find(key => stories[key].title === title);
}

// Event Listeners
document.getElementById('generate-button').addEventListener('click', generateStory);
document.getElementById('reset-button').addEventListener('click', resetStory);
