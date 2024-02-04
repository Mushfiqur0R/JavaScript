/**
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 * 
 */

function makeAvg(numbers) {
    console.log('Array:',numbers);
    let avg;
    let sum = 0;
    console.log('Size of Array:', numbers.length);
    
    for (const number of numbers) {
        sum +=number; 
        avg = sum/4;
    } return avg;
} 
const result = makeAvg([20, 30, 40, 50]);
console.log('Average:', result);