/**
 * for a given string, tell me whether it has even number of characters or not
 */

function evenSizedString (str){
    const size = str.length;
    console.log(str,size);
    if(size%2 === 0){
        console.log('Even Size');
        return true;
    }else{
        console.log('Odd Size');
        return false;
    }
    
}
// evenSizedString('Dhaka');

function doubleOrTriple ( number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }else{
        const result = number * 3;
        return result;
    }
}

// console.log(doubleOrTriple(5,true));
// console.log(doubleOrTriple(5,false));

// using array:
function numberOfElements (numbers){
    const size = numbers.length;
    return size;
    
}
numberOfElements([12,23,24,4,5,677,88]);

function getAge(person){
    const age = person.age;
    return age;
}
