const person = ['rakib', 'nokib', 'sakib', 'dakib'];
const sortedPerson = person.sort();
console.log(sortedPerson);

// sort -->
const numbers = [4, 7, 2, 8, 3, 5];

/**
 * Ascending --> smaller to larger: [2, 3, 4, ....] 
 * Descending --> Larger to smaller:
 */

// const numbers_asc = numbers.sort(); //not working
const numbers_asc = [...numbers].sort(function(a,b){ return b - a}) //ascending used function
const numbers_dsc = [...numbers].sort(function(a,b){ return a - b}) //descending used function
console.log(numbers_asc);
console.log(numbers_dsc);