"use strict";

let number = null;
let oneMore = false;

function multiTable() {
    do {
        number = prompt('Введите число');
    }
    while (number > 10 || number < 0 || isNaN(number));

    for (let i = 0; i < 11; i++) {
        console.log(number + '*' + i + "=" + number * i);
    }
}

do {
    multiTable();
    oneMore = confirm("Хотите еще?");
} while (oneMore);
