const array = new Array();
const array2 = [1,2];
const fruits = ['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length -1]);


console.log("--------------------");

for(let i =0; i<fruits.length; i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

fruits.forEach((fruit) => {console.log(fruit);});


console.clear();

fruits.push('strawberry', 'peach');
const poped = fruits.pop()
console.log(poped);
fruits.pop();

fruits.unshift('strawberry','lemon');
fruits.shift();
fruits.shift();

fruits.push('strawberry','peach','lemon');
fruits.splice(1,1,'배','수박');
console.log(fruits);


const fruits2=['메론','배'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('수박'));
console.log(fruits.indexOf('코코넛'));

console.log(fruits.includes('apple'));
console.log(fruits.includes('수박'));
console.log(fruits.includes('코코넛'));

console.clear();

fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));
console.log(fruits.lastIndexOf('코코넛'));


console.clear();
// const arr1 = new Array(12,20);
const arr1 = [12,20];
console.log(arr1[0]);
console.log(arr1[1]);

// const arr2 = new Array(12);
//console.log(arr2[0]); // undefined 

const arr2 =[12];
console.log(arr2[0]);
























