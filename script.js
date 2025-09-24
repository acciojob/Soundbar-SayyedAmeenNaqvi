// List of sounds (must match file names in /sounds folder)
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttons = document.getElementById('buttons');

// Generate sound buttons dynamically
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSounds();
    const audio = new Audio(`./sounds/${sound}.mp3`);
    audio.play();
    window.currentAudio = audio;
  });

  buttons.appendChild(btn);
});

// Create stop button
const stopBtn = document.createElement('button');
stopBtn.className = 'btn stop';
stopBtn.innerText = 'stop';

stopBtn.addEventListener('click', stopSounds);
buttons.appendChild(stopBtn);

// Stop currently playing sound
function stopSounds() {
  if (window.currentAudio) {
    window.currentAudio.pause();
    window.currentAudio.currentTime = 0;
  }
}
