/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

// -----------------user input--------------------------------
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Prompt the user for the asking of Result
rl.question('Are You Student or regular Citizens? ', (qa) => {
    // Convert the user input to a numeric value
    var numericQa = qa.toLocaleLowerCase();

    if (numericQa === 'citizens') {
        rl.question('Enter your Age: ', (age) => {
            // Convert the user input to a numeric value
            var numericAge = parseInt(age);
            if (numericAge < 10) {
                console.log('Free to go');
            } else {
                if (numericAge >= 60) {
                    console.log('15% off your ticket:', 800-800 * 0.15);
                } else {
                    console.log('Regular Ticket fare 800 tk');
                }

            }

            rl.close();
        });

    }else{
        if(numericQa === 'student'){
            console.log('50% off your ticket:', 800 * 0.5);
            rl.close();
        }else {
            console.log('Invalid input. Please enter "student" or "citizens".');
        }
        rl.close();
    }


    // Close the readline interface
    
});
