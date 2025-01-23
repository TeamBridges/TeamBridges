// Story templates and input requirements
const storyTemplates = {
    1: {
        title: "The Bicycle Adventure",
        inputs: [
            { label: "Enter a body part:", type: "bodyPart" },
            { label: "Enter another body part:", type: "bodyPart" },
            { label: "Enter a number:", type: "number" },
            { label: "Enter a color:", type: "color" },
            { label: "Enter an emotion:", type: "emotion" },
            { label: "Enter a different number:", type: "number" }
        ],
        template: "I was riding my bike, but I crashed! I scraped my {0} and broke my {1}. I had to wear a cast for {2} weeks. The weirdest part was that my {0} turned {3}! I wasn't expecting that! It made me feel {4}. I probably won't be able to ride my bike again for {5} days."
    },
    2: {
        title: "Dancing with Friends",
        inputs: [
            { label: "Enter a number:", type: "number" },
            { label: "Enter a friend's name:", type: "text" },
            { label: "Enter a body part:", type: "bodyPart" },
            { label: "Enter another body part:", type: "bodyPart" },
            { label: "Enter a color:", type: "color" }
        ],
        template: "{1} weeks ago, I was dancing with my friend {2}. They stepped on my {3} and hurt my {4}. My {3} turned {5}! I guess you can say {2} has two left feet!"
    }
    // Add more story templates here for stories 3-6
};

// Current story selection
let currentStory = null;

// Initialize when document loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Mad Libs Generator');
    setupStoryChoices();
    setupGlossaryCards();
});

function setupStoryChoices() {
    const storyChoices = document.querySelectorAll('.story-choice');
    storyChoices.forEach(choice => {
        choice.addEventListener('click', function() {
            const storyId = this.getAttribute('onclick').match(/\d+/)[0];
            selectStory(parseInt(storyId));
        });
    });
}

function selectStory(storyId) {
    console.log(`Selecting story ${storyId}`);
    currentStory = storyTemplates[storyId];
    
    // Update UI
    document.querySelectorAll('.story-choice').forEach(choice => {
        choice.classList.remove('active');
    });
    document.querySelector(`[onclick="selectStory(${storyId})"]`).classList.add('active');
    
    // Show input fields
    const inputFields = document.getElementById('input-fields');
    inputFields.innerHTML = '';
    
    currentStory.inputs.forEach((input, index) => {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';
        
        const label = document.createElement('label');
        label.textContent = input.label;
        
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.id = `story-input-${index}`;
        inputElement.required = true;
        
        inputGroup.appendChild(label);
        inputGroup.appendChild(inputElement);
        inputFields.appendChild(inputGroup);
    });
    
    // Show generate button
    document.getElementById('generate-button').style.display = 'block';
    
    // Update title
    document.getElementById('selected-story-title').textContent = currentStory.title;
}

function generateStory() {
    if (!currentStory) {
        alert('Please select a story first!');
        return;
    }
    
    // Collect input values
    const inputs = Array.from({ length: currentStory.inputs.length }, (_, i) => 
        document.getElementById(`story-input-${i}`).value.trim()
    );
    
    // Check if all inputs are filled
    if (inputs.some(input => !input)) {
        alert('Please fill in all fields!');
        return;
    }
    
    // Generate story
    let story = currentStory.template;
    inputs.forEach((input, index) => {
        story = story.replace(`{${index}}`, input);
    });
    
    // Display story
    document.getElementById('story-output').innerHTML = story;
    
    // Show output section
    document.querySelector('.story-output-section').style.display = 'block';
}

function resetStory() {
    // Clear inputs
    document.getElementById('input-fields').innerHTML = '';
    
    // Clear story output
    document.getElementById('story-output').innerHTML = '';
    
    // Reset story selection
    currentStory = null;
    
    // Reset UI
    document.querySelectorAll('.story-choice').forEach(choice => {
        choice.classList.remove('active');
    });
    
    document.getElementById('selected-story-title').textContent = 'Select a Story';
    document.getElementById('generate-button').style.display = 'none';
    document.querySelector('.story-output-section').style.display = 'none';
}

// Glossary card functionality
function setupGlossaryCards() {
    const glossaryCards = document.querySelectorAll('.glossary-card');
    glossaryCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });
}

// Helper function to format story text
function formatStoryText(text) {
    return text.replace(/\n/g, '<br>');
}

// Error handling
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error('Error: ', msg, '\nURL: ', url, '\nLine: ', lineNo, '\nColumn: ', columnNo, '\nError object: ', error);
    return false;
};

console.log('Mad Libs Generator script loaded successfully');
