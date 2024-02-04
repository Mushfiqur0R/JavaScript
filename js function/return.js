function tenTimes (number){
    const result = number*10;
    return result;
}

function cutHalf (number){
    const half = number / 2;
    return half;
}

tenTimes(5); // not show output

const result = tenTimes(5); //if you want to show return as output then you need to define a variable.
console.log('Output:',result);

const bigNum = tenTimes(99); // return value