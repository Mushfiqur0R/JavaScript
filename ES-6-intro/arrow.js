function add (a, b){
    const result = a + b;
    return result;
}

// const sum = add(5, 90);
// console.log(sum);

// another way
function add(a, b){
    return a + b;
}

// function expression
// const add = function(a, b){
//     return a + b;
// }

//  arrow function => it's a function
const add2 = (a, b) => a + b;
const sum = add2(5, 90);
console.log(sum);