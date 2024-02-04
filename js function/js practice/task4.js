/**
 * Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */

function countZero(str){
    let result=0;
    console.log('String:',str);
    console.log('Length of String:',str.length);

    for(binary of str ){
        if (binary === '0'){
            result ++;
            
        }
    } 
    return result; 
}
const result = countZero('0011010011');
console.log('Total 0:',result);