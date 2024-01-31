const first = 'Abid';
const last = 'Nabid';

// const fullName = first + last;
const fullName = first +' '+last; //white space 
console.log(fullName);
const fullName2 = first.concat(' ').concat(last); //white space
console.log(fullName2);

// includes

console.log(last.includes('x'));