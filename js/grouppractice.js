// Activity content configuration
const activityContent = {
    howmany: {
        title: "How Many...?",
        description: "This activity can be used as part of a Lenape language class (either in person or through a virtual meeting), or you can try them out with a group of your friends and family.",
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
            "How many have blonde milaxk (hair)?",
            "How many hwitaoka (ears) are in this room?",
            "How many mutaya (stomachs) are in this room?",
            "How many tuhwepia (bodies) are in this room?"
        ]
    },
    simonsays: {
        title: "Simon Says...",
        description: "Practice body parts and commands in Lenape through this classic game!",
        prompts: [
            "Wave your right naxk (hand)",
            "Tap your left wsit (foot)",
            "Hold up nisha (two) welencha (fingers)",
            "Touch your wikèhèn (head)",
            "Raise your left naolk (arm)",
            "Touch your wikiyon (nose) naxen (three times)",
            "Hold your right wiskon (elbow)",
            "Tap your left hwikxkon (shin)",
            "Hold up a tukwelench (fist)"
        ]
    },
    creature: {
        title: "Creature Feature",
        description: "Create and describe imaginary creatures using Lenape body part vocabulary.",
        prompts: [
            "Draw a creature with three wikuwàkane (noses)",
            "Create a monster with five wikuwe (eyes)",
            "Design an animal with two wikèhèn (heads)",
            "Describe your favorite animal based on their physical appearance"
        ],
        example: "My creature has the naxka (hands) and weshkinkw (face) of a nahenem (raccoon), the tuhwepi (body) of an askaskontpat (snake), and the wsita (feet) of a mahwat (fox)."
    }
};

// Function to show selected activity
function showActivity(activityType) {
    const content = activityContent[activityType];
    const contentSection = document.getElementById('activity-content');
    
    // Build HTML content
    let html = `
        <h2>${content.title}</h2>
        <p class="description">${content.description}</p>
    `;

    // Add prompts if they exist
    if (content.prompts) {
        html += '<div class="prompts-list">';
        content.prompts.forEach(prompt => {
            html += `<div class="prompt-item">${prompt}</div>`;
        });
        html += '</div>';
    }

    // Add example if it exists
    if (content.example) {
        html += `
            <div class="example-box">
                <h3>Example:</h3>
                <p>${content.example}</p>
            </div>
        `;
    }

    // Update content and show section
    contentSection.innerHTML = html;
    contentSection.classList.remove('hidden');

    // Update active state of activity cards
    document.querySelectorAll('.activity-card').forEach(card => {
        card.classList.remove('active');
    });
    event.target.closest('.activity-card').classList.add('active');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Add click event listeners to activity cards
    document.querySelectorAll('.activity-card').forEach(card => {
        card.addEventListener('click', (event) => {
            const activityType = event.currentTarget.getAttribute('data-activity');
            showActivity(activityType);
        });
    });
});
