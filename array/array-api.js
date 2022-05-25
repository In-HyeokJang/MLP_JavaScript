// join : a string
const fruits = ['apple', 'banan','orange'];
const result = fruits.join('/');
console.log(`value:${result}, type:${typeof result}`);

//split : an array
const fruits2 = '사과,키위,바나나,체리';
const result2 = fruits2.split(',',2);
console.log(result2);

//reverse
const a = [1,2,3,4,5];
//a.reverse();
console.log(a); // 리버스 하면 새로운 배열이 바뀌는게 아니라 원래 있던 배열이 바뀜

//splice
// const re2 = a.splice(0,2); 
// console.log(re2);
// console.log(a);

const re3 = a.slice(2,5);
console.log(re3);


//find
class Student {
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students =[
    new Student('A',29,true,80),
    new Student('B',26,true,30),
    new Student('C',29,false,30),
    new Student('D',29,false,20),
    new Student('E',28,true,90),
];
const re4 =students.find((student)=>student.score===30); // 동일한 값이면 먼저꺼만 나옴
console.log(re4);
{
//filter

const result = students.filter((student)=>student.enrolled);
console.log(result);
}
{
const result = students.map((student)=>student.score*2);
console.log(result);
}
console.clear();
//some,every
{
    const result = students.some((student)=> student.score <50);
    console.log(result);

    const result2 = !students.every((student)=> student.score >=50);
    console.log(result2);
}
//reduce
{
    const result = students.reduce((prev, curr)=>{
console.log('---------------');
console.log(prev);
console.log(curr);
return prev + curr.score;
    },0);
    console.log(result/students.length);
}
console.clear();
//map, filter, join
{
    const result = students
    .map((student)=>student.score)
    .sort((a,b)=> a-b)
    .join();

    console.log(result);
}


























