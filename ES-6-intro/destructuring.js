const actor = {
    name: 'Ananata',
    age: 30,
    phone: '01783390202',
    money: 1234444
}
// const phone = actor.phone;
// const name = actor.name;
// console.log(phone);
// const age = actor.age;

// ........ Object Destructure .....................
// const {phone, age} = actor
const {phone, age: boyos} = actor
// console.log(phone);
// console.log(age);
// console.log(boyos);

// Array Destructuring

function doubleThem(a, b){
    return [a*2, b*2];
}
const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);