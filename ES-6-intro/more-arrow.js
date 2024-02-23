const difference = (x, y) => x- y;
const multiplay = (first, second, third) => first * second * third;

// implicit explicit
const getAge = (person) => person.age;
const student = {name: 'anannat', age:45}
const age = getAge(student)
console.log(age);


// difference between arrow function and regular function