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
    palenaxk = five
    kwetash = six
    nishash = seven
    xash = eight
    peshkunk = nine
    telen = ten`,
    
    colors: `Colors in Lenape:
    seke (suhk-ay) = black
    ope = white
    machke = red
    wisawe = yellow
    askaske = green
    wape = grey`,
    
    body_parts: `Body Parts in Lenape:
    wixkwan = nose
    witun = mouth
    wihle = head
    wiske = eyes
    wikat = leg
    wichkwan = knee`,
    
    emotions: `Emotions in Lenape:
    nulhatam = happy
    kwitey = angry
    wawitam = sad
    wisachgihhele = excited
    kwishele = afraid`
};

// Setup functions
document.addEventListener('DOMContentLoaded', function() {
    setupExamples();
    setupMadlib1();
    setupMadlib2();
});

function setupExamples() {
    const exampleSection = document.getElementById('example-section');
    
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

function createInputField(container, labelText, inputId) {
    const div = document.createElement('div');
    div.className = 'input-group';
    
    const label = document.createElement('label');
    label.textContent = labelText;
    
    const input = document.createElement('input');
    input.id = inputId;
    input.required = true;
    
    div.appendChild(label);
    div.appendChild(input);
    container.appendChild(div);
}

function setupMadlib1() {
    const container = document.getElementById('madlib1-inputs');
    const fields = [
        ['Enter a body part:', 'input1-bodypart'],
        ['Enter another body part:', 'input1-bodypart2'],
        ['Enter a number:', 'input1-number'],
        ['Enter a color:', 'input1-color'],
        ['Enter an emotion:', 'input1-emotion'],
        ['Enter a different number:', 'input1-number2']
    ];
    
    fields.forEach(([label, inputId]) => {
        createInputField(container, label, inputId);
    });
}

function setupMadlib2() {
    const container = document.getElementById('madlib2-inputs');
    const fields = [
        ['Enter a number:', 'input2-number'],
        ['Enter a friend\'s name:', 'input2-friend'],
        ['Enter a body part:', 'input2-bodypart'],
        ['Enter another body part:', 'input2-bodypart2'],
        ['Enter a color:', 'input2-color']
    ];
    
    fields.forEach(([label, inputId]) => {
        createInputField(container, label, inputId);
    });
}

function flipAndGenerateStory(storyNumber) {
    const card = document.querySelector(`#madlib${storyNumber}-inputs`).closest('.story-card');
    if (storyNumber === 1) {
        generateStory1();
    } else {
        generateStory2();
    }
    card.classList.add('flipped');
}

function resetStoryCard(storyNumber) {
    const card = document.querySelector(`#madlib${storyNumber}-inputs`).closest('.story-card');
    card.classList.remove('flipped');
    // Clear inputs
    document.querySelectorAll(`#madlib${storyNumber}-inputs input`).forEach(input => {
        input.value = '';
    });
    // Clear story
    document.querySelector(`#story${storyNumber}-output`).innerHTML = '';
}

function generateStory1() {
    const inputs = {
        bodypart: document.getElementById('input1-bodypart').value,
        bodypart2: document.getElementById('input1-bodypart2').value,
        number: document.getElementById('input1-number').value,
        color: document.getElementById('input1-color').value,
        emotion: document.getElementById('input1-emotion').value,
        number2: document.getElementById('input1-number2').value
    };
