// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
//in js.
//Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

let inputString = "This is an Example with X and x";

// Check if 'x' exists, and replace with 'y'
if (inputString.includes('x')) {
    inputString = inputString.replace(/x/g, 'y'); // g stands for "global
}

// Check if 'X' exists, and replace with 'Y'
if (inputString.includes('X')) {
    inputString = inputString.replace(/X/g, 'Y'); // g stands for "global
}

console.log(inputString);
