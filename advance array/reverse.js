// reverse array-----

const num = [1,2,3,4,5,6,7];

// console.log(num);

//const reversed = num.reverse();

//console.log(reversed);

// another way to reverse...........
const rev_numbers = [];

for(const number of num){
    //console.log(number);
   // rev_numbers.push(number); //serial by push number
   rev_numbers.unshift(number);
}
// console.log(rev_numbers);


// Another way to revers.........

const reversed_numbers = [];
for(let i=0; i<num.length; i++){
    const number = num[i];
    reversed_numbers.unshift(number);
}
//console.log(reversed_numbers);

// reverse side
const rev1=[];
for(let i=num.length - 1; i>=0; i-- ){
    console.log(num[i]);
    rev1.push(num); 
}
console.log(rev1);