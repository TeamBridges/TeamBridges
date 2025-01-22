// Lenape examples data
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
});

// Show story form
function showStoryForm(storyNumber) {
    // Hide all story forms first
    document.querySelectorAll('.story-form').forEach(form => {
        form.classList.add('hidden');
    });
    
    // Show selected story form
    const selectedForm = document.getElementById(`story-form-${storyNumber}`);
    selectedForm.classList.remove('hidden');
    
    // Clear any previous inputs and output
    clearStoryForm(storyNumber);
}

// Clear story form
function clearStoryForm(storyNumber) {
    // Clear inputs
    document.querySelectorAll(`#madlib${storyNumber}-inputs input`).forEach(input => {
        input.value = '';
    });
    
    // Hide output
    const output = document.getElementById(`story${storyNumber}-output`);
    output.classList.add('hidden');
    output.textContent = '';
}

// Toggle glossary content
function toggleGlossary(category) {
    const content = document.getElementById('glossary-content');
    
    if (content.dataset.currentCategory === category && !content.classList.contains('hidden')) {
        // If clicking the same category and content is visible, hide it
        content.classList.add('hidden');
    } else {
        // Show content for the selected category
        content.innerHTML = lenapeExamples[category].replace(/\n/g, '<br>');
        content.dataset.currentCategory = category;
        content.classList.remove('hidden');
    }
}

// Setup input fields
function setupInputFields(storyNumber, fields) {
    const container = document.getElementById(`madlib${storyNumber}-inputs`);
    if (!container) return;

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

// Generate story
function generateStory(storyNumber) {
    // Validate inputs
    const inputs = getStoryInputs(storyNumber);
    if (!validateInputs(inputs)) {
        alert('Please fill in all fields!');
        return;
    }
    
    // Generate and display story
    const story = createStory(storyNumber, inputs);
    const outputElement = document.getElementById(`story${storyNumber}-output`);
    outputElement.textContent = story;
    outputElement.classList.remove('hidden');
}

// Get story inputs
function getStoryInputs(storyNumber) {
    const inputs = {};
    document.querySelectorAll(`#madlib${storyNumber}-inputs input`).forEach(input => {
        inputs[input.id.split('-')[1]] = input.value.trim();
    });
    return inputs;
}

// Validate inputs
function validateInputs(inputs) {
    return Object.values(inputs).every(value => value !== '');
}

// Create story text
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
