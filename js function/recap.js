function add(price1, price2){
    const total = price1 + price2;
    return total;
}

const bill = add(50, 80);

function add2 (price1, price2){
    return price1 + price2;
}
const bill2 = add2(5,80);
console.log(bill2, bill);

function doMath (num1, num2){
    const sum = num1 + num2;
    const dif = num1 - num2;
    const multiply = sum * dif;
    const div = multiply / 2;
    return div;
}

const result = doMath(10,5);
console.log(result);

