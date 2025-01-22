// Lenape Word Examples Data
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

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupExamples();
    setupMadlib1();
    setupMadlib2();
    setupCardFlips();
});

// Setup flip card functionality
function setupCardFlips() {
    document.querySelectorAll('.story-card').forEach(card => {
        const generateButton = card.querySelector('.generate-button');
        const resetButton = card.querySelector('.reset-button');
        
        if (generateButton) {
            generateButton.addEventListener('click', () => {
                card.classList.add('flipped');
            });
        }
        
        if (resetButton) {
            resetButton.addEventListener('click', () => {
                card.classList.remove('flipped');
            });
        }
    });

    document.querySelectorAll('.glossary-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
}

// Setup example cards
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
        
        exampleSection.appendChild(card);
    }
}

// Setup input fields for madlibs
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
    if (!container) return;

    const fields = [
        ['Enter a body part:', 'input1-bodypart'],
        ['Enter another body part:', 'input1-bodypart2'],
        ['Enter a number:', 'input1-number'],
        ['Enter a color:', 'input1-color'],
        ['Enter an emotion:', 'input1-emotion']
    ];
    
    fields.forEach(([label, id]) => createInputField(container, label, id));
}

function setupMadlib2() {
    const container = document.getElementById('madlib2-inputs');
    if (!container) return;

    const fields = [
        ['Enter a number:', 'input2-number'],
        ['Enter a friend\'s name:', 'input2-friend'],
        ['Enter a body part:', 'input2-bodypart'],
        ['Enter a color:', 'input2-color']
    ];
    
    fields.forEach(([label, id]) => createInputField(container, label, id));
}

// Generate story functions
function generateStory1() {
    const inputs = {
        bodypart: document.getElementById('input1-bodypart').value,
        bodypart2: document.getElementById('input1-bodypart2').value,
        number: document.getElementById('input1-number').value,
        color: document.getElementById('input1-color').value,
        emotion: document.getElementById('input1-emotion').value
    };
    
    const story = `One day, I was riding my bicycle when I hit my ${inputs.bodypart} 
                   on a tree branch. I fell and hurt my ${inputs.bodypart2}. 
                   It took ${inputs.number} days to heal. My bruise turned ${inputs.color}. 
                   Now I feel ${inputs.emotion} when I ride my bike.`;
                   
    document.getElementById('story1-output').textContent = story;
}

function generateStory2() {
    const inputs = {
        number: document.getElementById('input2-number').value,
        friend: document.getElementById('input2-friend').value,
        bodypart: document.getElementById('input2-bodypart').value,
        color: document.getElementById('input2-color').value
    };
    
    const story = `${inputs.number} days ago, my friend ${inputs.friend} and I went dancing. 
                   We danced until our ${inputs.bodypart} hurt! 
                   We wore matching ${inputs.color} shoes.`;
                   
    document.getElementById('story2-output').textContent = story;
}

// Flip card functions
function flipCard(button) {
    const card = button.closest('.story-card');
    card.classList.add('flipped');
}

function unflipCard(button) {
    const card = button.closest('.story-card');
    card.classList.remove('flipped');
}
