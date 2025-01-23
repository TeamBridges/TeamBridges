// Story templates with their required inputs
const storyTemplates = {
    1: {
        title: "The Bicycle Adventure",
        description: "A thrilling tale about a bicycle ride!",
        inputs: [
            { label: "Enter a body part:", type: "bodyPart", placeholder: "e.g., Wikèhèn (head)" },
            { label: "Enter another body part:", type: "bodyPart", placeholder: "e.g., Wikèk (leg)" },
            { label: "Enter a number:", type: "number", placeholder: "e.g., Nisha (two)" },
            { label: "Enter a color:", type: "color", placeholder: "e.g., Mòtànk (red)" },
            { label: "Enter an emotion:", type: "emotion", placeholder: "e.g., Nulitùn (happy)" }
        ],
        template: "I was riding my bike, but I crashed! I scraped my {0} and broke my {1}. I had to wear a cast for {2} weeks. The weirdest part was that my {0} turned {3}! It made me feel {4}."
    },
    2: {
        title: "Dancing with Friends",
        description: "A fun story about dancing and friendship!",
        inputs: [
            { label: "Enter a number:", type: "number", placeholder: "e.g., Nisha (two)" },
            { label: "Enter a friend's name:", type: "text" },
            { label: "Enter a body part:", type: "bodyPart", placeholder: "e.g., Wikèk (leg)" },
            { label: "Enter a color:", type: "color", placeholder: "e.g., Mòtànk (red)" },
            { label: "Enter an emotion:", type: "emotion", placeholder: "e.g., Wètëlaohake (excited)" }
        ],
        template: "{1} weeks ago, I was dancing with my friend {2}. They stepped on my {3} and it turned {4}! I felt so {5}!"
    },
    3: {
        title: "A Day at School",
        description: "Learning and playing with friends!",
        // Add inputs and template for story 3
    },
    4: {
        title: "The Weather Today",
        description: "An adventure in different weather!",
        // Add inputs and template for story 4
    },
    5: {
        title: "Playing Games",
        description: "Fun and games with Lenape words!",
        // Add inputs and template for story 5
    },
    6: {
        title: "Getting Ready",
        description: "Morning routine adventure!",
        // Add inputs and template for story 6
    }
};

// Lenape word examples
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

let currentStory = null;

// Initialize when document loads
document.addEventListener('DOMContentLoaded', function() {
    setupStoryCards();
    setupWordExamples();
});

function setupStoryCards() {
    const storyGrid = document.querySelector('.story-grid');
    
    Object.entries(storyTemplates).forEach(([id, story]) => {
        const card = document.createElement('div');
        card.className = 'story-card';
        card.dataset.storyId = id;
        
        card.innerHTML = `
            <h3>${story.title}</h3>
            <p>${story.description}</p>
        `;
        
        card.addEventListener('click', () => selectStory(id));
        storyGrid.appendChild(card);
    });
}

function selectStory(storyId) {
    currentStory = storyTemplates[storyId];
    
    // Update selected story title
    document.getElementById('selected-story-title').textContent = currentStory.title;
    
    // Clear and create input fields
    const inputContainer = document.getElementById('input-container');
    inputContainer.innerHTML = '';
    
    currentStory.inputs.forEach((input, index) => {
        const div = document.createElement('div');
        div.className = 'input-group';
        
        const label = document.createElement('label');
        label.textContent = input.label;
        
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.id = `story-input-${index}`;
        inputElement.placeholder = input.placeholder || '';
        
        div.appendChild(label);
        div.appendChild(inputElement);
        inputContainer.appendChild(div);
    });
    
    // Show generate button
    document.getElementById('generate-button').style.display = 'block';
}

function generateStory() {
    if (!currentStory) return;
    
    const inputs = currentStory.inputs.map((_, index) => 
        document.getElementById(`story-input-${index}`).value.trim()
    );
    
    if (inputs.some(input => !input)) {
        alert('Please fill in all fields!');
        return;
    }
    
    let story = currentStory.template;
    inputs.forEach((input, index) => {
        story = story.replace(`{${index}}`, input);
    });
    
    document.getElementById('story-output').innerHTML = story;
    document.getElementById('reset-button').style.display = 'block';
}

function resetStory() {
    currentStory = null;
    document.getElementById('selected-story-title').textContent = 'Select a Story';
    document.getElementById('input-container').innerHTML = '';
    document.getElementById('story-output').innerHTML = '';
    document.getElementById('generate-button').style.display = 'none';
    document.getElementById('reset-button').style.display = 'none';
}

function setupWordExamples() {
    const exampleGrid = document.querySelector('.example-grid');
    
    Object.entries(lenapeWords).forEach(([category, data]) => {
        const card = document.createElement('div');
        card.className = 'example-card';
        card.id = category;
        
        const wordList = Object.entries(data.words)
            .map(([lenape, english]) => `<p>${lenape} = ${english}</p>`)
            .join('');
            
        card.innerHTML = `
            <h3>${data.title}</h3>
            <div class="word-list">
                ${wordList}
            </div>
        `;
        
        exampleGrid.appendChild(card);
    });
}
