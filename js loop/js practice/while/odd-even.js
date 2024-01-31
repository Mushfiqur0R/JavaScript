/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

// task 1
let i=61;
console.log('Odd Number:');
while(i <= 100){
    if(i%2==0){
        console.log(i);
        
    } 
    i++;
}

// task 2
let j=78;
console.log('Even Number:');
while(j <= 98){
    if(j%2==1){
        console.log(j);
        
    } 
    j++;
}