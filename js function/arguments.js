function doubleIT (number){ //parameter
    const doubled = number * 2;
    console.log(number, doubled);
}

console.log('I will call the function');
decodeURI(15); //argument
console.log('----------');
doubleIT(88);
console.log('----------');
doubleIT(873);
console.log('---------------');
const number = 55;
doubleIT(number);
const money = 155;
doubleIT(money);

// when variable is a argument and called function like a parameter  
function difference (num1, num2){
    const diff = num1 - num2;
    console.log(num1, num2, 'Difference is:', diff);
}
const fatherAge = 70;
const myAge = 24;

difference(fatherAge, myAge);