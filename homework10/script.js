'use strict';

function createCalculator(arg) {
    let result = arg;

    return {
        add: (arg) => result += arg,
        sub: (arg) => result -= arg,
        divide: (arg) => result /= arg,
        mult: (arg) => result *= arg,
        set: (arg) => result = arg
    }
}

const result = createCalculator(10);

console.log(result.add(45));
console.log(result.sub(45));
console.log(result.divide(5));
console.log(result.mult(5));
console.log(result.set(100));
console.log(result.mult(5));
