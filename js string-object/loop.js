const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    inNew: true
}
// for of : array
//  for in : object
for (const prop in mobile){
    // console.log(prop)
    // console.log(mobile[prop])
}

// another way using key. it's array that why using for of....
const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key,':', mobile[key]);
}