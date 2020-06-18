const main = document.querySelector('.main');
const btnCount = 20;

function handler(e) {
    e.preventDefault();
    e.target.classList.toggle('green');
}

for (let i = 0; i < 20; i++) {
    let btn = document.createElement('button');
    btn.innerText = i + 1;
    btn.classList.add('btn');
    let topDistance = Math.random() * 100;
    let leftDistance = Math.random() * 100;
    btn.style.position = 'absolute';
    btn.style.top = `${topDistance}%`;
    btn.style.left = `${leftDistance}%`;
    main.appendChild(btn);
    btn.addEventListener('click', handler);
}