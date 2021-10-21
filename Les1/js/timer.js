import { loadScript } from './load.js'
import { ending } from './alarmclock.js'


loadScript('./common.js', () => {
    loadScript('./luxon.min.js>', () => {
        console.log('timer.js loaded');
    })
})

const tickWindow = document.getElementById('tickWindow');
const timeNumber = document.getElementById('timeNumber').value;
let timerX

export function timeHandler() {
    document.getElementById('start-btn').addEventListener('click', (event) => {
        event.preventDefault();

        timePlace(timeNumber)
    })

    document.getElementById('stop-btn').addEventListener('click', (event) => {
        event.preventDefault();
        ending(timerX)

    })
}



function timePlace(n) {

    timerX = setInterval(() => {

        tickWindow.innerHTML = `У вас осталось: ${n}`;
        if (n === 0) ending(timerX);
        n--
    }, 1000);

}




