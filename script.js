let startTime = 0;
let elapsedTime = 0;
let timerInterval = 0;
let lapCount = 0;

const display = document.getElementById('time-display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const lapBtn = document.getElementById('lap-btn');
const resetBtn = document.getElementById('reset-btn');
const lapsList = document.getElementById('laps-list');

// Format time from milliseconds to HH:MM:SS.mm
function formatTime(ms) {
    let hrs = Math.floor(ms / 3600000);
    let mins = Math.floor((ms % 3600000) / 60000);
    let secs = Math.floor((ms % 60000) / 1000);
    let msecs = Math.floor((ms % 1000) / 10);

    return (
        (hrs < 10 ? "0" + hrs : hrs) + ":" +
        (mins < 10 ? "0" + mins : mins) + ":" +
        (secs < 10 ? "0" + secs : secs) + "." +
        (msecs < 10 ? "0" + msecs : msecs)
    );
}

// Update the DOM display
function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
}

// Button State Manager
function toggleButtons(running) {
    startBtn.disabled = running;
    pauseBtn.disabled = !running;
    lapBtn.disabled = !running;
}