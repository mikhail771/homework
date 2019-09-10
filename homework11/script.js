'use strict';

function Student(name, arrMarks) {
    this.name = name,
    this.arrMarks = arrMarks,
    this.averageMark = function calculateAverageMark() {

        const sumMarks = arrMarks.reduce(function (sum, current){

            return (sum + current);
        });

        return sumMarks / arrMarks.length;
    }
}

function groupsAverageMark(group) {
    let averageGroupMark = 0;
    for(let i = 0; i < group.length; i++){
        averageGroupMark += group[i].averageMark();
    }
    return averageGroupMark / group.length;
}

const student1 = new Student('Karl', [7,7,7,8,8,9]);

const group1 = [
new Student('John', [5,6,1]),
new Student('Bob', [4,6,7,8,9,5]),
new Student('Molly', [10,10,9,9])
];

console.log(group1[0].averageMark());
console.log(group1[1].averageMark());
console.log(group1[2].averageMark());
console.log(student1.name, student1.arrMarks, student1.averageMark());

console.log(groupsAverageMark(group1));
