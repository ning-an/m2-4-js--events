const div = document.querySelector('.main');
const btnCount = 20;

function handler() {
    event.preventDefault();
    // this.classList.remove('red')
    this.classList.toggle('green');
}

for (let i = 0; i < btnCount; i++) {
    let btn = document.createElement('button');
    btn.innerText = i + 1;
    btn.classList.add('red');
    div.appendChild(btn);
    btn.addEventListener('click', handler);
}


