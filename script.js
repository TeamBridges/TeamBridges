// Add debugging to check when script loads
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
    console.log('DOM Content Loaded - Starting setup');
    try {
        setupExamples();
        setupMadlib1();
        setupMadlib2();
        console.log('Setup completed successfully');
    } catch (error) {
        console.error('Error during setup:', error);
    }
});

function setupExamples() {
    console.log('Setting up examples');
    const exampleSection = document.getElementById('example-section');
    if (!exampleSection) {
        console.error('Example section not found');
        return;
    }
    
    for (const [category, text] of Object.entries(lenapeExamples)) {
        const card = document.createElement('div');
        card.className = 'glossary-card';
        
        card.innerHTML = `
            <div class="glossary-card-inner">
                <div class="glossary-card-front">
                    <h3>${category.replace('_', ' ').toUpperCase()}</h3>
                    <p>Click to see examples</p>
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
    console.log('Examples setup complete');
}

function createInputField(container, labelText, inputId) {
    if (!container) {
        console.error('Container not found for input field:', inputId);
        return;
    }
    
    const div = document.createElement('div');
    div.className = 'input-group';
    
    const label = document.createElement('label');
    label.textContent = labelText;
    label.htmlFor = inputId;
    
    const input = document.createElement('input');
    input.id = inputId;
    input.type = 'text';
    input.required = true;
    input.placeholder = 'Enter your word here';
    
    div.appendChild(label);
    div.appendChild(input);
    container.appendChild(div);
    console.log(`Input field created: ${inputId}`);
}

function setupMadlib1() {
    console.log('Setting up Madlib 1');
    const container = document.getElementById('madlib1-inputs');
    if (!container) {
        console.error('Could not find madlib1-inputs element');
        return;
    }
    
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
    console.log('Madlib 1 setup complete');
}

function setupMadlib2() {
    console.log('Setting up Madlib 2');
    const container = document.getElementById('madlib2-inputs');
    if (!container) {
        console.error('Could not find madlib2-inputs element');
        return;
    }
    
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
    console.log('Madlib 2 setup complete');
}

function flipAndGenerateStory(storyNumber) {
    console.log(`Generating story ${storyNumber}`);
    const card = document.querySelector(`#story-card-${storyNumber}`);
    if (!card) {
        console.error(`Story card ${storyNumber} not found`);
        return;
    }
    
    if (storyNumber === 1) {
        generateStory1();
    } else {
        generateStory2();
    }
    
    card.querySelector('.story-card-inner').classList.add('flipped');
    console.log(`Story ${storyNumber} generated and card flipped`);
}

function resetStoryCard(storyNumber) {
    console.log(`Resetting story ${storyNumber}`);
    const card = document.querySelector(`#story-card-${storyNumber}`);
    if (!card) {
        console.error(`Story card ${storyNumber} not found`);
        return;
    }
    
    // Clear inputs
    document.querySelectorAll(`#madlib${storyNumber}-inputs input`).forEach(input => {
        input.value = '';
    });
    
    // Clear story
    const storyOutput = document.querySelector(`#story${storyNumber}-output`);
    if (storyOutput) {
        storyOutput.innerHTML = '';
    }
    
    // Flip card back
    card.querySelector('.story-card-inner').classList.remove('flipped');
    console.log(`Story ${storyNumber} reset complete`);
}

function generateStory1() {
    console.log('Generating Story 1');
    const inputs = {
        bodypart: document.getElementById('input1-bodypart')?.value || '[body part]',
        bodypart2: document.getElementById('input1-bodypart2')?.value || '[body part]',
        number: document.getElementById('input1-number')?.value || '[number]',
        color: document.getElementById('input1-color')?.value || '[color]',
        emotion: document.getElementById('input1-emotion')?.value || '[emotion]',
        number2: document.getElementById('input1-number2')?.value || '[number]'
    };
    
    const story = `I was riding my bike, but I crashed! I scraped my ${inputs.bodypart} 
                   and broke my ${inputs.bodypart2}. I had to wear a cast for ${inputs.number} weeks. 
                   The weirdest part was that my ${inputs.bodypart} turned ${inputs.color}. 
                   I wasn't expecting that! It made me feel ${inputs.emotion}. 
                   I probably won't be able to ride my bike again for ${inputs.number2} days.`;
    
    const outputElement = document.getElementById('story1-output');
    if (outputElement) {
        outputElement.innerHTML = story;
        console.log('Story 1 generated successfully');
    } else {
        console.error('Story 1 output element not found');
    }
}

function generateStory2() {
    console.log('Generating Story 2');
    const inputs = {
        number: document.getElementById('input2-number')?.value || '[number]',
        friend: document.getElementById('input2-friend')?.value || '[friend]',
        bodypart: document.getElementById('input2-bodypart')?.value || '[body part]',
        bodypart2: document.getElementById('input2-bodypart2')?.value || '[body part]',
        color: document.getElementById('input2-color')?.value || '[color]'
    };
    
    const story = `${inputs.number} weeks ago, I was dancing with my friend ${inputs.friend}. 
                   They stepped on my ${inputs.bodypart} and hurt my ${inputs.bodypart2}. 
                   My ${inputs.bodypart} turned ${inputs.color}! 
                   I guess you can say ${inputs.friend} has two left feet!`;
    
    const outputElement = document.getElementById('story2-output');
    if (outputElement) {
        outputElement.innerHTML = story;
        console.log('Story 2 generated successfully');
    } else {
        console.error('Story 2 output element not found');
    }
}

// Add console log to confirm script loaded
console.log('Script loaded completely');
