const max = Math.max(6, 23, 45, 2, 89);
const numbers = [2, 3, 4, 5, 6, 19];
const arrayMax = Math.max(...numbers);
console.log(numbers);
// console.log(...numbers); //spread operator
console.log(arrayMax);
// console.log(max);

// use spread operator to copy
const nums = [4, 5, 87, 9];
const nums2 = nums;
const dosto = [...nums2]
console.log(dosto)
nums2.push(12);
console.log(nums2);
console.log(nums);

// advanced
const sonka = [...nums2, 999]
console.log(sonka);