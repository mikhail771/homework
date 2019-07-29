"use strict";

let student1 = {
    name: "Трус",
    height: 178
};
let student2 = {
    name: "Балбес",
    height: 187
};
let student3 = {
    name: "Бывалый",
    height: 199
};
let averageHeight = (student1.height+student2.height+student3.height)/3;

console.log(student1.name, student1.height);
console.log(student2.name, student2.height);
console.log(student3.name, student3.height);
console.log("Средний рост: ", averageHeight);