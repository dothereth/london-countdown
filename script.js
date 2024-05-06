// script.js
const targetDate = new Date("May 09, 2024").getTime();
const countdownEl = document.querySelector(".countdown");
const progressBarEl = document.querySelector(".progress");
let remainingTime = 60; // seconds (adjust as needed)
const totalTime = remainingTime;

function countdown() {
    if (remainingTime > 0) {
        // Update countdown timer
        countdownEl.textContent = remainingTime;

        // Update progress bar
        const progress = ((totalTime - remainingTime) / totalTime) * 100;
        progressBarEl.style.width = `${progress}%`;

        remainingTime--;
        setTimeout(countdown, 1000);
    } else {
        // Countdown finished
        progressBarEl.style.width = "100%";
        countdownEl.textContent = "Time's up!";
    }
}

countdown();
