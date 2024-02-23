const numbers = [45, 65, 23, 98, 19];
for(let i = 0; i< numbers.length; i++){
    const number = numbers[i];
    // console.log(number);
}

for(const number of numbers){
    // console.log(number);
}

const products = [
    {id: 1, name: 'walton ', price: 19000},
    {id: 2, name: 'XOMI phone', price: 19000},
    {id: 3, name: 'SAMSUNG phone', price: 19000},
    {id: 4, name: 'IPHONE phone', price: 19000},
    {id: 5, name: 'OMEGA ', price: 19000}

];

// for(const product of products){
//     console.log(product);
// }

function matchedProducts (products, search){
    const matched = [];

    for(const product of products){
        if (product.name.toLowerCase().includes(search.toLowerCase())){ //search product name
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products, 'phone');
console.log(result);