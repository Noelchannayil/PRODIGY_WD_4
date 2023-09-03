let timerInterval;
let totalTimeInSeconds = 0;
let timeRemainingInSeconds = 0;
let isTimerRunning = false;

function startTimer() {
  if (!isTimerRunning) {
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;

    if (minutes === 0 && seconds === 0) {
      alert('Please set a valid time.');
      return;
    }

    if (isTimerRunning) {
      clearInterval(timerInterval);
    }

    totalTimeInSeconds = minutes * 60 + seconds;
    timeRemainingInSeconds = timeRemainingInSeconds || totalTimeInSeconds;

    updateTimerDisplay();
    timerInterval = setInterval(updateTimer, 1000);
    isTimerRunning = true;
  }
}

function updateTimer() {
  if (timeRemainingInSeconds > 0) {
    timeRemainingInSeconds--;
    updateTimerDisplay();
  } else {
    stopTimer();
    alert('Countdown complete!');
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  timeRemainingInSeconds = 0;
  isTimerRunning = false;
  updateTimerDisplay();
}

function restartTimer() {
  if (!isTimerRunning) {
    startTimer();
  }
}

function updateTimerDisplay() {
  const hours = Math.floor(timeRemainingInSeconds / 3600);
  const minutes = Math.floor((timeRemainingInSeconds % 3600) / 60);
  const seconds = timeRemainingInSeconds % 60;

  const timerDisplay = document.querySelector('.timer');
  timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}