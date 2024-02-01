// Count how many times a string has the letter a or A
// Count how many times a string has the letter a
let sentence = "Ariana Arona";
let count = 0;
let count1 = 0;
for(let i=0; i<sentence.length; i++){
    if(sentence[i] === 'a' ){
        count++;
    }
    else if( sentence[i]=== 'A'){
        count1++;
    }
}
console.log(count);
console.log(count1);