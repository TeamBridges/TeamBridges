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

document.addEventListener('DOMContentLoaded', function() {
    setupMadLibs();
    setupGlossary();
});

function setupMadLibs() {
    setupInputFields(1, [
        ['Enter a body part:', 'bodypart'],
        ['Enter another body part:', 'bodypart2'],
        ['Enter a number:', 'number'],
        ['Enter a color:', 'color'],
        ['Enter an emotion:', 'emotion']
    ]);
    
    setupInputFields(2, [
        ['Enter a number:', 'number'],
        ['Enter a friend\'s name:', 'friend'],
        ['Enter a body part:', 'bodypart'],
        ['Enter a color:', 'color']
    ]);
}

function setupGlossary() {
    const exampleSection = document.getElementById('example-section');
    
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

function setupInputFields(storyNumber, fields) {
    const container = document.getElementById(`madlib${storyNumber}-inputs`);
    
    fields.forEach(([label, id]) => {
        const div = document.createElement('div');
        div.className = 'input-group';
        
        const labelElement = document.createElement('label');
        labelElement.textContent = label;
        
        const input = document.createElement('input');
        input.id = `input${storyNumber}-${id}`;
        input.required = true;
        
        div.appendChild(labelElement);
        div.appendChild(input);
        container.appendChild(div);
    });
}

function flipToEntries(storyNumber) {
    const card = document.querySelector(`#madlib${storyNumber}-inputs`).closest('.story-card');
    card.classList.add('to-entries');
}

function flipToStory(storyNumber) {
    const inputs = getStoryInputs(storyNumber);
    if (!validateInputs(inputs)) {
        alert('Please fill in all fields!');
        return;
    }
    
    const story = createStory(storyNumber, inputs);
    const outputElement = document.getElementById(`story${storyNumber}-output`);
    outputElement.innerHTML = highlightUserInputs(story, inputs);
    
    const card = document.querySelector(`#madlib${storyNumber}-inputs`).closest('.story-card');
    card.classList.add('to-story');
}

function resetStoryCard(storyNumber) {
    const card = document.querySelector(`#madlib${storyNumber}-inputs`).closest('.story-card');
    card.classList.remove('to-entries', 'to-story');
    
    // Clear inputs
    document.querySelectorAll(`#madlib${storyNumber}-inputs input`).forEach(input => {
        input.value = '';
    });
    
    // Clear story
    document.getElementById(`story${storyNumber}-output`).innerHTML = '';
}

function getStoryInputs(storyNumber) {
    const inputs = {};
    document.querySelectorAll(`#madlib${storyNumber}-inputs input`).forEach(input => {
        const id = input.id.split('-')[1];
        inputs[id] = input.value.trim();
    });
    return inputs;
}

function validateInputs(inputs) {
    return Object.values(inputs).every(value => value !== '');
}

function highlightUserInputs(story, inputs) {
    let highlightedStory = story;
    Object.values(inputs).forEach(input => {
        const regex = new RegExp(input, 'g');
        highlightedStory = highlightedStory.replace(regex, `<span class="user-input">${input}</span>`);
    });
    return highlightedStory;
}

function createStory(storyNumber, inputs) {
    if (storyNumber === 1) {
        return `One day, I was riding my bicycle when I hit my ${inputs.bodypart} on a tree branch. 
                I fell and hurt my ${inputs.bodypart2}. It took ${inputs.number} days to heal. 
                My bruise turned ${inputs.color}. Now I feel ${inputs.emotion} when I ride my bike.`;
    } else {
        return `${inputs.number} days ago, my friend ${inputs.friend} and I went dancing. 
                We danced until our ${inputs.bodypart} hurt! We wore matching ${inputs.color} shoes.`;
    }
}
