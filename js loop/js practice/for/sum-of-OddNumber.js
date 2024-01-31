
/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

// task 1
let sum = 0;
console.log('Odd Number:')
for(let i=81; i<=131; i++){
    if(i%2==0){
        console.log(i);
        sum = sum + i;
    }
}
console.log('Sum of 81 & 131:',sum);


// task 1
let sum2 = 0;
console.log('Even Number:')
for(let i=206; i<=311; i++){
    if(i%2==0){
        console.log(i);
        sum2 = sum2 + i;
    }
}
console.log('Sum of 206 & 311:',sum2);