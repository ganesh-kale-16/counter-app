let count = 0;

let countDisplay = document.getElementById('count');
let decreaseButton = document.getElementById('decrease');
let resetButton = document.getElementById('reset');
let increaseButton = document.getElementById('increase');

increaseButton.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});

decreaseButton.addEventListener('click', () => {
    count--;
    countDisplay.textContent = count;
});

resetButton.addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = count;
});