/**
 * Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 */

function longestWord (str){
    let words = str.split(' ');
    let longWord = '';

    for (const word of words){
        if(word.length > longWord.length){
            longWord = word;
        }
    }
    return longWord;
}
const result = longestWord('I am learning Programming to become a programmer');

console.log(result);