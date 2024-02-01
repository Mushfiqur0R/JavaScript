// Check whether a string contains all the vowels a, e, i, o, u
let inputString = "education";
let vowels = ['a', 'e', 'i', 'o', 'u'];

let containsAllVowels = true;

for (let vowel of vowels) {
    if (!inputString.toLowerCase().includes(vowel)) { //includes used because it's check there are have any vowel or not!
        containsAllVowels = false;
        break;
    }
}

if (containsAllVowels) {
    console.log("The string contains all vowels.");
} else {
    console.log("The string does not contain all vowels.");
}
