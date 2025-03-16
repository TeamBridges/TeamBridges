// Part 1: Story Templates and Configuration

const stories = {
const stories = {
    bicycle: {
        title: "The Bicycle Adventure",
        difficulty: "easy",
        template: "I was riding my bike, but I crashed! I scraped my {bodyPart1} and broke my {bodyPart2}. I had to wear a cast on my {bodyPart2} for {number1} weeks. The weirdest part was that {bodyPart1} turned {color1}. I wasn't expecting that! It made me feel {emotion1}. I probably won't ride my bike again for {number2} days.",
        inputs: [
            { id: "bodyPart1", label: "Body Part #1 (Wikèhèn - Head)" },
            { id: "bodyPart2", label: "Body Part #2 (Wikèk - Leg)" },
            { id: "number1", label: "Number (Nisha - Two)" },
            { id: "color1", label: "Color (Machkeu - Red)" },
            { id: "emotion1", label: "Emotion (Wichin - Sad)" },
            { id: "number2", label: "Number (Nash - Three)" }
        ]
    },
    dancing: {
        title: "Dancing with Friends",
        difficulty: "easy",
        template: "{number1} weeks ago, I was dancing with my friend {friendName}. They stepped on my {bodyPart1} and hurt my {bodyPart2}. My {bodyPart1} turned {color1}, and my {bodyPart2} looked more like a {fruit}. I guess you could say {friendName} has two left {bodyPartPlural}.",
        inputs: [
            { id: "number1", label: "Number (Nisha - Two)" },
            { id: "friendName", label: "Friend's Name" },
            { id: "bodyPart1", label: "Body Part #1 (Wikèk - Leg)" },
            { id: "bodyPart2", label: "Body Part #2 (Wikèhs - Mouth)" },
            { id: "color1", label: "Color (Machkeu - Red)" },
            { id: "fruit", label: "Fruit" },
            { id: "bodyPartPlural", label: "Body Part (Plural)" }
        ]
    },
    weather: {
        title: "The Weather Today",
        difficulty: "easy",
        template: "Today the {color1} clouds made my {bodyPart1} feel {emotion1}. The wind was blowing so hard that my {bodyPart2} started to shake! I saw {number1} {animal1} running to stay dry. My {bodyPart3} got wet from the rain, and my {bodyPart4} was cold. I felt {emotion2} when I finally got inside where it was warm and dry.",
        inputs: [
            { id: "color1", label: "Color (Wapelechen - White)" },
            { id: "bodyPart1", label: "Body Part #1 (Wikuwàkane - Nose)" },
            { id: "emotion1", label: "Emotion (Wjánte - Afraid)" },
            { id: "bodyPart2", label: "Body Part #2 (Wikèk - Leg)" },
            { id: "number1", label: "Number (Nash - Three)" },
            { id: "animal1", label: "Animal" },
            { id: "bodyPart3", label: "Body Part #3 (Wikèhèn - Head)" },
            { id: "bodyPart4", label: "Body Part #4 (Wikèhs - Mouth)" },
            { id: "emotion2", label: "Emotion (Nulitùn - Happy)" }
        ]
    },
    ready: {
        title: "Getting Ready",
        difficulty: "easy",
        template: "This morning, I woke up and stretched my {bodyPart1}. I used my {bodyPart2} to brush my teeth and my {bodyPart3} to brush my hair. I put on my favorite {color1} shirt and {color2} pants. My {bodyPart4} was still tired, but I felt {emotion1} about going to school. I grabbed my backpack with my {bodyPart5} and walked out the door. On my way, I saw {number1} birds flying with their {bodyPart6} spread wide. That made me feel {emotion2}!",
        inputs: [
            { id: "bodyPart1", label: "Body Part #1 (Wikèk - Leg)" },
            { id: "bodyPart2", label: "Body Part #2 (Wikèhs - Mouth)" },
            { id: "bodyPart3", label: "Body Part #3 (Wikèhèn - Head)" },
            { id: "color1", label: "Color #1 (Sùkw - Black)" },
            { id: "color2", label: "Color #2 (Machkeu - Red)" },
            { id: "bodyPart4", label: "Body Part #4 (Wikuwe - Eyes)" },
            { id: "emotion1", label: "Emotion #1 (Wètëlaohake - Excited)" },
            { id: "bodyPart5", label: "Body Part #5 (Naxka - Hands)" },
            { id: "number1", label: "Number (Nisha - Two)" },
            { id: "bodyPart6", label: "Body Part #6 (Naolk - Arms)" },
            { id: "emotion2", label: "Emotion #2 (Nulitùn - Happy)" }
        ]
    },
    river: {
        title: "Playing by the River",
        difficulty: "medium",
        template: "While playing in the {color1} river, the child looked down at their {bodyPart1} and saw a {animal1} crawling on its {number1} {bodyPartPlural1}. The child reached down with its {bodyPart2} to pet the {animal1} {number2} times but got scared when they saw its {size1} {bodyPart3}.",
        inputs: [
            { id: "color1", label: "Color (Wapelechen - White)" },
            { id: "bodyPart1", label: "Body Part #1 (Wikèk - Leg)" },
            { id: "animal1", label: "Animal" },
            { id: "number1", label: "Number #1 (Nisha - Two)" },
            { id: "bodyPartPlural1", label: "Body Parts (Plural)" },
            { id: "bodyPart2", label: "Body Part #2 (Naxka - Hand)" },
            { id: "number2", label: "Number #2 (Nash - Three)" },
            { id: "size1", label: "Size" },
            { id: "bodyPart3", label: "Body Part #3 (Wikèhs - Mouth)" }
        ]
    },
doctor: {
    title: "Going to the Doctor",
    difficulty: "medium",
    template: "Today, I went to the doctor because my {bodyPart1} was hurting. The doctor asked me how long I had been feeling this way, and I told him it started hurting {number1} days ago and was turning {color1} and {color2} after a {animal1} bit it. He immediately told me to stick out my {bodyPart2} and close my {bodyPart3}. The doctor looked at my {bodyPart1} and said it looked a little {color3}. I was worried, so he said we needed to do a few tests. First, he took {number2} x-rays of my {bodyPart1}. Then he measured the size of my {bodyPart4} with a {color4} measuring tape and it was {number3} inches long. 'Don't worry,' he said, 'you just need to rest for {number4} days and wear a {color5} brace on your {bodyPart5}'.",
    inputs: [
        { id: "bodyPart1", label: "Body Part #1 (Wikèhèn - Head)" },
        { id: "number1", label: "Number (Days)" },
        { id: "color1", label: "Color #1" },
        { id: "color2", label: "Color #2" },
        { id: "animal1", label: "Animal" },
        { id: "bodyPart2", label: "Body Part #2" },
        { id: "bodyPart3", label: "Body Part #3" },
        { id: "color3", label: "Color #3" },
        { id: "number2", label: "Number (X-rays)" },
        { id: "bodyPart4", label: "Body Part #4" },
        { id: "color4", label: "Color #4" },
        { id: "number3", label: "Number (Inches)" },
        { id: "number4", label: "Number (Days of Rest)" },
        { id: "color5", label: "Color #5" },
        { id: "bodyPart5", label: "Body Part #5" }
    ]
},

zoo: {
    title: "A Day at the Zoo",
    difficulty: "medium",
    template: "Yesterday, I went to the zoo to see all the amazing animals. The first animal I saw was a {animal1}. It had a huge {bodyPart1} and bright {color1} fur. It had a really long {bodyPart2} with pointy {bodyPartPlural1}. Next, I visited the {animal2} enclosure. It was sitting in the shade, licking its {bodyPart3} with its long {color2} tongue. There were {number1} of them in the cage, all staring at me with their big, round {bodyPart4}. After that, I went to see the {animal3}. It was so funny because it had {number2} {bodyPart5} on each side! I couldn't stop laughing. The {animal3} had {color3} spots all over its {bodyPart6}. Finally, I ended my visit at the {animal4} exhibit. It was a very quiet animal, but it had an enormous {bodyPart7}. I spent {number3} minutes watching it before I decided to leave. It was a fantastic day at the zoo!",
    inputs: [
        { id: "animal1", label: "Animal #1" },
        { id: "bodyPart1", label: "Body Part #1" },
        { id: "color1", label: "Color #1" },
        { id: "bodyPart2", label: "Body Part #2" },
        { id: "bodyPartPlural1", label: "Body Parts (Plural)" },
        { id: "animal2", label: "Animal #2" },
        { id: "bodyPart3", label: "Body Part #3" },
        { id: "color2", label: "Color #2" },
        { id: "number1", label: "Number #1" },
        { id: "bodyPart4", label: "Body Part #4" },
        { id: "animal3", label: "Animal #3" },
        { id: "number2", label: "Number #2" },
        { id: "bodyPart5", label: "Body Part #5" },
        { id: "color3", label: "Color #3" },
        { id: "bodyPart6", label: "Body Part #6" },
        { id: "animal4", label: "Animal #4" },
        { id: "bodyPart7", label: "Body Part #7" },
        { id: "number3", label: "Number (Minutes)" }
    ]
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
        
        inputGroup.appendChild(label);
        inputGroup.appendChild(inputField);
        inputContainer.appendChild(inputGroup);
    });
    
    // Show generate button
    document.getElementById('generate-button').classList.remove('hidden');
}

// Function to generate story
function generateStory() {
    let storyText = currentStory.template;
    const inputs = document.querySelectorAll('#input-container input');
    
    inputs.forEach(input => {
        const value = input.value.trim();
        if (!value) {
            alert('Please fill in all fields!');
            return;
        }
        storyText = storyText.replace(`{${input.id}}`, value);
    });
    
    const outputDiv = document.getElementById('story-output');
    outputDiv.textContent = storyText;
    outputDiv.classList.remove('hidden');
    
    document.getElementById('generate-button').classList.add('hidden');
    document.getElementById('reset-button').classList.remove('hidden');
}

// Function to reset story
function resetStory() {
    document.getElementById('input-container').innerHTML = '';
    document.getElementById('story-output').classList.add('hidden');
    document.getElementById('generate-button').classList.add('hidden');
    document.getElementById('reset-button').classList.add('hidden');
    document.getElementById('selected-story-title').textContent = 'Select a Story';
    currentStory = null;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate-button').addEventListener('click', generateStory);
    document.getElementById('reset-button').addEventListener('click', resetStory);

    // Initialize card flip functionality
    document.querySelectorAll('.example-card').forEach(card => {
        card.addEventListener('click', () => {
            card.querySelector('.card-inner').classList.toggle('flipped');
        });
    });
});
