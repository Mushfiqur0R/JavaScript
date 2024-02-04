function carWash(){
    console.log('washing car');
    console.log('clear');
}
// carWash();

function square(number){
    console.log('Number:',number); //define inter
    const borgo = number * number;
    console.log('square of number:',borgo);
}
square(4);
console.log('-------------------')
square(12);
console.log('-------------------')
square(15);

function add(num1, num2){  //parameter
    const sum = num1 + num2;
    console.log(sum);
}

add(5,71); //parameter value

function addAll(a,b,c,d){
    const total = a+b+c+d;
    console.log(total);
}
addAll(2,3,4,5);