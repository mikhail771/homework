'use strict';

const bonus = 10;
let number = null;
let result = 0;
let oneMore = null;

function random(min,max) {
    return Math.round(min + Math.random()*(max-min));
}

function roulette() {
    do {
        number = prompt('Введите число от 1 до 10');
    } while (isNaN(number) || number < 1 || number > 10);

    if (number == random(1, 10)) result += bonus;
}

do {
    roulette();
    oneMore = confirm('Еще один раунд?');
} while (oneMore);

alert('Ваш результат: ' + result);
