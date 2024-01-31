const school = 'RAJ Uk uTTRA SCHOOL';

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());
// uppercase
// lowercase
// const subject = 'Chemistry';
// const book = 'chemistry';

// if (subject.toLowerCase === book.toLowerCase){
//     console.log('I am reading book');
// }else{
//     console.log('Not reading');
// }

// white space samne and picone remove er jonno trim() use kri
const drink = 'water ';
const liqued = '  water';//white space problem

if(drink.trim() === liqued.trim()){
    console.log('Pani khabo');
}else{
    console.log('pani khabo na');
}