const main = document.querySelector('.main')

//create a form
const myForm = document.createElement('form');
myForm.classList.add('myForm');
main.appendChild(myForm);

//create number input + label
const label = document.createElement('label');
label.innerText = 'Enter any number you want: '
const num = document.createElement('input');
num.type = 'number';
num.value = 0;
label.appendChild(num);
myForm.appendChild(label);

//create a start button
const start = document.createElement('input');
start.type = 'submit';
start.value = 'START';
myForm.appendChild(start);

//create countdown area
const countdownArea = document.createElement('div');
main.appendChild(countdownArea);

//create sound constructor
const sound = document.createElement('audio');
sound.src = './chime.mp3';
sound.style.display = 'none';
main.appendChild(sound);

//set click handler
function timer(e) {
    e.preventDefault();
    countdownArea.innerText = num.value;
    let countdown = setInterval(() => {
        countdownArea.innerText--;
        if (countdownArea.innerText <= 0) {
            countdownArea.innerText = 'Time\' up';
            sound.play();
            clearInterval(countdown);
            
        }
    }, 1000);
}
start.addEventListener('click', timer);