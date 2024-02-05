/**
 * Write a function to convert temperature from Celsius to Fahrenheit.
 * Fahrenheit = 1.8 * Celsius + 32;
 */
let f=0;
function convertTemperature (temperature){
     f = 1.8 * temperature + 32;
     return f;
}
const degree = 20;
const result = convertTemperature(degree);

console.log(degree,'degree Celsius to', result,'Fahrenheit:');
