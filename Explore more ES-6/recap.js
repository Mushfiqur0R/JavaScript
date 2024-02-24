/**
 * 1. var let const
 * 2. default parameter
 * 3. template string
 * 4. arrow function
 * 5. destructuring array and object
 * 6. Object.keys, Object.values, Object.entries
 * 7. for of used in array and string,
 * 8. for in loop used in object
 */

//  5. destructuring array and object

// array
const {age, z, ...other} = {x: 2, y: 5, z: 3, name:'ovijeet', age: 55}

// object
const [first, second, ...remaining] = ['ram', 'jam', 'jodu', 'kodu']