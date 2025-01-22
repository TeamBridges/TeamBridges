* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: #f5f7fa;
    min-height: 100vh;
}

.nav-bar {
    background-color: white;
    padding: 15px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-link {
    color: #333;
    text-decoration: none;
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.nav-link:hover {
    background-color: #f0f0f0;
}

.nav-link.active {
    background-color: #1e3c72;
    color: white;
}

.title {
    text-align: center;
    padding: 40px 20px;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    color: white;
    margin-bottom: 30px;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
}

.main-content h2 {
    color: #1e3c72;
    margin-bottom: 30px;
    font-size: 32px;
}

.content-wrapper {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 30px;
}

/* Story Choice Buttons */
.story-buttons {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.story-choice {
    background: white;
    border: 2px solid #1e3c72;
    border-radius: 15px;
    padding: 20px;
    text-align: left;
    cursor: pointer;
    transition: all 0.3s ease;
}

.story-choice h3 {
    color: #1e3c72;
    margin-bottom: 10px;
}

.story-choice p {
    color: #666;
    font-size: 14px;
}

.story-choice:hover {
    background: #f0f4f8;
    transform: translateY(-2px);
}

.story-choice.active {
    background: #1e3c72;
}

.story-choice.active h3,
.story-choice.active p {
    color: white;
}

/* Story Card */
.story-card {
    background: transparent;
    perspective: 1000px;
    height: 500px;
}

.story-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.story-card-front,
.story-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: white;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.story-card-back {
    transform: rotateY(180deg);
}

.story-card.flipped .story-card-inner {
    transform: rotateY(180deg);
}

/* Input Form */
.input-group {
    margin: 15px 0;
    text-align: left;
}

.input-group label {
    display: block;
    margin-bottom: 8px;
    color: #333;
}

.input-group input {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
}

.input-group input:focus {
    border-color: #1e3c72;
    outline: none;
}

/* Buttons */
.generate-button,
.reset-button {
    background: #1e3c72;
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.2s ease;
    margin-top: 20px;
}

.generate-button:hover,
.reset-button:hover {
    transform: translateY(-2px);
}

/* Story Output */
.story-output {
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 15px;
    text-align: left;
    line-height: 1.8;
}

.user-input {
    color: #1e3c72;
    font-weight: bold;
}

/* Glossary Section */
.glossary-section {
    margin-top: 40px;
}

.glossary-card {
    height: 200px;
    perspective: 1000px;
    margin-bottom: 20px;
}

.glossary-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    cursor: pointer;
}

.glossary-card.flipped .glossary-card-inner {
    transform: rotateY(180deg);
}

.glossary-card-front,
.glossary-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: white;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.glossary-card-back {
    transform: rotateY(180deg);
}

@media (max-width: 768px) {
    .content-wrapper {
        grid-template-columns: 1fr;
    }
    
    .story-buttons {
        flex-direction: row;
        overflow-x: auto;
        padding-bottom: 20px;
    }
    
    .story-choice {
        min-width: 250px;
    }
}
