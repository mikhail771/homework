"use strict";

let result = null;
let operator = null;
let operand1 = null;
let operand2 = null;

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

function calculate(a,b) {
    switch (operator) {
        case 'add':
            return Number(a) + Number(b);

        case 'sub':
            return a - b;

        case 'mult':
            return a * b;

        case 'div':
            return a / b;
    }
}

result = calculate(operand1, operand2);

alert(result);
