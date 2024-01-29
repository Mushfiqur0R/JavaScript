/**
 * TERNARY --> three part
 * 
 * ?  :
 * condition ? true : false
 */

// const age = 18;
// if(age >= 18){
//     console.log('you can vote');
// }else{
//     console.log('you can not vote');
// }
// simple ternary
// const age = 18;
// age >= 18 ? console.log('you can vote') : console.log('you can not vote');

// 
let price = 500;
const isLeader = true;

// if(isLeader === true){
//     price = 0;
// }
// else{
//     price = price + 100;
// }
// console.log(price);
price = isLeader === true ? 0 : price + 100;

// optional