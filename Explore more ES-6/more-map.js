const numbers = [12, 18, 9, 9];
const doubled = numbers.map(num => num * 2)
console.log(doubled);

const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus);

const half = numbers.map(num => num/2);
// console.log(half);


const friends = ['Tom', 'John', 'Micheal', 'Oliver'];
const length = friends.map(frnd => frnd.length)
const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);
