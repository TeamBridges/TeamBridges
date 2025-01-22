// script.js
document.addEventListener('DOMContentLoaded', function() {
    setupGlossary();
    initializeStoryCards();
});

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

function initializeStoryCards() {
    const storyGrid = document.querySelector('.story-grid');
    if (!storyGrid) {
        console.error('Story grid not found');
        return;
    }

    // Clear existing content
    storyGrid.innerHTML = '';

    // Create two story cards
    for (let i = 1; i <= 2; i++) {
        const card = document.createElement('div');
        card.className = 'story-card';
        card.innerHTML = `
            <h3>Your Story</h3>
            <div class="story-content"></div>
            <button class="create-button" onclick="startNewStory(${i})">Create Another</button>
        `;
        storyGrid.appendChild(card);
    }
}

function startNewStory(storyNumber) {
    const card = document.querySelector(`#story${storyNumber}`);
    if (!card) return;

    const inputs = storyNumber === 1 ? [
        ['Enter a body part:', 'bodypart'],
        ['Enter another body part:', 'bodypart2'],
        ['Enter a number:', 'number'],
        ['Enter a color:', 'color'],
        ['Enter an emotion:', 'emotion']
    ] : [
        ['Enter a number:', 'number'],
        ['Enter a friend\'s name:', 'friend'],
        ['Enter a body part:', 'bodypart'],
        ['Enter a color:', 'color']
    ];

    setupInputFields(storyNumber, inputs);
}

function setupInputFields(storyNumber, fields) {
    const card = document.querySelector(`#story${storyNumber}`);
    if (!card) return;

    const inputSection = document.createElement('div');
    inputSection.className = 'input-section';

    fields.forEach(([label, id]) => {
        const div = document.createElement('div');
        div.className = 'input-group';
        div.innerHTML = `
            <label>${label}</label>
            <input type="text" id="input${storyNumber}-${id}">
        `;
        inputSection.appendChild(div);
    });

    const generateButton = document.createElement('button');
    generateButton.className = 'generate-button';
    generateButton.textContent = 'Generate Story';
    generateButton.onclick = () => generateStory(storyNumber);
    inputSection.appendChild(generateButton);

    card.innerHTML = '';
    card.appendChild(inputSection);
}

function generateStory(storyNumber) {
    const inputs = {};
    const card = document.querySelector(`#story${storyNumber}`);
    if (!card) return;

    const allInputs = card.querySelectorAll('input');
    let allFilled = true;

    allInputs.forEach(input => {
        const value = input.value.trim();
        if (!value) allFilled = false;
        inputs[input.id.split('-')[1]] = value;
    });

    if (!allFilled) {
        alert('Please fill in all fields!');
        return;
    }

    const story = createStoryText(storyNumber, inputs);
    displayStory(storyNumber, story);
}

function createStoryText(storyNumber, inputs) {
    if (storyNumber === 1) {
        return `One day, I was riding my bicycle when I hit my ${inputs.bodypart} 
                on a tree branch. I fell and hurt my ${inputs.bodypart2}. 
                It took ${inputs.number} days to heal. My bruise turned ${inputs.color}. 
                Now I feel ${inputs.emotion} when I ride my bike.`;
    } else {
        return `${inputs.number} days ago, my friend ${inputs.friend} and I went dancing. 
                We danced until our ${inputs.bodypart} hurt! 
                We wore matching ${inputs.color} shoes.`;
    }
}

function displayStory(storyNumber, story) {
    const card = document.querySelector(`#story${storyNumber}`);
    if (!card) return;

    card.innerHTML = `
        <h3>Your Story</h3>
        <div class="story-content">${story}</div>
        <button class="create-button" onclick="startNewStory(${storyNumber})">Create Another</button>
    `;
}

function setupGlossary() {
    const exampleSection = document.getElementById('example-section');
    if (!exampleSection) return;

    for (const [category, text] of Object.entries(lenapeExamples)) {
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
        
        exampleSection.appendChild(card);
    }
}
