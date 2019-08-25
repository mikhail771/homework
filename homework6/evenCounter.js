'use strict';

let number = null;

function evenFounder(a) {
    let count = 0;
    let arr = [];

    for (let i = 0; i < a.length; i++) {
        arr.push(+a.charAt(i));
    }

    for (let j = 0; j < arr.length; j++){
        if (arr[j] % 2 == 0)count++;
    }

    return count;
}

do {
    number = prompt('Введите число:')
} while (isNaN(number));

let result = evenFounder(number);

alert('В числе ' + number + ' четных цифр: ' + result);

