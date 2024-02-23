const prices = [2000, 1600, 5000, 10000, 1200, 1000];
function getMin (numbers){
    let min = numbers[0];
    for(const num of numbers){
        
        if(num < min){
            min = num;
        }
        
    }
    return min;
}
const min = getMin(prices);
console.log('cheapest phone price:', min);