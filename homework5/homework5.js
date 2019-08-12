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

do {
    string = prompt('Введите строку');
}
while (string.length < 1);

do {
    oldChar = prompt('Введите символ, который хотите заменить')
}
while (oldChar.length !=1);

do {
    newChar = prompt('Введите символ, на который заменить ' + oldChar)
}
while (newChar.length !=1);

if (string.indexOf(oldChar) != -1) {
    replaceAll(string,oldChar,newChar);
    alert(newString);
}
else alert('Символ ' + oldChar + ' не найден в строке ' + string);


