/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// let weight = 65;
// let height = 5.8;
// let convertHeight = height * 0.3048;
// let BMI = weight / convertHeight**2;
// console.log('Your BMI:',BMI);
// if(BMI < 18.5){
//     console.log('You are Underweight');
// }else{
//     if(BMI >= 18.5 && BMI <=24.9){
//         console.log('Yor are Normal');
//     }else{
//         if(BMI >=25 && BMI <= 29.9){
//             console.log('You are overweight')
//         }else{
//             console.log('You are obese!')
//         }
//     }
// }

// -----------------user input--------------------------------
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Prompt the user for the asking of weight
rl.question('Enter your Weight: ', (weight) => {
    // Convert the user input to a numeric value
    var numericWeight = parseFloat(weight);

    rl.question('Enter your Height: ', (height) => {
        // Convert the user input to a numeric value
        var numericHeight = parseFloat(height);

        // let weight = 65;
        // let height = 5.8;
        let convertHeight = numericHeight * 0.3048;
        let BMI = numericWeight / convertHeight ** 2;
        console.log('Your BMI:', BMI);
        if (BMI < 18.5) {
            console.log('You are Underweight');
        } else {
            if (BMI >= 18.5 && BMI <= 24.9) {
                console.log('Yor are Normal');
            } else {
                if (BMI >= 25 && BMI <= 29.9) {
                    console.log('You are overweight')
                } else {
                    console.log('You are obese!')
                }
            }
        }



    // Close the readline interface
    rl.close();
});
});
