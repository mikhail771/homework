"use strict";

let result = 0;
const bonus = 10;
const answer1 = prompt('При какой температуре закипает вода на Эвересте?');
const answer2 = confirm('Правда ли что за минуту мобильные операторы зарабатывают $812 000 тоько на SMS?');
const answer3 = prompt('Введите 10-ую букву русского алфавита.');

if (answer1 == 72)result += bonus;

if (answer2) result += bonus;

if (answer3 == 'и') result += bonus;

let message = 'Вы набрали '+result+' баллов!';

switch (result) {
    case 0:
        message += ' Вам необходимо больше читать!';
        break;
    case 10:
        message += ' Попробуйте еще!';
        break;
    case 20:
        message += ' Вы мозг!';
        break;
    case 30:
        message += ' Вы сверхразум!!!';
        break;
}
alert(message);
