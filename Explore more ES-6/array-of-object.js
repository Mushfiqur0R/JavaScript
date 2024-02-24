const products = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 2, name: 'dell', price: 45000 },
    { id: 3, name: 'hp', price: 40000 },
    { id: 4, name: 'mac', price: 165000 }


]
// map
const names = products.map(product => product.name)
// console.log(names)
const prices = products.map(product => product.price)
// console.log(prices);


// for each
const id = products.forEach(p => console.log(p.id))
// console.log(id);

// filter
const expensive = products.filter(p => p.price > 50000)
console.log(expensive);

//  Find
const affordable = products.find ( p => p.price < 50000)
console.log(affordable);

// reduce
const total = products.reduce((acum, current) => acum + current.price, 0)
console.log(total);