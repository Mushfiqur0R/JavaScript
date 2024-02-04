/**
 * create a function that is return only the even number
 * return the sum of even numbers
 */

function evenNumbersOnly(numbers){
    const even = [];
    for (const number of numbers){
        // console.log(number);
        if(number%2===0){
            console.log(number);
            even.push(number);
        }
    }
    return even;
}
const result = evenNumbersOnly([1,2,3,4,5,6,7,8]);
// console.log('Even Number:', result);

function sumOfEvenNumbers(numbers){
    let sum=0;
    let ar = [];
    for (const number of numbers){
         if(number%2===0){
            // console.log(number);
            ar.push(number);
            sum = sum + number;
            
         }
    }
    return sum;
}

const output = sumOfEvenNumbers([1,2,3,4,5,6,7,8,9,10]);
console.log('Sum of even 1 to 10:',output);