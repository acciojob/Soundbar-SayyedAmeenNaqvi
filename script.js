const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttonsContainer = document.getElementById('buttons');
let currentAudio = null;

// Create buttons for each sound
sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = sound;
    btn.addEventListener('click', () => playSound(sound));
    buttonsContainer.appendChild(btn);
});

// Create stop button
const stopBtn = document.createElement('button');
stopBtn.className = 'stop';
stopBtn.textContent = 'stop';
stopBtn.addEventListener('click', stopSound);
buttonsContainer.appendChild(stopBtn);

// Function to play audio
function playSound(name) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(`sounds/${name}.mp3`);
    currentAudio.play();
}

// Function to stop audio
function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}
