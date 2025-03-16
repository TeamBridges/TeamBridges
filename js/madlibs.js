// Story Templates and Configuration
const stories = {
    bicycle: {
        title: "The Bicycle Adventure",
        difficulty: "easy",
        template: "I was riding my bike, but I crashed! I scraped my {bodyPart1} and broke my {bodyPart2}. I had to wear a cast on my {bodyPart2} for {number1} weeks. The weirdest part was that my {bodyPart1} turned {color1}. I wasn't expecting that! It made me feel {emotion1}. I probably won't ride my bike again for {number2} days.",
        inputs: [
            { id: "bodyPart1", label: "Body Part #1 (Wikèhèn - Head)" },
            { id: "bodyPart2", label: "Body Part #2 (Wikèk - Leg)" },
            { id: "number1", label: "Number (Nisha - Two)" },
            { id: "color1", label: "Color (Machkeu - Red)" },
            { id: "emotion1", label: "Emotion (Wichin - Sad)" },
            { id: "number2", label: "Number (Nàxa - Three)" }
        ]
    },
    dancing: {
        title: "Dancing with Friends",
        difficulty: "easy",
        template: "Yesterday, I went dancing with my friends! I moved my {bodyPart1} and shook my {bodyPart2}. We danced for {number1} hours! My friend wore a {color1} shirt and {color2} pants. The music made me feel {emotion1}. We're going to dance again in {number2} days!",
        inputs: [
            { id: "bodyPart1", label: "Body Part #1 (Wikèhèn - Head)" },
            { id: "bodyPart2", label: "Body Part #2 (Wikèk - Leg)" },
            { id: "number1", label: "Number (Nisha - Two)" },
            { id: "color1", label: "Color #1 (Machkeu - Red)" },
            { id: "color2", label: "Color #2 (Wéskëk - Blue)" },
            { id: "emotion1", label: "Emotion (Nulitùn - Happy)" },
            { id: "number2", label: "Number (Nàxa - Three)" }
        ]
    },
    school: {
        title: "A Day at School",
        difficulty: "easy",
        template: "Today at school, I learned {number1} new Lenape words! My teacher wore a {color1} shirt. During recess, I hurt my {bodyPart1} while playing. My friend gave me a {color2} bandage, which made me feel {emotion1}. After school, we practiced counting to {number2}.",
        inputs: [
            { id: "number1", label: "Number (Nisha - Two)" },
            { id: "color1", label: "Color #1 (Machkeu - Red)" },
            { id: "bodyPart1", label: "Body Part (Wikèk - Leg)" },
            { id: "color2", label: "Color #2 (Wéskëk - Blue)" },
            { id: "emotion1", label: "Emotion (Nulitùn - Happy)" },
            { id: "number2", label: "Number (Nàxa - Three)" }
        ]
    },
    weather: {
        title: "The Weather Today",
        difficulty: "medium",
        template: "The weather was strange today! The sky turned {color1}, and it rained for {number1} hours. My {bodyPart1} got wet, and my {bodyPart2} was cold. The wind made me feel {emotion1}. The forecast says it will be {color2} skies for the next {number2} days.",
        inputs: [
            { id: "color1", label: "Color #1 (Wéskëk - Blue)" },
            { id: "number1", label: "Number (Nisha - Two)" },
            { id: "bodyPart1", label: "Body Part #1 (Wikèhèn - Head)" },
            { id: "bodyPart2", label: "Body Part #2 (Wikèk - Leg)" },
            { id: "emotion1", label: "Emotion (Wjánte - Afraid)" },
            { id: "color2", label: "Color #2 (Wisaweu - Yellow)" },
            { id: "number2", label: "Number (Nàxa - Three)" }
        ]
    },
        doctor: {
        title: "Going to the Doctor",
        difficulty: "medium",
        template: "Today, I went to the doctor because my {bodyPart1} was hurting. The doctor asked me how long I had been feeling this way, and I told him it started hurting {number1} days ago and was turning {color1} and {color2}. He immediately told me to stick out my {bodyPart2} and close my {bodyPart3}. The doctor looked at my {bodyPart1} and said it looked a little {color3}. I was worried, so he said we needed to do a few tests. First, he took {number2} x-rays of my {bodyPart4}. Then he measured the size of my {bodyPart5} with a {color4} measuring tape.",
        inputs: [
            { id: "bodyPart1", label: "Body Part #1 (Wikèhèn - Head)" },
            { id: "number1", label: "Number (Days)" },
            { id: "color1", label: "Color #1 (Machkeu - Red)" },
            { id: "color2", label: "Color #2 (Sùkw - Black)" },
            { id: "bodyPart2", label: "Body Part #2 (Wikèhs - Mouth)" },
            { id: "bodyPart3", label: "Body Part #3 (Wikuwe - Eyes)" },
            { id: "color3", label: "Color #3 (Wisaweu - Yellow)" },
            { id: "number2", label: "Number (X-rays)" },
            { id: "bodyPart4", label: "Body Part #4 (Wikèk - Leg)" },
            { id: "bodyPart5", label: "Body Part #5 (Wiske - Hand)" },
            { id: "color4", label: "Color #4 (Wéskëk - Blue)" }
        ]
    },
    river: {
        title: "A Day at the River",
        difficulty: "medium",
        template: "While playing in the {color1} river, I looked down at my {bodyPart1} and saw a {animal1} swimming by! It had {number1} {bodyPartPlural1}. I reached down with my {bodyPart2} to touch it, but it swam away quickly. My {bodyPart3} got wet, and I felt {emotion1}. Next time I'll bring my {color2} boots to keep my {bodyPart4} dry.",
        inputs: [
            { id: "color1", label: "Color #1 (Wéskëk - Blue)" },
            { id: "bodyPart1", label: "Body Part #1 (Wikèk - Leg)" },
            { id: "animal1", label: "Animal" },
            { id: "number1", label: "Number (Nisha - Two)" },
            { id: "bodyPartPlural1", label: "Body Parts (Plural)" },
            { id: "bodyPart2", label: "Body Part #2 (Wiske - Hand)" },
            { id: "bodyPart3", label: "Body Part #3 (Wikèhèn - Head)" },
            { id: "emotion1", label: "Emotion (Nulitùn - Happy)" },
            { id: "color2", label: "Color #2 (Sùkw - Black)" },
            { id: "bodyPart4", label: "Body Part #4 (Wikèk - Leg)" }
        ]
    }
};

// Initialize variables
let currentStory = null;


// Function to select a story
function selectStory(storyId) {
    // Reset any previous story
    resetStory();
    
    // Set current story
    currentStory = stories[storyId];
    
    // Update story title
    document.getElementById('selected-story-title').textContent = currentStory.title;
    
    // Create input fields with modified layout
    const inputContainer = document.getElementById('input-container');
    currentStory.inputs.forEach(input => {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';
        
        // Create label with just the main word type
        const labelMain = document.createElement('label');
        const labelText = input.label.split('(')[0].trim(); // Get text before parentheses
        labelMain.textContent = labelText;
        
        // Create input field
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.id = input.id;
        inputField.required = true;
        
        // Create example text
        const example = document.createElement('span');
        example.className = 'input-example';
        const exampleText = input.label.match(/\((.*?)\)/); // Get text in parentheses
        if (exampleText) {
            example.textContent = `(Ex. ${exampleText[1]})`;
        }
        
        // Append elements in desired order
        inputGroup.appendChild(labelMain);
        inputGroup.appendChild(inputField);
        inputGroup.appendChild(example);
        inputContainer.appendChild(inputGroup);
    });
    
    // Show generate button
    document.getElementById('generate-button').classList.remove('hidden');
}


// Function to generate story
function generateStory() {
    let storyText = currentStory.template;
    const inputs = document.querySelectorAll('#input-container input');
    let allFilled = true;
    
    inputs.forEach(input => {
        const value = input.value.trim();
        if (!value) {
            allFilled = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
            storyText = storyText.replace(`{${input.id}}`, value);
        }
    });
    
    if (!allFilled) {
        alert('Please fill in all the blanks!');
        return;
    }
    
    // Show the story
    const storyOutput = document.getElementById('story-output');
    storyOutput.textContent = storyText;
    storyOutput.classList.remove('hidden');
    
    // Show reset button and hide generate button
    document.getElementById('reset-button').classList.remove('hidden');
    document.getElementById('generate-button').classList.add('hidden');
}

// Function to reset the story form
function resetStory() {
    document.getElementById('input-container').innerHTML = '';
    document.getElementById('story-output').classList.add('hidden');
    document.getElementById('reset-button').classList.add('hidden');
    document.getElementById('generate-button').classList.add('hidden');
    document.getElementById('selected-story-title').textContent = 'Select a Story';
    currentStory = null;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for buttons
    document.getElementById('generate-button').addEventListener('click', generateStory);
    document.getElementById('reset-button').addEventListener('click', resetStory);

    // Initialize card flip functionality
    document.querySelectorAll('.example-card').forEach(card => {
        card.addEventListener('click', () => {
            card.querySelector('.card-inner').classList.toggle('flipped');
        });
    });
});
    
