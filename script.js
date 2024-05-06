// script.js
const targetDate = new Date("May 09, 2024").getTime();
const countdownEl = document.getElementById("timer");
const progressBarEl = document.getElementById("progress");

function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Update progress bar
        const totalTime = targetDate - new Date().getTime();
        const progress = ((totalTime - timeLeft) / totalTime) * 100;
        progressBarEl.style.width = `${progress}%`;
    } else {
        countdownEl.textContent = "Time's up!";
        progressBarEl.style.width = "100%";
    }
}

setInterval(updateTimer, 1000);
