"use strict";

let operator = '';
let operandsCount = 0;
let result = 0;

while (true) {
    operator = prompt('Введите оператор:');

    if (operator == 'add' ||
        operator == 'sub' ||
        operator == 'mult' ||
        operator == 'div')
    break;
}

do {
    operandsCount = prompt('Введите количество операндов:');
}
while (operandsCount < 1 || operandsCount > 5 || isNaN(operandsCount));

switch (operator) {
    case 'add':
        for (let i = 0; i < operandsCount; i++){
            let a = prompt('Введите операнд');
            result += Number(a);
        }
        break;

    case 'sub':
        for (let i = 0; i < operandsCount; i++){
            let a = prompt('Введите операнд');
            if (!i){
                result = a;
                continue;
            }
            result = result - a;
        }
        break;

    case 'mult':
        for (let i = 0; i < operandsCount; i++){
            let a = prompt('Введите операнд');
            if (!i){
                result = a;
                continue;
            }
            result *= a;
        }
        break;

    case 'div':
        for (let i = 0; i < operandsCount; i++) {
            let a = prompt('Введите операнд');
            if (!i) {
                result = a;
                continue;
            }
            result = result / a;
        }
        break;
}
  alert("Результат действия " + operator + " равен "+ result);
