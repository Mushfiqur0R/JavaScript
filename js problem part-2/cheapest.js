//max
const phones = [
    {name: 'Samsung', price: 20000, camear: '12mp', color: 'black' },
    {name: 'Xomi', price: 18000, camear: '12mp', color: 'black' },
    {name: 'Iphone', price: 100000, camear: '12mp', color: 'black' },
    {name: 'Walton', price: 31000, camear: '12mp', color: 'black' },
    {name: 'HTC', price: 27000, camear: '12mp', color: 'black' },

]
function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
    
}
const cheap = getCheapestPhone(phones);
console.log('Low price Phone is: ', cheap);

//min
function getHighPricePhone(phones){
    let max = phones[0];
    for(const phone of phones){
        if(phone.price > max.price){
            max = phone;
        }
    }
    return max;
    
}
const high = getHighPricePhone(phones);
console.log('High price Phone is: ', high);