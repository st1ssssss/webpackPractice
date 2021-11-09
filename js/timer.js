import { loadScript } from './load.js'
import { ending } from './alarmclock.js'



const tickWindow = document.getElementById('tickWindow');
let timerX

export function timeHandler() {
    document.getElementById('start-btn').addEventListener('click', (event) => {
        event.preventDefault();
        const timeNumber = document.getElementById('timeNumber').value;
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




