//It is exactly the same as I did for exercise 2.1
const main = document.querySelector('.main');
const btnCount = 20;

function handler(event) {
    event.preventDefault();
    event.target.classList.toggle('green');
}

for (let i = 0; i < btnCount; i++) {
    let btn = document.createElement('button');
    btn.innerText = i + 1;
    btn.classList.add('btn');
    btn.addEventListener('click', handler);
    main.appendChild(btn);
}
