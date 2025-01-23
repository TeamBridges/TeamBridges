// Mad Libs Stories
const stories = {
    1: {
        title: "The Bicycle Adventure",
        description: "A thrilling tale about a bicycle ride!",
        inputs: [
            { label: "Enter a body part:", id: "bodyPart1", type: "text", placeholder: "e.g., Wikèhèn (head)" },
            { label: "Enter another body part:", id: "bodyPart2", type: "text", placeholder: "e.g., Wikèk (leg)" },
            { label: "Enter a number:", id: "number1", type: "text", placeholder: "e.g., Nisha (two)" },
            { label: "Enter a color:", id: "color1", type: "text", placeholder: "e.g., Mòtànk (red)" },
            { label: "Enter an emotion:", id: "emotion1", type: "text", placeholder: "e.g., Nulitùn (happy)" }
        ],
        template: "I was riding my bike when I hit my {bodyPart1} on a tree branch. I fell and hurt my {bodyPart2}. It took {number1} days to heal. My bruise turned {color1}. Now I feel {emotion1} when I ride my bike."
    },
    2: {
        title: "Dancing with Friends",
        description: "A fun story about dancing and friendship!",
        inputs: [
            { label: "Enter a number:", id: "number1", type: "text", placeholder: "e.g., Nash (three)" },
            { label: "Enter a body part:", id: "bodyPart1", type: "text", placeholder: "e.g., Wikèk (leg)" },
            { label: "Enter a color:", id: "color1", type: "text", placeholder: "e.g., Wapá (white)" },
            { label: "Enter an emotion:", id: "emotion1", type: "text", placeholder: "e.g., Wètëlaohake (excited)" }
        ],
        template: "{number1} friends were dancing when I moved my {bodyPart1} too fast. We wore {color1} shoes and felt {emotion1}!"
    }
};

// Lenape Word Examples
const lenapeWords = {
    greetings: {
        "Halì": "Hello",
        "Kulamàlsi": "How are you?",
        "Milì në luwàntewëlu": "I am well"
    },
    numbers: {
        "Lënuwe": "One",
        "Nisha": "Two",
        "Nash": "Three",
        "Newa": "Four",
        "Palenaxk": "Five"
    },
    colors: {
        "Sàpe": "Black",
        "Wapá": "White",
        "Mòtànk": "Red",
        "Wëski": "Yellow",
        "Oxkàshe": "Green"
    },
    bodyParts: {
        "Wikèhèn": "Head",
        "Wikèhs": "Mouth",
        "Wikuwàkane": "Nose",
        "Wikuwe": "Eyes",
        "Wikèk": "Leg"
    },
    emotions: {
        "Nulitùn": "Happy",
        "Wsìkwàk": "Angry",
        "Wichin": "Sad",
        "Wètëlaohake": "Excited",
        "Wjánte": "Afraid"
    }
};

// Crossword puzzle words (from the image)
const crosswordWords = {
    across: {
        2: "hwikwi",
        4: "shetun",
        6: "weshkinkw",
        7: "hopikon",
        9: "wil",
        10: "naolk"
    },
    down: {
        1: "welench",
        3: "naxk",
        4: "hwikat",
        5: "wananu",
        8: "hwitaok",
        10: "tankkat"
    }
};

let currentStory = null;

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupWordExamples();
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

    // Update story title
    const titleElement = document.getElementById('story-form-title');
    if (titleElement) {
        titleElement.textContent = currentStory.title;
    }

    // Clear and create new input fields
    const inputsContainer = document.getElementById('story-inputs');
    if (inputsContainer) {
        inputsContainer.innerHTML = '';
        
        currentStory.inputs.forEach(input => {
            const inputGroup = document.createElement('div');
            inputGroup.className = 'input-group';
            
            const label = document.createElement('label');
            label.textContent = input.label;
            label.htmlFor = input.id;
            
            const inputField = document.createElement('input');
            inputField.type = input.type;
            inputField.id = input.id;
            inputField.placeholder = input.placeholder;
            
            inputGroup.appendChild(label);
            inputGroup.appendChild(inputField);
            inputsContainer.appendChild(inputGroup);
        });

        // Show generate button
        const generateButton = document.getElementById('generate-button');
        if (generateButton) {
            generateButton.style.display = 'block';
        }
    }
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
    
    const outputElement = document.getElementById('story-output');
    if (outputElement) {
        outputElement.innerHTML = storyText;
        outputElement.classList.remove('hidden');
    }
}

function setupWordExamples() {
    const container = document.getElementById('word-examples');
    if (!container) return;
    
    Object.entries(lenapeWords).forEach(([category, words]) => {
        const section = document.createElement('div');
        section.className = 'word-category';
        
        const title = document.createElement('h3');
        title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        section.appendChild(title);
        
        Object.entries(words).forEach(([lenape, english]) => {
            const word = document.createElement('p');
            word.textContent = `${lenape} = ${english}`;
            section.appendChild(word);
        });
        
        container.appendChild(section);
    });
}

// Reset the story form
function resetStory() {
    const inputsContainer = document.getElementById('story-inputs');
    if (inputsContainer) {
        inputsContainer.innerHTML = '';
    }
    
    const outputElement = document.getElementById('story-output');
    if (outputElement) {
        outputElement.innerHTML = '';
        outputElement.classList.add('hidden');
    }
    
    currentStory = null;
    
    const generateButton = document.getElementById('generate-button');
    if (generateButton) {
        generateButton.style.display = 'none';
    }
}

// Export functions for use in other files if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stories,
        lenapeWords,
        crosswordWords,
        selectStory,
        generateStory,
        resetStory
    };
}
