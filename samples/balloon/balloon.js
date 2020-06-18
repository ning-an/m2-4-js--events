const balloon = document.getElementById('balloon');
let balloonSize = 10;

function handler() {
    console.log(balloonSize)
    if (event.key === 'ArrowUp') {
        balloonSize += 10;
        balloon.style.fontSize = `${balloonSize}px`;
    };
    if (balloonSize >= 300) {
        balloon.innerText = '💥';
        document.removeEventListener('keydown', handler);
        let explode = setInterval(() => {
            balloonSize += 20;
            balloon.style.fontSize = `${balloonSize}px`;
            if (balloonSize >= 1000) {
                balloon.style.opacity = 0;
                clearInterval(explode);
            }
        }, 10);
    }
    if (event.key === 'ArrowDown') {
        balloonSize -= 10;
        balloon.style.fontSize = `${balloonSize}px`;
    };
}

document.addEventListener('keydown', handler);