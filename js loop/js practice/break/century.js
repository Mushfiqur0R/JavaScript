/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

// for loop
for (let i=1; i<=200; i++){
    if(i>100){
        
        break;
        
    }
    console.log(i);
}

// while loop
let i = 0;
while(i<=200){
    if(i>=100){
        
        break;
        
    }
    i++;
    console.log(i);
}