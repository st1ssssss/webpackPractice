console.log('common.js loaded');

const dates = document.getElementById('datecalc-btn');
const timer = document.getElementById('timer-btn')

export function setEventHandlers() {
    dates.addEventListener('click', (event) => {
        event.preventDefault();
        isVisibleBlock(".datecalc-block")

    });

    timer.addEventListener('click', (event) => {
        event.preventDefault();
        isVisibleBlock(".timer-block")

    });
}

function isVisibleBlock(blockToShow) {
    document.querySelector(blockToShow).classList.toggle('isVisible');

}