'use strict';

const BONUS = 10;
let result = 0;


function random(min,max) {
    return Math.round(min + Math.random()*(max-min));
}

function roulette() {
    do {
        let number = prompt('Введите число от 1 до 10');
    } while (isNaN(number) || number < 1 || number > 10);

    if (prompt('Введите число от 1 до 10') == random(1, 10)) result += BONUS;
}

do {
    roulette();
    let oneMore = confirm('Еще один раунд?');
} while (oneMore);

alert('Ваш результат: ' + result);
