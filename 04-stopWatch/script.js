const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const startStop = document.querySelector('.startStop');
const reset = document.querySelector('.reset');

let timer;
let totalSeconds = 0;
let isRunning = false;

startStop.addEventListener('click', function() {
    if (!isRunning) {
        startStop.textContent = "STOP";
        startStop.classList.add("stop");
        startStop.classList.remove("start");
        startStop.classList.remove("paused");
        isRunning = true;
        timer = setInterval(updateTimer, 1000);
    } else {
        startStop.textContent = "START";
        startStop.classList.remove("stop");
        startStop.classList.add("start");
        clearInterval(timer);
        isRunning = false;
    }
});

reset.addEventListener('click', function() {
    clearInterval(timer);
    totalSeconds = -1;
    updateTimer();
    startStop.textContent = "START";
    startStop.classList.remove("stop");
    startStop.classList.add("start");
    isRunning = false; 
});



function updateTimer() {
    totalSeconds++;
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    hours.textContent = pad(hrs);
    minutes.textContent = pad(mins);
    seconds.textContent = pad(secs);
}

function pad(val) {
    // Pad single digit numbers with leading zeros
    return val > 9 ? val : "0" + val;
}
