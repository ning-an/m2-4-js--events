// Exercise 1.0
// ------------
console.log('exercise-1');

const body = document. querySelector('body');
const msg = document.querySelector('.msg');

function handler() {
    msg.innerText = 'You are amazing!';
}

body.addEventListener('click', handler);
