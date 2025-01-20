const audioPlayer = document.getElementById('audioPlayer');
const diskIcon = document.querySelector('.disk-icon img');
const volumeControl = document.getElementById('volumeControl');
const welcomeModal = document.getElementById('welcomeModal');
const enterButton = document.getElementById('enterButton');

// Set initial volume
audioPlayer.volume = volumeControl.value / 100;

// Play audio and close modal
const startAudio = async () => {
    try {
        await audioPlayer.play();
        diskIcon.classList.add('rotating'); // Start disk rotation
        console.log("Audio is playing.");
    } catch (error) {
        console.log("Error starting audio:", error);
    }
};

// Handle modal button click
enterButton.addEventListener('click', () => {
    welcomeModal.style.display = 'none'; // Hide the modal
    startAudio(); // Start audio playback
});

// Disk play/pause functionality
diskIcon.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        diskIcon.classList.add('rotating');
    } else {
        audioPlayer.pause();
        diskIcon.classList.remove('rotating');
    }
});

// Volume control functionality
volumeControl.addEventListener('input', () => {
    audioPlayer.volume = volumeControl.value / 100;
});

// Handle play and pause events for disk rotation
audioPlayer.addEventListener('play', () => {
    diskIcon.classList.add('rotating');
});

audioPlayer.addEventListener('pause', () => {
    diskIcon.classList.remove('rotating');
});
