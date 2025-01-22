let currentStory = null;

document.addEventListener('DOMContentLoaded', function() {
    setupStoryButtons();
    setupGlossary();
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

function setupStoryButtons() {
    const storyButtons = [
        {
            title: 'The Bicycle Adventure',
            description: 'A thrilling tale of a bicycle ride gone wrong!'
        },
        {
            title: 'Dancing with Friends',
            description: 'A fun story about dancing and friendship!'
        }
    ];

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'story-buttons';
    
    storyButtons.forEach((story, index) => {
        const button = document.createElement('button');
        button.className = 'story-choice';
        button.innerHTML = `
            <h3>${story.title}</h3>
            <p>${story.description}</p>
        `;
        button.onclick = () => selectStory(index + 1);
        buttonContainer.appendChild(button);
    });

    document.querySelector('.stories-section').insertBefore(
        buttonContainer,
        document.querySelector('.story-card')
    );
}

function selectStory(storyNumber) {
    currentStory = storyNumber;
    
    // Update active button state
    document.querySelectorAll('.story-choice').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.story-choice:nth-child(${storyNumber})`).classList.add('active');
    
    // Reset card if it was flipped
    const card = document.getElementById('story-card');
    card.classList.remove('flipped');
    
    // Show input form
    setupInputFields(storyNumber);
    document.querySelector('.story-card-front').style.display = 'block';
    document.querySelector('.story-card-back').style.display = 'none';
}

function setupInputFields(storyNumber) {
    const fields = storyNumber === 1 ? [
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

    const container = document.getElementById('story-inputs');
    container.innerHTML = '';
    
    fields.forEach(([label, id]) => {
        const div = document.createElement('div');
        div.className = 'input-group';
        
        const labelElement = document.createElement('label');
        labelElement.textContent = label;
        
        const input = document.createElement('input');
        input.id = `input-${id}`;
        input.required = true;
        
        div.appendChild(labelElement);
        div.appendChild(input);
        container.appendChild(div);
    });

    // Show generate button
    document.querySelector('.generate-button').style.display = 'block';
}

function generateStory() {
    if (!currentStory) return;
    
    const inputs = {};
    const allFilled = Array.from(document.querySelectorAll('#story-inputs input')).every(input => {
        inputs[input.id.split('-')[1]] = input.value.trim();
        return input.value.trim() !== '';
    });
    
    if (!allFilled) {
        alert('Please fill in all fields!');
        return;
    }
    
    const story = createStory(currentStory, inputs);
    document.getElementById('story-output').innerHTML = highlightUserInputs(story, inputs);
    
    // Show story
    document.querySelector('.story-card-front').style.display = 'none';
    document.querySelector('.story-card-back').style.display = 'block';
}

function highlightUserInputs(story, inputs) {
    let highlightedStory = story;
    Object.values(inputs).forEach(input => {
        const regex = new RegExp(input, 'g');
        highlightedStory = highlightedStory.replace(regex, 
            `<span class="user-input">${input}</span>`);
    });
    return highlightedStory;
}

function createStory(storyNumber, inputs) {
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

function resetStory() {
    // Clear inputs
    document.querySelectorAll('#story-inputs input').forEach(input => {
        input.value = '';
    });
    
    // Reset story selection
    currentStory = null;
    document.querySelectorAll('.story-choice').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show initial view
    document.querySelector('.story-card-front').style.display = 'none';
    document.querySelector('.story-card-back').style.display = 'none';
    document.querySelector('.generate-button').style.display = 'none';
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
