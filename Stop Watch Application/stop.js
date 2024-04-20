const time = document.getElementById('time');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');
const laps = document.getElementById('laps');
const timerSound = document.getElementById('timer-sound'); // Added this line

let intervalId;
let timeElapsed = 0;
let lapTimes = [];
let isRunning = false;

start.addEventListener('click', () => {
  if (!isRunning) {
    intervalId = setInterval(() => {
      timeElapsed++;
      time.textContent = formatTime(timeElapsed);
    }, 10);
    isRunning = true;
    timerSound.play(); // Added this line
  }
});

pause.addEventListener('click', () => {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
    timerSound.pause(); // Added this line
  }
});

reset.addEventListener('click', () => {
  clearInterval(intervalId);
  timeElapsed = 0;
  lapTimes = [];
  time.textContent = '00:00:00';
  laps.innerHTML = '';
  isRunning = false;
  timerSound.pause(); // Added this line
});

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function addLap() {
  const lap = document.createElement('li');
  lap.textContent = formatTime(timeElapsed);
  laps.appendChild(lap);
}

document.getElementById('add-lap').addEventListener('click', addLap);
