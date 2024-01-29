/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

// let userGivenPrice = 400;
// if(userGivenPrice >= 500){
//     console.log('You got Free Coke');
// }
// else{
//     console.log('With coke', userGivenPrice+30);
// }


// user input using readline............
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for the price of the burger
rl.question('Enter the price of the burger in taka: ', (burgerPrice) => {
  // Convert the user input to a numeric value
  var numericBurgerPrice = parseFloat(burgerPrice);

  // Check if the input is a valid number
  if (!isNaN(numericBurgerPrice)) {
    // Display the user input in the terminal
    console.log('You entered the price of the burger: ' + numericBurgerPrice);

    // Check the price of the burger and determine the free drink
    if (numericBurgerPrice > 500) {
      console.log('You get a free Coke!');
    } else {
      console.log('Coke is available for an additional 30 taka.');
    }
  } else {
    // Handle invalid input
    console.log('Invalid input. Please enter a valid numeric value for the burger price.');
  }

  // Close the readline interface
  rl.close();
});
