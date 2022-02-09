const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
    body: document.body,
};

let intervalId = null;

refs.btnStart.addEventListener('click', onClickBtnStart);

refs.btnStop.addEventListener('click', onClickBtnStop);

function onClickBtnStart() {
    if (intervalId) return;

    startChangingBodyBackgroundColor();

    toggleButtonsAttributeDisable();
}

function onClickBtnStop () {
    stopChangingBodyBackgroundColor();
}

function startChangingBodyBackgroundColor() {
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function stopChangingBodyBackgroundColor() {
    clearInterval(intervalId);
    intervalId = null;
    toggleButtonsAttributeDisable();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function toggleButtonsAttributeDisable() {
    refs.btnStart.toggleAttribute('disabled');
}