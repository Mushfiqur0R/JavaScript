const products = [
    {name: 'shampoo', price: 300, quantity: 2},
    {name: 'chiruni', price: 100, quantity: 3},
    {name: 'shirt',   price: 700, quantity: 5},
    {name: 'pant',   price: 1300, quantity: 4},
];

function cartTotal(products){
    let total = 0;
    for(const product of products){
        const thisItemCost = product.price * product.quantity;
        total = total + thisItemCost;
    }
    return total;
}
const shoppingCost = cartTotal(products);
console.log(shoppingCost);