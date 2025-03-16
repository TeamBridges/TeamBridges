// grouppractice.js

const activityContent = {
    howmany: {
        title: "How Many...?",
        description: "This activity helps practice counting and numbers in Lenape. Count different features among your group members!",
        prompts: [
            "How many hwikiyona (noses) are in this room?",
            "How many weshkinko (eyes) are in this room? How many blue eyes? Green eyes? Brown eyes?",
            "How many tuna (mouths) are in this room?",
            "How many naxka (hands) are in this room?",
            "How many welencha (fingers)?",
            "How many wsita (feet) are in this room?",
            "How many kwetsita (toes)?",
            "How many people in this room have long milaxk (hair)?",
            "How many have short milaxk (hair)?",
            "How many people in this room have brown milaxk (hair)?",
            "How many have black milaxk (hair)?",
            "How many have gray milaxk (hair)?",
            "How many have red milaxk (hair)?",
            "How many have blonde milaxk (hair)?"
        ]
    },
    simonsays: {
        title: "Simon Says...",
        description: "Practice body parts in Lenape through this classic game! One person is 'Simon' and gives commands using Lenape words for body parts.",
        prompts: [
            "Simon says touch your wikèhèn (head)",
            "Simon says touch your wikèhs (mouth)",
            "Simon says touch your wikuwàkane (nose)",
            "Simon says touch your wikuwe (eyes)",
            "Simon says touch your wikèk (leg)",
            "Simon says touch your naxk (hand)",
            "Simon says touch your wsit (foot)",
            "Simon says touch your htuwi (ears)"
        ]
    },
    creature: {
        title: "Creature Feature",
        description: "Create and describe imaginary creatures using Lenape body part vocabulary. Be creative and have fun!",
        prompts: [
            "Draw a creature with three wikuwàkane (noses)",
            "Create a monster with five wikuwe (eyes)",
            "Design an animal with two wikèhèn (heads)",
            "Make a creature with extra naxka (hands)",
            "Imagine a being with unusual wsita (feet)",
            "Create a creature with special htuwi (ears)",
            "Design an animal with unique milaxk (hair)",
            "Describe your favorite animal based on their physical appearance"
        ]
    },
    conversation: {
        title: "Conversation Prompts",
        description: "Use these prompts to start conversations in Lenape. Focus on using Lenape words for body parts, colors, numbers, and animals whenever possible.",
        prompts: [
            "What are your three favorite physical features about yourself, why?",
            "Describe someone in this room based on their physical features.",
            "Which body part do you think is the most/least useful, why?",
            "Compare and contrast the physical appearances between a baby and an adult.",
            "Describe a mystery body part for the other students to guess.",
            "Describe your morning routine, using as many body parts as possible.",
            "Pretend you're at the doctor's office and explain what's wrong and how you feel.",
            "Describe your favorite animal based on their physical appearance."
        ]
    }
};

// Function to show selected activity
function showActivity(activityType) {
    // Get activity content
    const content = activityContent[activityType];
    
    // Update title and description
    document.getElementById('activity-title').textContent = content.title;
    document.getElementById('activity-description').textContent = content.description;
    
    // Clear and populate prompts
    const promptsContainer = document.getElementById('activity-prompts');
    promptsContainer.innerHTML = '';
    
    content.prompts.forEach(prompt => {
        const promptElement = document.createElement('div');
        promptElement.className = 'prompt-item';
        promptElement.textContent = prompt;
        promptsContainer.appendChild(promptElement);
    });

    // Show the activity content
    document.querySelector('.activity-content').classList.remove('hidden');

    // Update active state of activity cards
    document.querySelectorAll('.activity-card').forEach(card => {
        card.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Add click event listeners to all activity cards
    document.querySelectorAll('.activity-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const activityType = e.currentTarget.getAttribute('data-activity');
            showActivity(activityType);
        });
    });
});
