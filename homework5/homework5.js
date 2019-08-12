'use strict';

let string = '';
let oldChar = '';
let newChar = '';
let newString ='';

function replaceAll(str, oldChar, newChar) {
    let index = str.indexOf(oldChar);
    newString = str.replace(oldChar,newChar);

    return index < 0 ? newString : replaceAll(newString, oldChar, newChar);
}

function isCharOne(a) {
    if(a != 1)alert('Можно вводить только один символ');
}

do {
    string = prompt('Введите строку');
}
while (string.length < 1);

do {
    oldChar = prompt('Введите символ, который хотите заменить');
    isCharOne(oldChar.length);
}
while (oldChar.length !=1);

if (string.indexOf(oldChar) != -1) {

    do {
        newChar = prompt('Введите символ, на который заменить ' + oldChar);
        isCharOne(newChar.length);
    }
    while (newChar.length !=1);

    replaceAll(string,oldChar,newChar);
    alert(newString);
}
else alert('Символ ' + oldChar + ' не найден в строке ' + string);
