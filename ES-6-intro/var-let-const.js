/**
 * var : no reason to use var
 * let : allow it to reassign
 * const: do no allow it to reassign
 */

let count = 0;
count = count+ 10;
console.log(count);

// const can push array
const number = [23, 4, 5];
number[1] = 55;
number.push(8, 9, 10);
console.log(number);

// object
let student = {
    name: 'moyna',
    class: 12
}
student = {name:"kokil"}
console.log(student)