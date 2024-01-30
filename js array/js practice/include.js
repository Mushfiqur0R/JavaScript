/**
 * Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
 */

let book = ['Vevobook', 'Lexabook', 'javascript book']
console.log('Initial Array Element:', book);
console.log(book.includes('javascript book'));

if(book.includes('javascript book')){
    console.log('JS Book is Present');
}else{
    console.log('JS Book is not Present');
}