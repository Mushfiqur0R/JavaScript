const disha = 56;
const salman = 95;

if (disha > salman){
    console.log('Disha will get the straberry');
}else{
    console.log('slaman get');
}

//inside a function

function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}
const result = getMax(56,95);
console.log(result);