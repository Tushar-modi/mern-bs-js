const train = document.getElementById("train");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

let animationInterval;
let currentPosition = -200; // Initial position outside the container

function startTrainAnimation() {
  train.style.transform = `translateX(${currentPosition}px)`;
  animationInterval = setInterval(() => {
    currentPosition += 10; // Move the train 10 pixels to the right
    train.style.transform = `translateX(${currentPosition}px)`;

    // Check if the train has moved out of the container, then reset its position
    if (currentPosition >= window.innerWidth) {
      currentPosition = -200;
    }
  }, 100); // Move the train every 100 milliseconds
}

function stopTrainAnimation() {
  clearInterval(animationInterval);
}

startButton.addEventListener("click", startTrainAnimation);
stopButton.addEventListener("click", stopTrainAnimation);
