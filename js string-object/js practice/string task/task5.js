let inputString = "capitalize every first letter of each word";

let result = inputString.replace(/\b\w/g, match => match.toUpperCase());

console.log(result);
