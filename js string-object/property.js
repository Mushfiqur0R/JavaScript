const person = {
    name: 'Mushfiqur Rahman',
    age: 25,
    profession: 'developer',
    salary: 2500,
    married: true,
    'fav places': ['banderbone','coxbazar']
}

// console.log(person);
// dot notation
// console.log(person.name); //object property name
const income = person.salary;
// console.log(income);

// another way to access object
// bracket notation
// third bracket using
console.log(person.age);
console.log(person['age']);
const boyos = person['age'];
console.log(boyos);

console.log(person["fav places"]);

const keyName = 'profession';
console.log(person[keyName]);