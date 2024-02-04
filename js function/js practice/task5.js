/**
 * Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 * 
 */
function oddEven(number){
    let result='';
    if(number%2===0){
        result = 'Even';
        return result;
    }else{
        result = 'Odd';
        return result;
    }
}
const result = oddEven(6);
console.log(result);