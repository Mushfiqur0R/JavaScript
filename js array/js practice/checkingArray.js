/**
 * 4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
 */

let book = ['holy Book', 'Harmbarg Book', 'Little Angel Book'];
let fruits = 'Mango 1 KG';
let complex = ['holy water', 100, 45.5];
console.log('Book:',Array.isArray(book));
console.log('Fruits:',Array.isArray(fruits));
console.log('Complex:',Array.isArray(complex));

if (!Array.isArray(fruits)){
    console.log('We are sorry');
}else{
    console.log('Not Possible!');
}