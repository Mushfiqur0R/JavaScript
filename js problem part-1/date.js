/**
 * 
 */

const today = new Date();
const date = new Date('2062-09-12');
console.log(date.getMonth());
console.log(date.getDay());

const specificDate = new Date(2091, 0, 26) //Month value always start with 0 index ...
console.log(specificDate)
specificDate.setMonth(10); //set any month with index value which is started by 0....
console.log(specificDate);
console.log(specificDate.toLocaleString()); //show date in sting 
console.log(specificDate.toLocaleString('en-GB')); //show date in sting and bd time standard

// 1971 unix epoc
