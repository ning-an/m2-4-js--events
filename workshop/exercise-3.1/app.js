setInterval(() => {
    const main = document.querySelector('.main')
    const now = new Date();
    main.innerText = now;
}, 1000);