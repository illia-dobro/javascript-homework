function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
let idStart;

function handleInterval() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function startRandom() {
  idStart = setInterval(handleInterval, 1000);
  start.disabled = true;
}

function stopRandom() {
  clearInterval(idStart);
  start.disabled = false;
}

start.addEventListener('click', startRandom);

stop.addEventListener('click', stopRandom);
