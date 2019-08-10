"use strict";

let result = null;
let operator = null;
let operand1 = null;
let operand2 = null;

function add(a,b) {
    return Number(a) + Number(b);
}

function sub(a,b) {
    return a - b;
}

function mult(a,b) {
    return a * b;
}

function div(a,b) {
    return a / b;
}

while (true) {
    operator = prompt('Выберите оператор: add, sub, mult, div');

    if (operator == 'add' ||
        operator == 'sub' ||
        operator == 'mult' ||
        operator == 'div')
        break;
}

do {
    operand1 = prompt('Введите первый операнд');
}
while (isNaN(operand1));

do {
    operand2 = prompt('Введите второй операнд');
}
while (isNaN(operand2));

    switch (operator) {
        case 'add':
           result = add(operand1, operand2);
           break;

        case 'sub':
            result = sub(operand1, operand2);
            break;

        case 'mult':
            result = mult(operand1, operand2);
            break;

        case 'div':
            result = div(operand1, operand2);
            break;
}

alert(result);
