
/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

// task-1
let sum = 0;
let i = 81;
console.log('Odd Number:')
while(i<=131){
    if(i%2===0){
        console.log(i);
        sum = sum + i;
    }
    i++;
}
console.log('Sum of 81 to 131:',sum);


// task-2
let sum2 = 0;
let j = 206;
console.log('Even Number:')
while(j<=311){
    if(j%2===1){
        console.log(j);
        sum2 = sum2 + j;
    }
    j++;
}
console.log('Sum of 81 to 131:',sum2);