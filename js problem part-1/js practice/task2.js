/**
 * You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
 */

function countNumberRepeated(numbers, findNumber) {
    let count = 0;
    for (const number of numbers) {
        if (number === findNumber) {
            count++;
        }
    }
    return count;
}

const numbers = [5, 6, 11, 12, 98, 5];
const findNumber = 5;
const result = countNumberRepeated(numbers, findNumber);
console.log(`Total occurrences of ${findNumber}:`, result);
