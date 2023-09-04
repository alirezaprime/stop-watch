const display = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

// استفاده از تابع ریاضیات برای گرد کردن به سمت
function formatTime(milliseconds) {
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
  const hours = Math.floor(milliseconds / (1000 * 60 * 60));

  return (
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0")
  );
}

// Update the display with the elapsed time
function updateDisplay() {
  const currentTime = Date.now();
  elapsedTime += currentTime - startTime;
  startTime = currentTime;
  display.textContent = formatTime(elapsedTime);
}

// Event listeners for buttons
startButton.addEventListener("click", function () {
  if (!timerInterval) {
    startTime = Date.now();
    timerInterval = setInterval(updateDisplay, 10);
  }
});

stopButton.addEventListener("click", function () {
  clearInterval(timerInterval);
  timerInterval = null;
});

resetButton.addEventListener("click", function () {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  display.textContent = formatTime(elapsedTime);
});
