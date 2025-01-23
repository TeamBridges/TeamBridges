// Story Templates
const stories = {
    1: {
        title: "The Bicycle Adventure",
        description: "A thrilling tale about a bicycle ride!",
        inputs: [
            { label: "Enter a body part:", id: "bodyPart1", type: "text" },
            { label: "Enter another body part:", id: "bodyPart2", type: "text" },
            { label: "Enter a number:", id: "number1", type: "text" },
            { label: "Enter a color:", id: "color1", type: "text" },
            { label: "Enter an emotion:", id: "emotion1", type: "text" }
        ],
        template: "I was riding my bike when I hit my {bodyPart1} on a tree branch. I fell and hurt my {bodyPart2}. It took {number1} days to heal. My bruise turned {color1}. Now I feel {emotion1} when I ride my bike."
    },
    2: {
        title: "Dancing with Friends",
        description: "A fun story about dancing and friendship!",
        inputs: [
            { label: "Enter a number:", id: "number1", type: "text" },
            { label: "Enter a body part:", id: "bodyPart1", type: "text" },
            { label: "Enter another body part:", id: "bodyPart2", type: "text" },
            { label: "Enter a color:", id: "color1", type: "text" },
            { label: "Enter an emotion:", id: "emotion1", type: "text" }
        ],
        template: "I was dancing with {number1} friends when I moved my {bodyPart1} too fast. I accidentally hit my {bodyPart2}! My {color1} outfit got wrinkled. Even though I got hurt, I felt {emotion1}."
    }
};

// Word Examples
const wordExamples = {
    bodyParts: {
        singular: {
            "Wikèhèn": "Head",
            "Wikèhs": "Mouth",
            "Wikuwàkane": "Nose",
            "Wikuwe": "Eyes",
            "Wikèk": "Leg"
        }
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
    emotions: {
        "Nulitùn": "Happy",
        "Wsìkwàk": "Angry",
        "Wichin": "Sad",
        "Wètëlaohake": "Excited",
        "Wjánte": "Afraid"
    }
};

let currentStory = null;

// Function to select a story
function selectStory(storyId) {
    currentStory = stories[storyId];
    
    // Reset any previously active story choices
    document.querySelectorAll('.story-choice').forEach(button => {
        button.classList.remove('active');
    });
    
    // Highlight the selected story
    event.currentTarget.classList.add('active');
    
    // Clear previous inputs
    const inputsContainer = document.getElementById('story-inputs');
    inputsContainer.innerHTML = '';
    
    // Create input fields for the selected story
    currentStory.inputs.forEach(input => {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';
        
        const label = document.createElement('label');
        label.textContent = input.label;
        
        const inputField = document.createElement('input');
        inputField.type = input.type;
        inputField.id = input.id;
        
        inputGroup.appendChild(label);
        inputGroup.appendChild(inputField);
        inputsContainer.appendChild(inputGroup);
    });
    
    // Show the generate button
    document.getElementById('generate-button').style.display = 'block';
}

// Function to generate the story
function generateStory() {
    if (!currentStory) return;
    
    let storyText = currentStory.template;
    const inputs = {};
    
    // Collect all input values
    currentStory.inputs.forEach(input => {
        inputs[input.id] = document.getElementById(input.id).value;
    });
    
    // Replace placeholders with input values
    for (let key in inputs) {
        storyText = storyText.replace(`{${key}}`, inputs[key]);
    }
    
    // Display the generated story
    const storyCard = document.querySelector('.story-card');
    document.getElementById('story-output').innerHTML = storyText;
    storyCard.classList.add('flipped');
}

// Function to reset the card
function resetCard() {
    const storyCard = document.querySelector('.story-card');
    storyCard.classList.remove('flipped');
    currentStory = null;
    
    // Reset story choices
    document.querySelectorAll('.story-choice').forEach(button => {
        button.classList.remove('active');
    });
    
    // Clear inputs
    document.getElementById('story-inputs').innerHTML = '';
    document.getElementById('generate-button').style.display = 'none';
}

// Function to handle example card flips
document.addEventListener('DOMContentLoaded', function() {
    const exampleCards = document.querySelectorAll('.example-card');
    exampleCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });
});

// Function to validate inputs before generating story
function validateInputs() {
    let isValid = true;
    const inputs = document.querySelectorAll('.input-group input');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Add input validation to generate button
document.getElementById('generate-button').addEventListener('click', function(e) {
    if (!validateInputs()) {
        e.preventDefault();
        alert('Please fill in all fields before generating the story.');
        return;
    }
    generateStory();
});
