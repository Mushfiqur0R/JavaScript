/**
 * Looping technique
 * 1.for loop
 * 2. while loop
 * 3. for of -> array loop
 * 4. for in --> object loop
 * 5. do while
 */

let friends = ['Elon', 'Bill', 'Mark', 'Waren'];

for(const friend of friends){
    //console.log(friend);
}

for (let i=0; i<friends.length; i++){
  //  console.log(i);
  //  console.log(friends[i]);
}

const number = [3,4,5,6,7];
for (let i=0; i<number.length; i++){
    //console.log(number[i]);
}

let i =0;
while(i < friends.length){
    console.log(friends[i]);
    i++;
}