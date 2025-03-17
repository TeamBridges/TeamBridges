// Story Templates and Configuration
const stories = {
    bicycle: {
        title: "The Bicycle Adventure",
        difficulty: "easy",
        template: "I was riding my bike, but I crashed! I scraped my {bodyPart1} and broke my {bodyPart2}. I had to wear a cast on my {bodyPart2} for {number1} weeks. The weirdest part was that my {bodyPart1} turned {color1}. I wasn't expecting that! It made me feel {emotion1}. I probably won't ride my bike again for {number2} days.",
        inputs: [
            { id: "bodyPart1", label: "Body Part #1", placeholder: "Ex. Wikèhèn" },
            { id: "bodyPart2", label: "Body Part #2", placeholder: "Ex. Wikèk" },
            { id: "number1", label: "Number", placeholder: "Ex. Nisha" },
            { id: "color1", label: "Color", placeholder: "Ex. Machkeu" },
            { id: "emotion1", label: "Emotion", placeholder: "Ex. Wichin" },
            { id: "number2", label: "Number", placeholder: "Ex. Nàxa" }
        ]
    },
    dancing: {
        title: "Dancing with Friends",
        difficulty: "easy",
        template: "Yesterday, I went dancing with my friends! I moved my {bodyPart1} and shook my {bodyPart2}. We danced for {number1} hours! My friend wore a {color1} shirt and {color2} pants. The music made me feel {emotion1}. We're going to dance again in {number2} days!",
        inputs: [
            { id: "bodyPart1", label: "Body Part #1", placeholder: "Ex. Wikèhèn" },
            { id: "bodyPart2", label: "Body Part #2", placeholder: "Ex. Wikèk" },
            { id: "number1", label: "Number", placeholder: "Ex. Nisha" },
            { id: "color1", label: "Color #1", placeholder: "Ex. Machkeu" },
            { id: "color2", label: "Color #2", placeholder: "Ex. Wéskëk" },
            { id: "emotion1", label: "Emotion", placeholder: "Ex. Nulitùn" },
            { id: "number2", label: "Number", placeholder: "Ex. Nàxa" }
        ]
    },
    school: {
        title: "A Day at School",
        difficulty: "easy",
        template: "At school today, I learned {number1} new words! My teacher wore a {color1} shirt that made my {bodyPart1} smile. During lunch, I used my {bodyPart2} to eat. Later, my {bodyPart3} got tired from writing, but I felt {emotion1} when I got everything right!",
        inputs: [
            { id: "number1", label: "Number", placeholder: "Ex. Nisha" },
            { id: "color1", label: "Color", placeholder: "Ex. Machkeu" },
            { id: "bodyPart1", label: "Body Part #1", placeholder: "Ex. Wikèhs" },
            { id: "bodyPart2", label: "Body Part #2", placeholder: "Ex. Wiske" },
            { id: "bodyPart3", label: "Body Part #3", placeholder: "Ex. Naolk" },
            { id: "emotion1", label: "Emotion", placeholder: "Ex. Nulitùn" }
        ]
    },
     surprise: {
        title: "A Surprise in my Shoe",
        difficulty: "easy",
        template: "This morning, I found something in my shoe! When I put my {bodyPart1} inside, I felt something {color1}. I used my {bodyPart2} to look closer. There were {number1} small objects inside! My {bodyPart3} started to feel {emotion1} when I realized what it was. I used my {bodyPart4} to take out the {color2} surprise!",
        inputs: [
            { id: "bodyPart1", label: "Body Part #1", placeholder: "Ex. Wsit" },
            { id: "color1", label: "Color #1", placeholder: "Ex. Machkeu" },
            { id: "bodyPart2", label: "Body Part #2", placeholder: "Ex. Wikuwe" },
            { id: "number1", label: "Number", placeholder: "Ex. Nisha" },
            { id: "bodyPart3", label: "Body Part #3", placeholder: "Ex. Wikèhèn" },
            { id: "emotion1", label: "Emotion", placeholder: "Ex. Wjánte" },
            { id: "bodyPart4", label: "Body Part #4", placeholder: "Ex. Wiske" },
            { id: "color2", label: "Color #2", placeholder: "Ex. Wisaweu" }
        ]
    },
    weather: {
        title: "The Weather Today",
        difficulty: "medium",
        template: "The weather was strange today! The sky turned {color1}, and it rained for {number1} hours. My {bodyPart1} got wet, and my {bodyPart2} was cold. The wind made me feel {emotion1}. The forecast says it will be {color2} skies for the next {number2} days.",
        inputs: [
            { id: "color1", label: "Color #1", placeholder: "Ex. Wéskëk" },
            { id: "number1", label: "Number", placeholder: "Ex. Nisha" },
            { id: "bodyPart1", label: "Body Part #1", placeholder: "Ex. Wikèhèn" },
            { id: "bodyPart2", label: "Body Part #2", placeholder: "Ex. Wikèk" },
            { id: "emotion1", label: "Emotion", placeholder: "Ex. Wjánte" },
            { id: "color2", label: "Color #2", placeholder: "Ex. Wisaweu" },
            { id: "number2", label: "Number", placeholder: "Ex. Nàxa" }
        ]
    },
    doctor: {
        title: "Going to the Doctor",
        difficulty: "medium",
        template: "Today, I went to the doctor because my {bodyPart1} was hurting. The doctor asked me how long I had been feeling this way, and I told him it started hurting {number1} days ago and was turning {color1} and {color2}. He immediately told me to stick out my {bodyPart2} and close my {bodyPart3}. The doctor looked at my {bodyPart1} and said it looked a little {color3}. I was worried, so he said we needed to do a few tests. First, he took {number2} x-rays of my {bodyPart4}. Then he measured the size of my {bodyPart5} with a {color4} measuring tape and it was {number3} inches long. 'Don't worry,' he said, 'you just need to rest for {number4} days and wear a {color5} brace on your {bodyPart6}'.",
        inputs: [
            { id: "bodyPart1", label: "Body Part #1", placeholder: "Ex. Wikèhèn" },
            { id: "number1", label: "Number", placeholder: "Ex. Nisha" },
            { id: "color1", label: "Color #1", placeholder: "Ex. Machkeu" },
            { id: "color2", label: "Color #2", placeholder: "Ex. Wéskëk" },
            { id: "bodyPart2", label: "Body Part #2", placeholder: "Ex. Wikèhs" },
            { id: "bodyPart3", label: "Body Part #3", placeholder: "Ex. Wikuwe" },
            { id: "color3", label: "Color #3", placeholder: "Ex. Wisaweu" },
            { id: "number2", label: "Number", placeholder: "Ex. Nash" },
            { id: "bodyPart4", label: "Body Part #4", placeholder: "Ex. Wikèk" },
            { id: "bodyPart5", label: "Body Part #5", placeholder: "Ex. Wiske" },
            { id: "color4", label: "Color #4", placeholder: "Ex. Sùkw" },
            { id: "number3", label: "Number", placeholder: "Ex. Nàxa" },
            { id: "number4", label: "Number", placeholder: "Ex. Newa" },
            { id: "color5", label: "Color #5", placeholder: "Ex. Wapelechen" },
            { id: "bodyPart6", label: "Body Part #6", placeholder: "Ex. Naxka" }
        ]
    },
    zoo: {
        title: "A Day at the Zoo",
        difficulty: "medium",
        template: "Today I went to the zoo! My {bodyPart1} was tired from walking. I saw an animal with a {color1} {bodyPart2}. It made me feel {emotion1}! We stayed for {number1} hours until my {bodyPart3} got sore. The best part was when my {bodyPart4} saw a {color2} bird fly by!",
        inputs: [
            { id: "bodyPart1", label: "Body Part #1", placeholder: "Ex. Wikèk" },
            { id: "color1", label: "Color #1", placeholder: "Ex. Machkeu" },
            { id: "bodyPart2", label: "Body Part #2", placeholder: "Ex. Wikèhèn" },
            { id: "emotion1", label: "Emotion", placeholder: "Ex. Nulitùn" },
            { id: "number1", label: "Number", placeholder: "Ex. Nisha" },
            { id: "bodyPart3", label: "Body Part #3", placeholder: "Ex. Wsit" },
            { id: "bodyPart4", label: "Body Part #4", placeholder: "Ex. Wikuwe" },
            { id: "color2", label: "Color #2", placeholder: "Ex. Wisaweu" }
        ]
    },

    river: {
        title: "A Day at the River",
        difficulty: "medium",
        template: "We went to the river today! I dipped my {bodyPart1} in the {color1} water. My friend splashed {number1} times, and got my {bodyPart2} all wet! I felt {emotion1} when I saw a fish swim by my {bodyPart3}. The sky was {color2} and beautiful.",
        inputs: [
            { id: "bodyPart1", label: "Body Part #1", placeholder: "Ex. Wsit" },
            { id: "color1", label: "Color #1", placeholder: "Ex. Wéskëk" },
            { id: "number1", label: "Number", placeholder: "Ex. Nàxa" },
            { id: "bodyPart2", label: "Body Part #2", placeholder: "Ex. Wikèhèn" },
            { id: "emotion1", label: "Emotion", placeholder: "Ex. Wètëlaohake" },
            { id: "bodyPart3", label: "Body Part #3", placeholder: "Ex. Wikèk" },
            { id: "color2", label: "Color #2", placeholder: "Ex. Wisaweu" }
        ]
    } 
};
function validateInput(value, placeholder) {
    return value && value.trim() && value !== placeholder;
}

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
    
    // Create input fields
    const inputContainer = document.getElementById('input-container');
    currentStory.inputs.forEach(input => {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';
        
        const label = document.createElement('label');
        label.textContent = input.label;
        
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.id = input.id;
        inputField.required = true;
        inputField.placeholder = input.placeholder || '';
        
        // Add placeholder behavior
        inputField.addEventListener('focus', function() {
            if (this.value === this.placeholder) {
                this.value = '';
            }
        });
        
        inputField.addEventListener('blur', function() {
            if (this.value === '') {
                this.value = this.placeholder;
            }
        });
        
        inputGroup.appendChild(label);
        inputGroup.appendChild(inputField);
        inputContainer.appendChild(inputGroup);
    });
    // Add this story form check
    const storyForm = document.getElementById('story-form');
    if (storyForm) {
        storyForm.classList.remove('hidden');
    }
    
    // Show generate button and story form
    document.getElementById('generate-button').classList.remove('hidden');
    document.getElementById('story-form').classList.remove('hidden');
}

// Function to generate story
function generateStory() {
     if (!currentStory) return;
    
    let storyText = currentStory.template;
    const inputs = document.querySelectorAll('#input-container input');
    let allFilled = true;
    
    inputs.forEach(input => {
        const value = input.value.trim();
        // Use the new validation function here
        if (!validateInput(value, input.placeholder)) {
            allFilled = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
            storyText = storyText.replace(`{${input.id}}`, value);
        }
    });
    
    if (!allFilled) {
        alert('Please fill in all the blanks with Lenape words!');
        return;
    }
    
    const storyOutput = document.getElementById('story-output');
    storyOutput.textContent = storyText;
    storyOutput.classList.remove('hidden');
    
    document.getElementById('reset-button').classList.remove('hidden');
    document.getElementById('generate-button').classList.add('hidden');
}
// Function to reset story
function resetStory() {
    document.getElementById('input-container').innerHTML = '';
    document.getElementById('story-output').classList.add('hidden');
    document.getElementById('reset-button').classList.add('hidden');
    document.getElementById('generate-button').classList.add('hidden');
    document.getElementById('selected-story-title').textContent = 'Select a Story';
    currentStory = null;
}

// Word Bank Toggle Functions
function toggleWordBank(category) {
    const wordList = document.querySelector(`.word-bank-${category}`);
    if (wordList) {
        wordList.classList.toggle('hidden');
    }
}

// Initialize Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers for buttons
    document.getElementById('generate-button').addEventListener('click', generateStory);
    document.getElementById('reset-button').addEventListener('click', resetStory);
    
    // Add click handlers for story cards
    document.querySelectorAll('.story-card').forEach(card => {
        card.addEventListener('click', () => {
            const storyId = card.getAttribute('data-story');
            selectStory(storyId);
        });
    });
    
    // Add click handlers for word bank categories
    document.querySelectorAll('.word-bank-category').forEach(category => {
        category.addEventListener('click', () => {
            const categoryId = category.getAttribute('data-category');
            toggleWordBank(categoryId);
        });
    });

    // Initialize difficulty indicators
    document.querySelectorAll('.story-card').forEach(card => {
        const storyId = card.getAttribute('data-story');
        if (stories[storyId]) {
            card.classList.add(stories[storyId].difficulty);
        }
    });
});
   
