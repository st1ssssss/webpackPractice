import { diffDates, diffToHtml } from './datecalc.js';
import { formatError } from './utils.js';
import { timeHandler } from './timer.js';
import { setEventHandlers } from './common.js';
import '../css/style.css';
import '../media/zvuk.mp3';

Howler.volume(0.2)

const dateCalcFrom = document.getElementById('datecalc');
const dateCalcResult = document.getElementById('datecalc_result');

dateCalcFrom.addEventListener('submit', handleCalcDates)

function handleCalcDates(event) {
    dateCalcResult.innerHTML = '';
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value,
        secondDate = secondDate.value;

    if (firstDate, secondDate) {
        const diff = diffDates(firstDate, secondDate)
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else {
        dateCalcResult.innerHTML = formatError('Для расчета промежутка необходимо заполнить оба поля');
    }
}

timeHandler();
setEventHandlers()