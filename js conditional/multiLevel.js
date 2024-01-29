/**
 * Multi_Level Condition
 */

const price = 4000;

if(price >= 5000){
    // 10% discount
    const discount = price * 10/100;
    // console.log(discount);
    const payAmount = price - discount;
    console.log('10% discount',discount,payAmount);
}else if(price >= 4000){
    // 5% discount
    const discount = price * 5/100;
    // console.log(discount);
    const payAmount = price - discount;
    console.log('5% discount',discount,payAmount);
}
else{
    console.log(price);
}