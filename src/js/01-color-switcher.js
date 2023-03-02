function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

let timerId = null;
let isActive = false;

startButton.addEventListener('click', onButtonStart);
stopButton.addEventListener('click', onButtonStop);

function onButtonStart() {
    if (isActive) {
        return;
    };

    

    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
        startButton.setAttribute('disabled', 'disabled');
    }, 1000);

    isActive = true;
}

function onButtonStop() {
    clearInterval(timerId);
    startButton.removeAttribute('disabled', 'disabled');
    isActive = false;
}
