// for of use on array or string
// for in using in object

const numbers = [1, 2, 3, 4,];
for(const num of numbers){
    // console.log(num);
}
const nobab = 'Siraj Ud Doula';
for (const char of nobab){
    // console.log(char);
}

// for in loop using in Object
const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};

for(const key in glass){
    const value = glass[key];
    console.log(key, value);
}
// optional
const keys = Object.keys(glass);
console.log(keys);
for(const key of keys){
    const  value = glass[key]
    console.log(key, value);
}