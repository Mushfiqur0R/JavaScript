// odd numbers

// One style
// for(let i = 0; i < 20; i++){
//     if( i % 2 === 1 ){
//         console.log(i);
//     }
// }

// Second style
// for(let i = 0; i < 20; i++){
//     if( i % 2 !== 0 ){
//         console.log(i);
//     }
// }

// Third style
// for(let i = 1; i < 20; i+=2){
//     console.log(i);
// }

// give me the list numbers between 1 to 30 divisible by 5
// for(let i=1; i<=30; i++){
//     if(i%5===0){
//         console.log('list numbers between 1 to 30 divisible by 5:',i);
//     }
// }
// give me the list numbers between 1 to 30 divisible by 3
// for(let i=1; i<=30; i++){
//     if(i%3===0 && i%5===0){
//         console.log(i);
//     }
// }

// give me the sum of the number from 1 to 20 that are divisible by 3
let sum=0;
for(let i =1; i<=20; i++){
    if(i%3===0){
        
        console.log(i);
        sum=sum+i;
        
    }
    
}
console.log('total of the numbers',sum);
