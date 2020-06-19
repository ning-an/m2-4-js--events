const main = document.querySelector('.main');

//create header
const header = document.createElement('header');
header.classList.add('header');
main.appendChild(header);

//create button
const btn = document.createElement('button');
btn.innerText = 'START';
btn.classList.add('btn');
header.appendChild(btn);

//create dot section
const dotSection = document.createElement('div');
dotSection.classList.add('dotSection');
main.appendChild(dotSection);

//create dots;
const dotCount = Math.ceil(Math.random() * 10 + 1);

function dotClicker() {
    this.style.backgroundColor = 'green';
    this.checked = true;
}

const dotList = [];
for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    dot.innerText = i + 1;
    dotSection.appendChild(dot);
    const topD = Math.random() * 90;
    const leftD = Math.random() * 90;
    dot.style.position = 'absolute';
    dot.style.top = `${topD}%`;
    dot.style.left = `${leftD}%`;
    dot.style.zIndex = 2;
    dot.addEventListener('click', dotClicker);
    dot.checked = false;
    dotList.push(dot);
}

//result board
const board = document.createElement('div');
board.innerText = 'You Win!!!';
board.classList.add('board');
dotSection.appendChild(board);

//button click
function clickHandler(e) {
    e.preventDefault();
    for (let i = 0; i < dotList.length; i++) {
        dotList[i].style.opacity = 1;
    }
    let timer = Math.ceil(Math.random() * 5 + 5);
    this.innerText = timer;
    let countDown = setInterval(() => {
        timer--;
        e.target.innerText = timer;
        if (timer <= 0) {
            if (!dotList.every(function(elem) {
                return elem.checked == true;
            })) {
                board.innerText = 'You Lose....';
                board.style.backgroundColor = 'red';
            }
            board.style.opacity = 1;
            board.style.zIndex = 99;
            btn.innerText = 'Time out';
            clearInterval(countDown);
        }
    }, 1000);
    btn.removeEventListener('click', clickHandler);
}

btn.addEventListener('click', clickHandler);
