// Exercise 1.1
// ------------
console.log('exercise 1.1');

const body = document.querySelector('body');
const result = document.querySelector('.result');

const header = document.createElement('h1');
header.innerText = 'Be a quicker clicker!';
body.insertBefore(header, result);

let win = true;

setTimeout(() => {
    win = false;
}, 1000);

function handler() {
    result.innerText = win? 'Bravo': 'Sorry';
    body.removeEventListener('click', handler);
}

body.addEventListener('click', handler);