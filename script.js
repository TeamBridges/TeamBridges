// Debug logging
console.log('Script starting to load');

// Lenape examples data structure
const lenapeExamples = {
    greetings: `Greetings in Lenape:
    He! (hay) = Hello!
    Kulamalsi hech? (kule-ah-mahl-see huch) = How are you?
    Nulamalsi (nule-ah-mahl-see) = I am well.`,
    
    numbers: `Numbers in Lenape:
    kweti (kwuh-tee) = one
    nisha = two
    naxa = three
    newa = four
    palenaxk = five`,
    
    colors: `Colors in Lenape:
    seke (suhk-ay) = black
    ope = white
    machke = red
    wisawe = yellow
    askaske = green`,
    
    body_parts: `Body Parts in Lenape:
    wixkwan = nose
    witun = mouth
    wihle = head
    wiske = eyes
    wikat = leg`,
    
    emotions: `Emotions in Lenape:
    nulhatam = happy
    kwitey = angry
    wawitam = sad
    wisachgihhele = excited
    kwishele = afraid`
};

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    initializeStoryCards();
    setupGlossary();
});

function initializeStoryCards() {
    console.log('Initializing story cards');
    
    // Story data
    const stories = [
        {
            id: 1,
            title: "The Bicycle Adventure",
            description: "A thrilling tale of a bicycle ride gone wrong!",
            inputs: [
                ['Enter a body part:', 'bodypart'],
                ['Enter another body part:', 'bodypart2'],
                ['Enter a number:', 'number'],
                ['Enter a color:', 'color'],
                ['Enter an emotion:', 'emotion']
            ]
        },
        {
            id: 2,
            title: "Dancing with Friends",
            description: "A fun story about dancing and friendship!",
            inputs: [
                ['Enter a number:', 'number'],
                ['Enter a friend\'s name:', 'friend'],
                ['Enter a body part:', 'bodypart'],
                ['Enter a color:', 'color']
            ]
        }
    ];

    // Create story cards
    stories.forEach(story => {
        setupStoryCard(story);
    });
}

function setupStoryCard(story) {
    console.log(`Setting up story card ${story.id}`);
    const card = document.getElementById(`story-card-${story.id}`);
    
    if (!card) {
        console.error(`Story card ${story.id} not found`);
        return;
    }

    // Setup input fields
    const inputContainer = document.getElementById(`madlib${story.id}-inputs`);
    if (inputContainer) {
        story.inputs.forEach(([label, id]) => {
            createInputField(inputContainer, label, `input${story.id}-${id}`);
        });
    }
}

function createInputField(container, labelText, inputId) {
    console.log(`Creating input field: ${inputId}`);
    const div = document.createElement('div');
    div.className = 'input-group';
    
    const label = document.createElement('label');
    label.textContent = labelText;
    label.htmlFor = inputId;
    
    const input = document.createElement('input');
    input.id = inputId;
    input.type = 'text';
    input.required = true;
    
    div.appendChild(label);
    div.appendChild(input);
    container.appendChild(div);
}

function flipToEntries(storyNumber) {
    console.log(`Flipping to entries for story ${storyNumber}`);
    const card = document.getElementById(`story-card-${storyNumber}`);
    if (card) {
        card.classList.remove('to-story');
        card.classList.add('to-entries');
    }
}

function flipToStory(storyNumber) {
    console.log(`Flipping to story ${storyNumber}`);
    const inputs = getStoryInputs(storyNumber);
    
    if (!validateInputs(inputs)) {
        alert('Please fill in all fields!');
        return;
    }
    
    generateStory(storyNumber, inputs);
    
    const card = document.getElementById(`story-card-${storyNumber}`);
    if (card) {
        card.classList.remove('to-entries');
        card.classList.add('to-story');
    }
}

function resetStoryCard(storyNumber) {
    console.log(`Resetting story ${storyNumber}`);
    const card = document.getElementById(`story-card-${storyNumber}`);
    if (card) {
        // Clear inputs
        document.querySelectorAll(`#madlib${storyNumber}-inputs input`).forEach(input => {
            input.value = '';
        });
        
        // Clear story
        const storyOutput = document.getElementById(`story${storyNumber}-output`);
        if (storyOutput) {
            storyOutput.textContent = '';
        }
        
        // Reset card position
        card.classList.remove('to-entries', 'to-story');
    }
}

function getStoryInputs(storyNumber) {
    const inputs = {};
    document.querySelectorAll(`#madlib${storyNumber}-inputs input`).forEach(input => {
        inputs[input.id.split('-')[1]] = input.value.trim();
    });
    return inputs;
}

function validateInputs(inputs) {
    return Object.values(inputs).every(value => value !== '');
}

function generateStory(storyNumber, inputs) {
    console.log(`Generating story ${storyNumber}`);
    let story = '';
    
    if (storyNumber === 1) {
        story = `One day, I was riding my bicycle when I hit my ${inputs.bodypart} 
                 on a tree branch. I fell and hurt my ${inputs.bodypart2}. 
                 It took ${inputs.number} days to heal. My bruise turned ${inputs.color}. 
                 Now I feel ${inputs.emotion} when I ride my bike.`;
    } else {
        story = `${inputs.number} days ago, my friend ${inputs.friend} and I went dancing. 
                 We danced until our ${inputs.bodypart} hurt! 
                 We wore matching ${inputs.color} shoes.`;
    }
    
    const outputElement = document.getElementById(`story${storyNumber}-output`);
    if (outputElement) {
        outputElement.textContent = story;
    }
}

function setupGlossary() {
    console.log('Setting up glossary');
    const exampleSection = document.getElementById('example-section');
    
    if (!exampleSection) {
        console.error('Glossary section not found');
        return;
    }
    
    for (const [category, text] of Object.entries(lenapeExamples)) {
        const card = createGlossaryCard(category, text);
        exampleSection.appendChild(card);
    }
}

function createGlossaryCard(category, text) {
    const card = document.createElement('div');
    card.className = 'glossary-card';
    
    card.innerHTML = `
        <div class="glossary-card-inner">
            <div class="glossary-card-front">
                <h3>${category.replace('_', ' ').toUpperCase()}</h3>
            </div>
            <div class="glossary-card-back">
                <div class="glossary-content">
                    ${text.replace(/\n/g, '<br>')}
                </div>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
    
    return card;
}

// Add console log to confirm script loaded
console.log('Script loaded completely');
