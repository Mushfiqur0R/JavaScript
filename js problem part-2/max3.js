const jim = 56;
const tim = 89;
const kim = 68;

if(jim > tim && jim > kim){
    console.log('Jim is boos');
}else if(tim>jim && tim>kim){
    console.log('Kim is Boss');
}else{
    console.log('kim is boss');
}

function maxOfThree (num1, num2, num3){
    if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num2>num1 && num2>num3){
        return num2;
    }
    else{
        return num3;
    }
}
const result = maxOfThree(100,300,150);
console.log(result);

const max = Math.max(12,1,345)
console.log('Max',max);