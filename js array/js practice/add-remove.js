/**
 * 2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
 */

let touristDestinations = ['coxbazar', 'Dhaka', 'Khulna'];
console.log('Initial Array Element:',touristDestinations);

// add a new tour spot using push (last index)
touristDestinations.push('Barishal');
console.log('Add new tour spot using push:',touristDestinations);

// add a new tour spot using Unshift (first index)
touristDestinations.unshift('Chitagong');
console.log('Add new tour spot using Unshift:',touristDestinations);

// add a two new tour spot using Unshift (first index)
touristDestinations.unshift('Moymanshing', 'Rajshahi');
console.log('Add new two tour spot using Unshift:',touristDestinations);

// Remove last tour spot using pop
out1 = touristDestinations.pop();
out2 = touristDestinations.pop();
console.log('Remove the last tourist destination:',touristDestinations);
console.log('Show Out Array:', out1, out2);



