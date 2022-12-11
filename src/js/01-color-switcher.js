function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

let timerId = null;

startButton.addEventListener('click', onButtonStart);
stopButton.addEventListener('click', onButtonStop);

function onButtonStart() {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
        startButton.setAttribute('disabled', 'disabled');
    }, 1000);
}

function onButtonStop() {
    clearInterval(timerId);
    startButton.removeAttribute('disabled', 'disabled')
}
