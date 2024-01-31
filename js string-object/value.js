const person = {
    name: 'Mushfiqur Rahman',
    age: 25,
    profession: 'developer',
    salary: 2500,
    married: true,
    'fav places': ['banderbone','coxbazar']
}

person.salary = 30000; //update salary
person['age'] = 28; //update age
person['fav places'] = ['maldivs','India']


const propName = 'profession';
person[propName] = 'devops'; //bracket ta ekta new varable nilam
console.log(person);