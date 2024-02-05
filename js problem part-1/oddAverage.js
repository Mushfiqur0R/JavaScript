/**
 * create a function an array as parameter
 * give me the average number of the numbers in array
 */

function oddAverage (numbers){
    let avg;
    let sum=0;
    let size = numbers.length;
    console.log('Odd Number:');
    size = numbers.length;
    for (const number of numbers){
        if(number%2 === 1){
            console.log(number);
            
            sum = sum + number;
            
        }
    }
    avg = sum / size;
    return avg;
}
const numbers = [42, 13, 58, 65, 81];
const avg = oddAverage(numbers);
console.log('Average the Odd Number:',avg);
