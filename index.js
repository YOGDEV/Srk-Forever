// In index.js

const replayButtons = document.querySelectorAll('.replay-button');
const icon = document.querySelector(".music-icon");

replayButtons.forEach(button => {
    button.addEventListener('click', () => {
        const audioPlayer = button.closest('.audio-player-wrapper').querySelector('.audio-player');

        if (audioPlayer) {
            audioPlayer.currentTime = 0;
            audioPlayer.play();
        }

        if (icon) {
            // Make the icon visible
            icon.classList.remove("hidden");

            // Reset and play the animation
            icon.style.animation = 'none'; // 1. Reset the animation
            icon.offsetHeight; /* 2. Trigger a reflow, a crucial step */
            icon.style.animation = ''; // 3. Re-apply the animation
            icon.style.animationPlayState = 'running'; // 4. Play it
        }
    });
});