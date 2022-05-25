const obj1 = {};
const obj2 = new Object();

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const baby = {name : 'hong', age : 4};
print(baby);
baby.hasJob = true;
console.log(baby.hasJob);

delete baby.hasJob;
console.log(baby.hasJob);
console.log(baby.name);
console.log(baby['name']);
baby['hasJob'] = true;
console.log(baby['hasJob']);

function printValue(obj, key){
    console.log(obj.key);
    console.log('---------------');
    console.log(obj[key]);
}
printValue(baby, 'name');
printValue(baby, 'age');

const person1 = {name: 'bob', age: 2};
const person2 = {name: 'Ethan', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = new Person('baby',30);
console.log(person4);
function Person(name, age){
    this.name = name;
    this.age = age;
}

// in operator: property existence check (key in obj)
console.log('name' in baby);
console.log('age' in baby);
console.log('random' in baby);

console.log(baby.random);

// for in vs for of
for(let key in baby){
    console.log(key);
}

const array = [1,2,3,4];
for(let value of array){
    console.log(value);
}
console.clear();

// 복사
const user = {name: 'bob', age : 28};
const user2 = user;
console.log(user);
user2.name = 'coder';
console.log(user);

console.clear();

const user3 = {};
for (let key in user){
    user3[key] = user[key];
}

console.log(user3);
user.name = 'bob';
console.log(user3);
console.log(user);

const user4 = Object.assign({},user);
console.log(user4);
user.name = 'Ethan';
console.log(user4);
console.log(user);

const fruit1 = {color:'red'};
const fruit2 = {color:'blue', size: 'big'};
const mixed = Object.assign({},fruit1,fruit2);
console.log(mixed);























