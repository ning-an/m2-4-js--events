// Exercise 1.2
// ------------
console.log('exercise 1.2');

//create random number 1-10
let timeLeft = Math.ceil(Math.random() * 10 + 1);
const timeDisplay = document.querySelector('#time');
const timeText = document.querySelector('.time-text');
const body = document.querySelector('body');
const result = document.querySelector('.result');

timeDisplay.innerText = timeLeft;
let win = true;

const countDown = setInterval(() => {
    timeLeft--;
    timeDisplay.innerText = timeLeft;
    if (timeLeft <= 0) {
        timeLeft = 0;
        timeText.innerHTML = 'Time out!';
        win = false;
        clearInterval(countDown);
    }
}, 1000);

function handler() {
    result.innerText = win? 'You Win': 'You Lose!';
    body.removeEventListener('click', handler);
}

body.addEventListener('click', handler);