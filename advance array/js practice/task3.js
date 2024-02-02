/**
 * Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
 */

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
var concatenate = '';
for (const num of numbers){
    concatenate = num + concatenate;
}
console.log(concatenate);


// reverse
var concatenateReverse = '';
for (const num of numbers.reverse()){
    concatenateReverse = num + concatenateReverse;
}
console.log(concatenateReverse);