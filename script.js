// Debug logging
console.log('Script starting to load');

// Track current story
let currentStory = 1;

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    setupGlossary();
    selectStory(1); // Default to first story
});

function setupGlossary() {
    console.log('Setting up glossary');
    const wordExamples = document.querySelector('.word-examples');
    
    const glossaryData = {
        'Greetings in Lenape': [
            'Halì = Hello',
            'Kulamàlsi = How are you?',
            'Milì në luwàntewëlu = I am well'
        ],
        'Numbers in Lenape': [
            'Lënuwe = One',
            'Nisha = Two',
            'Nash = Three',
            'Newa = Four',
            'Palenaxk = Five'
        ],
        'Colors in Lenape': [
            'Sàpe = Black',
            'Wapá = White',
            'Mòtànk = Red',
            'Wëski = Yellow',
            'Oxkàshe = Green'
        ],
        'Body Parts in Lenape': [
            'Wikèhèn = Head',
            'Wikèhs = Mouth',
            'Wikuwàkane = Nose',
            'Wikuwe = Eyes',
            'Wikèk = Leg'
        ],
        'Emotions in Lenape': [
            'Nulitùn = Happy',
            'Wsìkwàk = Angry',
            'Wichin = Sad',
            'Wètëlaohake = Excited',
            'Wjánte = Afraid'
        ]
    };

    Object.entries(glossaryData).forEach(([category, words]) => {
        const card = document.createElement('div');
        card.className = 'flip-card';
        
        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h4>${category}</h4>
                    <p>Click to see translations</p>
                </div>
                <div class="flip-card-back">
                    <h4>${category}</h4>
                    <div class="example-list">
                        ${words.join('<br>')}
                    </div>
                </div>
            </div>
        `;
        
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
        
        wordExamples.appendChild(card);
    });
}

function selectStory(storyNumber) {
    console.log(`Selecting story ${storyNumber}`);
    currentStory = storyNumber;
    
    // Update story choice buttons
    document.querySelectorAll('.story-choice').forEach(button => {
        button.classList.remove('active');
    });
    
    const selectedButton = document.querySelector(`.story-choice[onclick="selectStory(${storyNumber})"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
    
    // Clear previous inputs and story
    clearForm();
}

function clearForm() {
    const form = document.getElementById('madlib-form');
    if (form) {
        form.reset();
    }
    
    const storyOutput = document.getElementById('story-output');
    if (storyOutput) {
        storyOutput.innerHTML = '';
        storyOutput.classList.add('hidden');
    }
}

function generateStory() {
    console.log('Generating story');
    const inputs = {
        bodypart: document.getElementById('bodypart').value,
        bodypart2: document.getElementById('bodypart2').value,
        number: document.getElementById('number').value,
        color: document.getElementById('color').value,
        emotion: document.getElementById('emotion').value
    };
    
    // Validate inputs
    if (Object.values(inputs).some(value => !value.trim())) {
        alert('Please fill in all fields!');
        return;
    }
    
    let story = '';
    if (currentStory === 1) {
        story = `One day, I was riding my bicycle when I hit my <span class="user-input">${inputs.bodypart}</span> 
                on a tree branch. I fell and hurt my <span class="user-input">${inputs.bodypart2}</span>. 
                It took <span class="user-input">${inputs.number}</span> days to heal. 
                My bruise turned <span class="user-input">${inputs.color}</span>. 
                Now I feel <span class="user-input">${inputs.emotion}</span> when I ride my bike.`;
    } else {
        story = `<span class="user-input">${inputs.number}</span> days ago, I went dancing with friends. 
                I accidentally stepped on my <span class="user-input">${inputs.bodypart}</span> and 
                hurt my <span class="user-input">${inputs.bodypart2}</span>! 
                My <span class="user-input">${inputs.bodypart}</span> turned <span class="user-input">${inputs.color}</span>. 
                I felt so <span class="user-input">${inputs.emotion}</span> about the whole thing.`;
    }
    
    const storyOutput = document.getElementById('story-output');
    if (storyOutput) {
        storyOutput.innerHTML = story;
        storyOutput.classList.remove('hidden');
    }
}

// Add console log to confirm script loaded
console.log('Script loaded completely');
