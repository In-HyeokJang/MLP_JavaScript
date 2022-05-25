class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`${this.name}: hello~`);
    }
}

const hong = new Person('hong',20);
console.log(hong.name);
console.log(hong.age);
hong.speak();