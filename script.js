// Lenape word database
const lenapeWords = {
    bodyParts: {
        title: "Body Parts",
        words: {
            "Wikèhèn": "Head",
            "Wikèhs": "Mouth",
            "Wikuwàkane": "Nose",
            "Wikuwe": "Eyes",
            "Wikèk": "Leg"
        }
    },
    colors: {
        title: "Colors",
        words: {
            "Sàpe": "Black",
            "Wapá": "White",
            "Mòtànk": "Red",
            "Wëski": "Yellow",
            "Oxkàshe": "Green"
        }
    },
    numbers: {
        title: "Numbers",
        words: {
            "Lënuwe": "One",
            "Nisha": "Two",
            "Nash": "Three",
            "Newa": "Four",
            "Palenaxk": "Five"
        }
    },
    emotions: {
        title: "Emotions",
        words: {
            "Nulitùn": "Happy",
            "Wsìkwàk": "Angry",
            "Wichin": "Sad",
            "Wètëlaohake": "Excited",
            "Wjánte": "Afraid"
        }
    }
};

// Story templates
const stories = {
    bicycleAdventure: {
        title: "The Bicycle Adventure",
        description: "A thrilling tale about a bicycle ride!",
        inputs: [
            { label: "Enter a body part:", type: "bodyPart", placeholder: "e.g., Wikèhèn (head)" },
            { label: "Enter another body part:", type: "bodyPart", placeholder: "e.g., Wikèk (leg)" },
            { label: "Enter a number:", type: "number", placeholder: "e.g., Nisha (two)" },
            { label: "Enter a color:", type: "color", placeholder: "e.g., Mòtànk (red)" },
            { label: "Enter an emotion:", type: "emotion", placeholder: "e.g., Nulitùn (happy)" }
        ],
        template: "I was riding my bike when I hit my {0} on a tree branch. I fell and hurt my {1}. It took {2} days to heal. My bruise turned {3}! I felt {4} when I got back on my bike."
    },
    dancingFriends: {
        title: "Dancing with Friends",
        description: "A fun story about dancing and friendship!",
        inputs: [
            { label: "Enter a number:", type: "number", placeholder: "e.g., Nash (three)" },
            { label: "Enter a body part:", type: "bodyPart", placeholder: "e.g., Wikèk (leg)" },
            { label: "Enter a color:", type: "color", placeholder: "e.g., Wapá (white)" },
            { label: "Enter an emotion:", type: "emotion", placeholder: "e.g., Wètëlaohake (excited)" }
        ],
        template: "{0} friends came to dance with me. We danced until our {1} hurt! We wore {2} shoes and felt {3}!"
    },
    dayAtSchool: {
        title: "A Day at School",
        description: "Learning and playing with friends!",
        inputs: [
            { label: "Enter a number:", type: "number", placeholder: "e.g., Palenaxk (five)" },
            { label: "Enter a color:", type: "color", placeholder: "e.g., Wëski (yellow)" },
            { label: "Enter a body part:", type: "bodyPart", placeholder: "e.g., Wikuwe (eyes)" },
            { label: "Enter an emotion:", type: "emotion", placeholder: "e.g., Nulitùn (happy)" }
        ],
        template: "Today at school, {0} friends and I wore {1} shirts. We read until our {2} were tired. We felt {3} learning new Lenape words!"
    },
    weatherToday: {
        title: "The Weather Today",
        description: "An adventure in different weather!",
        inputs: [
            { label: "Enter a color:", type: "color", placeholder: "e.g., Sàpe (black)" },
            { label: "Enter a body part:", type: "bodyPart", placeholder: "e.g., Wikuwàkane (nose)" },
            { label: "Enter a number:", type: "number", placeholder: "e.g., Lënuwe (one)" },
            { label: "Enter an emotion:", type: "emotion", placeholder: "e.g., Wjánte (afraid)" }
        ],
        template: "The sky turned {0} today! The rain hit my {1} as I counted {2} thunder claps. I felt {3} during the storm."
    },
    playingGames: {
        title: "Playing Games",
        description: "Fun and games with Lenape words!",
        inputs: [
            { label: "Enter a number:", type: "number", placeholder: "e.g., Newa (four)" },
            { label: "Enter a body part:", type: "bodyPart", placeholder: "e.g., Wikèk (leg)" },
            { label: "Enter a color:", type: "color", placeholder: "e.g., Oxkàshe (green)" },
            { label: "Enter an emotion:", type: "emotion", placeholder: "e.g., Wètëlaohake (excited)" }
        ],
        template: "We played games for {0} hours! My {1} got tired from jumping. I won the {2} prize and felt {3}!"
    },
    gettingReady: {
        title: "Getting Ready",
        description: "Morning routine adventure!",
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
    initializeStoryCards();
    initializeWordExamples();
    setupEventListeners();
});

function initializeStoryCards() {
    const storyGrid = document.querySelector('.story-grid');
    Object.entries(stories).forEach(([key, story]) => {
        const card = createStoryCard(key, story);
        storyGrid.appendChild(card);
    });
}

function createStoryCard(key, story) {
    const card = document.createElement('div');
    card.className = 'story-card';
    card.setAttribute('data-story', key);
    
    card.innerHTML = `
        <h3>${story.title}</h3>
        <p>${story.description}</p>
    `;
    
    card.addEventListener('click', () => selectStory(key));
    return card;
}

function selectStory(storyKey) {
    currentStory = stories[storyKey];
    updateUI(storyKey);
    createInputFields();
}

function updateUI(storyKey) {
    // Update selected story styling
    document.querySelectorAll('.story-card').forEach(card => {
        card.classList.remove('selected');
        if(card.getAttribute('data-story') === storyKey) {
            card.classList.add('selected');
        }
    });
    
    // Update story title
    const titleElement = document.getElementById('selected-story-title');
    if(titleElement) {
        titleElement.textContent = currentStory.title;
    }
}

function createInputFields() {
    const inputContainer = document.getElementById('input-container');
    inputContainer.innerHTML = '';
    
    currentStory.inputs.forEach((input, index) => {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';
        
        inputGroup.innerHTML = `
            <label for="input-${index}">${input.label}</label>
            <input 
                type="text" 
                id="input-${index}" 
                placeholder="${input.placeholder}"
                data-type="${input.type}"
                required
            >
        `;
        
        inputContainer.appendChild(inputGroup);
    });
    
    // Show generate button
    document.getElementById('generate-button').style.display = 'block';
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
        storyText = storyText.replace(`{${index}}`, input);
    });
    
    // Display story
    const outputElement = document.getElementById('story-output');
    outputElement.innerHTML = storyText;
    outputElement.style.display = 'block';
    
    // Show reset button
    document.getElementById('reset-button').style.display = 'block';
}

function resetStory() {
    currentStory = null;
    document.getElementById('input-container').innerHTML = '';
    document.getElementById('story-output').innerHTML = '';
    document.getElementById('story-output').style.display = 'none';
    document.getElementById('reset-button').style.display = 'none';
    document.getElementById('generate-button').style.display = 'none';
    
    document.querySelectorAll('.story-card').forEach(card => {
        card.classList.remove('selected');
    });
}

function initializeWordExamples() {
    const exampleContainer = document.querySelector('.word-examples');
    Object.entries(lenapeWords).forEach(([category, data]) => {
        const section = createWordExampleSection(data);
        exampleContainer.appendChild(section);
    });
}

function createWordExampleSection(data) {
    const section = document.createElement('div');
    section.className = 'example-card';
    
    let wordList = '';
    Object.entries(data.words).forEach(([lenape, english]) => {
        wordList += `<p>${lenape} = ${english}</p>`;
    });
    
    section.innerHTML = `
        <h3>${data.title}</h3>
        <div class="word-list">
            ${wordList}
        </div>
    `;
    
    section.addEventListener('click', () => {
        section.classList.toggle('active');
    });
    
    return section;
}

function setupEventListeners() {
    document.getElementById('generate-button')?.addEventListener('click', generateStory);
    document.getElementById('reset-button')?.addEventListener('click', resetStory);
}

// Add console log to confirm script loaded
console.log('Lenape Mad Libs Generator initialized successfully');
