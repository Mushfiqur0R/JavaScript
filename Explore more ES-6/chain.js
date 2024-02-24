// data access
const data = [{id: 1, name: 'abul', address: 'kochu khet'}];
// console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        {
            id: 1, name: 'lenovo laptop', price: 65000 },
            { id: 2, name: 'macbook', price: 165000 },
    ]
}
// console.log(products.data[1].price);

const user = {
    id: 5000,
    name: 'Shoriful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poriborg',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}

// console.log(user.address.street.second);

// optional chain
const user2 = {
    id: 5002,
    name: 'pori bibir majar',
    address: {
        city: 'Chittagong',
        country: 'Bangladesh'
    }
}
// optional chaining
console.log(user2.address.street?.second);

