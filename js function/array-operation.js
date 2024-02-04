/**
 * Objective: write a function to give me the sum of all numbers in an array
 *  
 */

function sumOfAllNumber(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
        
    }
    return sum;
}
const numbs = [12,13,14,15];
const sum = sumOfAllNumber(numbs);
console.log('Sum of Number:',sum);
// console.log('Sum of Number:',numbs);