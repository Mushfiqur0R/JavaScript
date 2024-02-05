//Unit conversation---------------

//12 inch 1 feet

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
const irinaHeight = inchToFeet(65);
// console.log(irinaHeight);

function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction); //show only integer value
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch. ';
    return result;
}
const irinaHeight2 = inchToFeet2(65);
// console.log(irinaHeight2);

function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const output = mileToKilometer(100);
console.log(output);