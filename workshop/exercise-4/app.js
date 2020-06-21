const myForm = document.querySelector('.myForm');
const playArea = document.querySelector('.playArea');
const start = document.querySelector('.start');
const scratch = document.querySelector('.scratch');
const result = document.querySelectorAll('.result');
const win = document.querySelector('.win');

function startGame(e) {
    e.preventDefault();
    myForm.style.display = 'none';
    const word = document.querySelector('.input').value;
    const letters = [];
    for (let i = 0; i < word.length; i++) {
        const btn = document.createElement('button');
        btn.style.borderBottom = 'solid black';
        btn.classList.add('btn');
        playArea.appendChild(btn);
        letters.push(btn);
    }

    let count = 0;
    function guess(e) {
        if (word.includes(e.key)) {
            word.split('').forEach((elem, i) => {
                if (elem === e.key) {
                    letters[i].innerText = elem;
                    letters[i].style.borderBottom = 'none';
                }
            })
        } else {
            result[count].style.visibility = 'visible';
            count++;
            if (!scratch.innerText.includes(e.key)) {
                scratch.innerText += e.key;
            };
        }
        if (letters.every((elem) => {
            return !elem.innerText == false;
        })) {
            document.removeEventListener('keypress', guess);
            win.style.opacity = 1;
        }
        if (count == 4) {
            document.removeEventListener('keypress', guess);
            win.style.opacity = 1;
            win.innerText = 'You Lose';
        }
    }
    document.addEventListener('keypress', guess);
    
}
start.addEventListener('click', startGame);