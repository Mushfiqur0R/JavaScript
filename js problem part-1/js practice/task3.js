/**
 * Write a function to count the number of vowels in a string.
 * 
 */
function countVowel(str){
    console.log(str);
    let vowel = 'aeiouAEIOU';
    let count = 0;
    for(const word of str){
        if(vowel.includes(word)){
            
            count ++;
        }
    }
    return count;
}
const result = countVowel('Education');
console.log('Total Number of Vowel:',result);