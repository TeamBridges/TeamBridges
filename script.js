// Story Templates with all six stories
const stories = {
    1: {
        title: "The Bicycle Adventure",
        description: "A thrilling tale about a bicycle ride!",
        inputs: [
            { label: "Enter a body part:", id: "bodyPart1", placeholder: "e.g., Wikèhèn (head)" },
            { label: "Enter another body part:", id: "bodyPart2", placeholder: "e.g., Wikèk (leg)" },
            { label: "Enter a number:", id: "number1", placeholder: "e.g., Nisha (two)" },
            { label: "Enter a color:", id: "color1", placeholder: "e.g., Mòtànk (red)" },
            { label: "Enter an emotion:", id: "emotion1", placeholder: "e.g., Nulitùn (happy)" }
        ],
        template: "I was riding my bike when I hit my {bodyPart1} on a tree branch. I fell and hurt my {bodyPart2}. It took {number1} days to heal. My bruise turned {color1}. Now I feel {emotion1} when I ride my bike."
    },
    2: {
        title: "Dancing with Friends",
        description: "A fun story about dancing and friendship!",
        inputs: [
            { label: "Enter a number:", id: "number1", placeholder: "e.g., Nash (three)" },
            { label: "Enter a body part:", id: "bodyPart1", placeholder: "e.g., Wikèk (leg)" },
            { label: "Enter another body part:", id: "bodyPart2", placeholder: "e.g., Wikèhèn (head)" },
            { label: "Enter a color:", id: "color1", placeholder: "e.g., Wapá (white)" },
            { label: "Enter an emotion:", id: "emotion1", placeholder: "e.g., Wètëlaohake (excited)" }
        ],
        template: "{number1} friends were dancing when I moved my {bodyPart1} too fast. I hit my {bodyPart2}! My {color1} outfit got wrinkled. I felt {emotion1}!"
    },
    3: {
        title: "A Day at School",
        description: "Learning and playing with friends!",
        inputs: [
            { label: "Enter a color:", id: "color1", placeholder: "e.g., Oxkàshe (green)" },
            { label: "Enter a body part:", id: "bodyPart1", placeholder: "e.g., Wikuwe (eyes)" },
            { label: "Enter a number:", id: "number1", placeholder: "e.g., Palenaxk (five)" },
            { label: "Enter another body part:", id: "bodyPart2", placeholder: "e.g., Wikèhs (mouth)" },
            { label: "Enter an emotion:", id: "emotion1", placeholder: "e.g., Wichin (sad)" }
        ],
        template: "I wore my {color1} shirt to school. My {bodyPart1} were tired after reading {number1} books. I used my {bodyPart2} to tell stories. I felt {emotion1} when school ended."
    },
    4: {
        title: "The Weather Today",
        description: "An adventure in different weather!",
        inputs: [
            { label: "Enter an emotion:", id: "emotion1", placeholder: "e.g., Wsìkwàk (angry)" },
            { label: "Enter a color:", id: "color1", placeholder: "e.g., Sàpe (black)" },
            { label: "Enter a body part:", id: "bodyPart1", placeholder: "e.g., Wikuwàkane (nose)" },
            { label: "Enter a number:", id: "number1", placeholder: "e.g., Lënuwe (one)" }
        ],
        template: "I felt {emotion1} when I saw the {color1} clouds. The rain hit my {bodyPart1} as I counted {number1} thunder claps."
    },
    5: {
        title: "Playing Games",
        description: "Fun and games with Lenape words!",
        inputs: [
            { label: "Enter a number:", id: "number1", placeholder: "e.g., Newa (four)" },
            { label: "Enter a body part:", id: "bodyPart1", placeholder: "e.g., Wikèk (leg)" },
            { label: "Enter a color:", id: "color1", placeholder: "e.g., Wëski (yellow)" },
            { label: "Enter an emotion:", id: "emotion1", placeholder: "e.g., Nulitùn (happy)" }
        ],
        template: "We played games for {number1} hours. My {bodyPart1} got tired from jumping. I won the {color1} prize and felt {emotion1}!"
    },
    6: {
        title: "Getting Ready",
        description: "Morning routine adventure!",
        inputs: [
            { label: "Enter a body part:", id: "bodyPart1", placeholder: "e.g., Wikèhèn (head)" },
            { label: "Enter a color:", id: "color1", placeholder: "e.g., Mòtànk (red)" },
            { label: "Enter another body part:", id: "bodyPart2", placeholder: "e.g., Wikèhs (mouth)" },
            { label: "Enter an emotion:", id: "emotion1", placeholder: "e.g., Wètëlaohake (excited)" }
        ],
        template: "I brushed my {bodyPart1} in the morning. Put on my {color1} clothes. Used my {bodyPart2} to eat breakfast. I felt {emotion1} about the day ahead!"
    }
};

// Function to select and display story input fields
function selectStory(storyId) {
    const story = stories[storyId];
    if (!story) return;

    // Clear previous inputs
    const inputContainer = document.getElementById('input-container');
    inputContainer.innerHTML = '';

    // Create form for selected story
    const form = document.createElement('form');
    form.id = 'story-form';

    // Add title
    const title = document.createElement('h3');
    title.textContent = story.title;
    form.appendChild(title);

    // Create input fields
    story.inputs.forEach(input => {
        const div = document.createElement('div');
        div.className = 'input-group';

        const label = document.createElement('label');
        label.textContent = input.label;
        label.htmlFor = input.id;

        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.id = input.id;
        inputField.placeholder = input.placeholder;
        inputField.required = true;

        div.appendChild(label);
        div.appendChild(inputField);
        form.appendChild(div);
    });

    // Add form to container
    inputContainer.appendChild(form);

    // Show generate button
    const generateButton = document.getElementById('generate-button');
    generateButton.style.display = 'block';

    // Hide any previous story output
    const storyOutput = document.getElementById('story-output');
    storyOutput.classList.add('hidden');
}

// Function to generate the story
function generateStory() {
    const storyId = document.querySelector('.story-choice.active').dataset.storyId;
    const story = stories[storyId];
    if (!story) return;

    const inputs = {};
    let allFilled = true;

    // Collect all input values
    story.inputs.forEach(input => {
        const value = document.getElementById(input.id)?.value.trim();
        if (!value) {
            allFilled = false;
        }
        inputs[input.id] = value;
    });

    if (!allFilled) {
        alert('Please fill in all fields!');
        return;
    }

    // Generate story text
    let storyText = story.template;
    Object.keys(inputs).forEach(key => {
        storyText = storyText.replace(`{${key}}`, inputs[key]);
    });

    // Display story
    const storyOutput = document.getElementById('story-output');
    storyOutput.innerHTML = storyText;
    storyOutput.classList.remove('hidden');
}

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add click listeners to story choices
    document.querySelectorAll('.story-choice').forEach(button => {
        button.addEventListener('click', function() {
            const storyId = this.dataset.storyId;
            
            // Remove active class from all buttons
            document.querySelectorAll('.story-choice').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Generate input fields for selected story
            selectStory(storyId);
        });
    });
});
