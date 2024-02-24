// filter selects elements based on condition
const numbers = [1, 2, 3, 4, 5];
const players = [75, 65, 67, 73, 55, 59]
const selected = players.filter(p => p > 70);
console.log(selected);

const friends = ['Tom', 'John', 'Michel', 'Oliver', 'Tim', 'janiyo'];
const oddFriends = friends.filter(friend => friend.length > 4)
console.log(oddFriends);