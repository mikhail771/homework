"use strict";

let result = 0;
const bonus = 10;
const q1 = prompt('При какой температуре закипает вода на Эвересте?');
const q2 = confirm('Правда ли что за минуту мобильные операторы зарабатывают $812 000 тоько на SMS?');
const q3 = prompt('Введите 10-ую букву русского алфавита.');

if (q1 == 72)result += bonus;

if (q2) result += bonus;

if (q3 == 'и') result += bonus;

const message = 'Вы набрали '+result+' баллов!';

switch (result) {
    case 0:
        alert(message + ' Вам необходимо больше читать!');
        break;
    case 10:
        alert(message + ' Попробуйте еще!');
        break;
    case 20:
        alert(message + ' Вы мозг!');
        break;
    case 30:
        alert(message + ' Вы сверхразум!!!');
        break;
}
