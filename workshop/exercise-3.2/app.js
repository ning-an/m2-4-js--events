const main = document.querySelector('.main');

//create button
const btn = document.createElement('button');
btn.innerText = 'START';
main.appendChild(btn);

//create stopwatch
// 1.create stopwatch section
const stopwatch = document.createElement('div');
main.appendChild(stopwatch);
// 2.pseudo date ending with 00:00:00
let pDate = new Date(0);
// 3.format
let pMinute = ('0' + pDate.getMinutes()).slice(-2);
let pSecond = ('0' + pDate.getSeconds()).slice(-2);
stopwatch.innerText = `${pMinute}:${pSecond}`;

//set interval
let countdown;
function handleStopwatch() {
    if (btn.innerText === 'START') {
        btn.innerText = 'STOP';
        countdown = setInterval(() => {
            pDate.setSeconds(Number(pSecond) + 1);
            pMinute = ('0' + pDate.getMinutes()).slice(-2);
            pSecond = ('0' + pDate.getSeconds()).slice(-2);
            stopwatch.innerText = `${pMinute}:${pSecond}`;
        }, 1000);
    } else {
        btn.innerText = 'START';
        clearInterval(countdown);
    }
}
btn.addEventListener('click', handleStopwatch);