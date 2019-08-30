'use strict';

let name = prompt('Enter your name');

document.getElementById('greeting').innerHTML ='Hello ' + name + '!';

let numbers = prompt('Введите числа через запятую');

let arrNumbers = numbers.split(',');

let max = Math.max.apply(null,arrNumbers);
let min = Math.min.apply(null,arrNumbers);

if(!min || !max){
    document.getElementById('validation').style.background = "red";
    document.getElementById('validation').style.width = "200px";
    document.getElementById('validation').style.height = "50px";
    document.getElementById('max').innerHTML = 'ERROR';
}else{
    document.getElementById('max').innerHTML = 'Max: ' + max;
    document.getElementById('min').innerHTML = 'Min: ' + min;
}




