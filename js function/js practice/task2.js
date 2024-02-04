/**
 * Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

function findOddEvenNumber (number){
    if(number%2===1){
        const mul = number * 2;
        return mul;
    }else{
        return number/2;
    }
    
}
const result = findOddEvenNumber(6);
console.log(result);