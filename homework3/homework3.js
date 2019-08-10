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

for (let i = 0; i < operandsCount; i++){
    do {
        let a = prompt('Введите операнд' );
    }
    while (isNaN(a));

switch (operator) {
    case 'add':
            result += Number(a);
        break;

    case 'sub':
            if (!i){
                result = a;
                continue;
            }
            result = result - a;
        break;

    case 'mult':
            if (!i){
                result = a;
                continue;
            }
            result *= a;
        break;

    case 'div':
            if (!i) {
                result = a;
                continue;
            }
            result = result / a;
        break;
    }
}
  alert("Результат действия " + operator + " равен "+ result);
