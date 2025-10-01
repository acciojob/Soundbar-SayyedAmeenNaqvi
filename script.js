// List of sound file names (excluding 'stop', which is a function)
const soundNames = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttonsContainer = document.getElementById('buttons');
// Array to store all Audio objects for easy management (e.g., stopping them)
const audioElements = [];

/**
 * Stops all currently playing sounds and resets them to the beginning.
 */
function stopAllSounds() {
    audioElements.forEach(audio => {
        // Only pause and rewind if the sound is currently playing
        if (audio.currentTime > 0) {
            audio.pause();
            audio.currentTime = 0; 
        }
    });
}

// 1. Create and append the main sound buttons
soundNames.forEach(sound => {
    // Create button element
    const btn = document.createElement('button');
    
    // Assign the required class
    btn.classList.add('btn'); 
    btn.textContent = sound;
    
    // Create the Audio element using the path "sounds/filename.mp3"
    const audio = new Audio(`sounds/${sound}.mp3`);
    audioElements.push(audio); // Store the audio object
    
    // Add click event listener
    btn.addEventListener('click', () => {
        stopAllSounds(); // Stop any other sound before playing
        audio.play();    // Play the selected sound
    });
    
    buttonsContainer.appendChild(btn);
});

// 2. Create and append the 'stop' button
const stopBtn = document.createElement('button');

stopBtn.classList.add('btn', 'stop'); 
stopBtn.textContent = 'stop';

// Add the click event listener to stop all sounds
stopBtn.addEventListener('click', stopAllSounds);

// Append the stop button
buttonsContainer.appendChild(stopBtn);