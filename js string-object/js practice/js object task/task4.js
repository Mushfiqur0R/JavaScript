// Count the number of properties.
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

// for of using array
const keys = Object.keys(student);
// console.log(keys);

// for (const key of keys){
//     console.log(key);
// }
let propertyCount = 0;

for (let value of keys) {
    propertyCount++;
}

console.log("Number of properties:", propertyCount);
// for in (hasOwnProperty)
// let propertyCount = 0;
// for (const prop in student){
//     if(student.hasOwnProperty(prop)){
//         propertyCount++;
//     }
// }
// console.log(propertyCount);
