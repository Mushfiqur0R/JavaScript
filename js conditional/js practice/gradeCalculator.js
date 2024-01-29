/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// -----------------user input--------------------------------
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Prompt the user for the asking of Result
rl.question('Enter your Subject Result: ', (result) => {
    // Convert the user input to a numeric value
    var numericResult = parseInt(result);

        if (numericResult >=0 && numericResult <= 59) {
            console.log('F');
        } else {
            if (numericResult >= 60 && numericResult <= 69) {
                console.log('D+');
            } else {
                if (numericResult >= 70 && numericResult <= 79) {
                    console.log('C+');
                } else {
                    if(numericResult >= 80 && numericResult <= 89){
                        console.log('B+');
                    }else{
                        if(numericResult >= 90 && numericResult <= 100){
                            console.log('A+');
                        }else{
                            console.log('Undefined!');
                        }

                        
                    }
                    
                }
            }
        }



    // Close the readline interface
    rl.close();
});
