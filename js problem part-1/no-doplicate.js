/**
 * array has some duplicate element
 */

const name = ['abul', 'babul', 'abul', 'kabul', 'cabul'];
const number = [1, 2, 1, 4, 5, 5];

function noDuplicate (array){
    const unique = [];
    for (const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
// const uniqueArray = noDuplicate(name);
const uniqueArray = noDuplicate(number);
console.log(uniqueArray);