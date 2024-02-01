// Count how many times a string has the letter a
let sentence = "Adriana Arena";
let count = 0;
for(let i=0; i<sentence.length; i++){
    if(sentence[i].toLowerCase() === 'a'){
        count++;
    }
}
console.log(count);