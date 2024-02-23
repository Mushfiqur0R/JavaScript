const glass = {
    name: 'glass', 
    color: 'golden', 
    price: 12, 
    isCleaned: true 
};

 console.log(glass);

//  keys
 const keys = Object.keys(glass);
//  console.log(keys)

//  values
const values = Object.values(glass);
// console.log(values);

// array of array or 2D Array
const entries = Object.entries(glass);
// console.log(entries);

// Delete
delete glass.isCleaned;
console.log(glass);

// Another way to Delete
const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);

// Freeze - it's fixed object
Object.freeze(glass);
glass.source = 'Bangladesh';
console.log(glass);

// Seal
Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
console.log(glass);