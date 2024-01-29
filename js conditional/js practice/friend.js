/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// -----------------user input--------------------------------
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Prompt the user for the asking of Result
rl.question('Enter your Result: ', (result) => {
    // Convert the user input to a numeric value
    var numericResult = parseInt(result);



    if (numericResult >= 80) {
        rl.question('Enter your Friend Result: ', (frResult) => {
            // Convert the user input to a numeric value
            var numericFrResult = parseInt(frResult);
            if (numericFrResult > 80) {
                console.log('Come with me for a lunch');
            } else {
                if (numericFrResult >= 60 && numericFrResult <= 80) {
                    console.log('good luck next time');
                } else {
                    if (numericFrResult > 60 && numericFrResult <= 40) {
                        console.log('friends message unseen');
                    } else {
                        if (numericFrResult <= 40) {
                            console.log('block your friend');
                        } else {
                            console.log('Undefined!');
                        }


                    }

                }
            }
            rl.close();
        });
    }

    else {
        console.log('go to home and sleep and act sad');
        // Close the readline interface
        rl.close();
    }

});
