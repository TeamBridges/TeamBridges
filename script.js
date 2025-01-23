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
    setupEventListeners();
});

function setupEventListeners() {
    // Add click listeners for story buttons
    document.querySelectorAll('.story-choice').forEach(button => {
        button.addEventListener('click', function() {
            const storyId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            selectStory(storyId);
        });
    });

    // Generate and Reset button listeners
    document.getElementById('generate-button').addEventListener('click', generateStory);
    document.getElementById('reset-button').addEventListener('click', resetStory);
}

function selectStory(storyId) {
    // Reset any previously active stories
    document.querySelectorAll('.story-choice').forEach(btn => btn.classList.remove('active'));
    
    // Set current story and update UI
    currentStory = stories[storyId];
    
    // Update story title
    document.getElementById('selected-story-title').textContent = currentStory.title;
    
    // Mark selected story button as active
    const selectedButton = document.querySelector(`[onclick*="${storyId}"]`);
    if (selectedButton) selectedButton.classList.add('active');
    
    // Create input fields
    createInputFields();
    
    // Show generate button
    document.getElementById('generate-button').classList.remove('hidden');
    
    // Hide output and reset button
    document.getElementById('story-output').classList.add('hidden');
    document.getElementById('reset-button').classList.add('hidden');
}

function createInputFields() {
    const container = document.getElementById('input-container');
    container.innerHTML = ''; // Clear existing inputs
    
    currentStory.inputs.forEach((input, index) => {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';
        
        const label = document.createElement('label');
        label.textContent = input.label;
        label.setAttribute('for', `input-${index}`);
        
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
    if (!currentStory) return;
    
    const inputs = [];
    const inputFields = document.querySelectorAll('#input-container input');
    
    // Validate inputs
    let allFilled = true;
    inputFields.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
            inputs.push(input.value.trim());
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
    
    // Display story
    const outputElement = document.getElementById('story-output');
    outputElement.innerHTML = storyText;
    outputElement.classList.remove('hidden');
    
    // Show reset button and hide generate button
    document.getElementById('reset-button').classList.remove('hidden');
    document.getElementById('generate-button').classList.add('hidden');
}

function resetStory() {
    currentStory = null;
    
    // Clear and hide story elements
    document.getElementById('input-container').innerHTML = '';
    document.getElementById('story-output').innerHTML = '';
    document.getElementById('story-output').classList.add('hidden');
    document.getElementById('selected-story-title').textContent = 'Select a Story';
    
    // Hide buttons
    document.getElementById('reset-button').classList.add('hidden');
    document.getElementById('generate-button').classList.add('hidden');
    
    // Remove active class from story buttons
    document.querySelectorAll('.story-choice').forEach(btn => btn.classList.remove('active'));
}

// Initialize example cards
document.querySelectorAll('.example-card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
});
