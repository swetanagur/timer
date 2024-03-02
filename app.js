let timerInterval;
let timerRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
    if (!timerRunning) {
        timerInterval = setInterval(updateTimer, 1000);
        timerRunning = true;
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const formattedTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    document.getElementById("timer").innerText = formattedTime;
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

document.getElementById("startButton").addEventListener("click", startTimer);
document.getElementById("pauseButton").addEventListener("click", pauseTimer);
document.getElementById("resetButton").addEventListener("click", resetTimer);
