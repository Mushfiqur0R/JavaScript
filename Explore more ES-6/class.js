class Products{
    country = 'Ban';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}

const lenovo = new Products('ottt oy')
console.log(lenovo);
lenovo.speak('hello world')

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is Teaching Us')
    }
}
const tapan = new Teacher('Tapan Sir', 'Physics')
console.log(tapan)