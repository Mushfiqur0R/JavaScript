const friends = ['balam', 'kalam', 'salam', 'halam', 'falam'];
// indentification same array index value is exist or not
console.log(friends.includes('palam'));

// case sensitive
// include using in if else statement
if(friends.includes('kalam')){
    console.log('party');
}else{
    console.log('no food');
}