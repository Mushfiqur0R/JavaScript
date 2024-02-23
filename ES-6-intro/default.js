function add(num1, num2){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
const sum = add(5, 7);

function fullName(first, last = ''){
    const full = first + '' + last;
    return full;
}

// default value:
// Array default value
function friends(numbs = []){

}

// object default value
function person(human = {}){

}