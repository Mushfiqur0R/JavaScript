/**
 * type of variable declaration
 * var
 * const
 * let
 */

const salary = 25000;
const isBCS = true;
const height = 61;
const hasCar = true;
// if( salary > 20000 && isBCS && height > 66){
//     console.log('Perfect Man');
// }
// if(salary>20000 || isBCS == true || height > 60){
//     console.log('OK!')
// }
// else{
//     console.log('Not Perfect');
// }

// -----------complex condition-------------
if((salary > 20000 && hasCar == true) || isBCS == true){
    console.log('Perfect')
}