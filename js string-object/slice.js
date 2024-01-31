const address = 'andorkilla';
const part = address.slice(2,5);
console.log(part);

// sub-string, sub-stair google it

const sentence = 'I am good person';
console.log(sentence.split('a'));//split er helpfull

const friendsStr = 'rahim, karim, marim, carim';
const friends = friendsStr.split(',');
console.log(friends);

const realFriend = [ 'rahim', ' karim', ' marim', ' carim' ];
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));