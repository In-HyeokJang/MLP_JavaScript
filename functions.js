function printHello(){
    console.log('Hello');
    return 'hi';
}

let p = printHello();
console.log(p);

function log(message){
    console.log(message);
}
log('hello!!');
log(1234);

function changeName(obj){
    obj.name = 'coder';
}

const kim = {name:'kim'};
changeName(kim);
console.log(kim);

//default parameters(added in ES6) 디폴트 매개 변수

function showMessage(message, from){
    console.log(`${message} by ${from}`);
}

showMessage('hi');

//이게 디폴트 매개 변수
function showMessage2(message, from='unknown'){
    console.log(`${message} by ${from}`);
}

showMessage2('hi');

console.log('---------------------');

function printAll(...args){
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }
    for(const arg of args){
        console.log(arg);
    }
    args.forEach((arg)=>console.log());
}

printAll('developer', 'coder', 'team');


//Local scope
let globalMassage = 'global'; //전역변수
function printMessage3(){
    let message = 'hello' // 지역변수
    console.log(message);
    console.log(globalMassage);
}

printMessage3();
// console.log(message); 오류

console.log('------------------');
console.log(sum(3,3));
function sum(a,b){
    return a+b;
}

const result = sum(1,2);
console.log(`sum: ${result}`);
console.log(`sum: ${sum(10,10)}`);

//변수 에 함수 할당
//print(); //오류, 함수선언을 할당한 후 사용할 수 있다. hoisting이 안된다.
const print = function (){
    console.log('print');
};
print();

console.log('-----------------------');
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,2));

function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

const printYes = function(){
    console.log('yes !');
}
const printNo = function(){
    console.log('no !');
}

//호출
randomQuiz('wrong', printYes, printNo)
randomQuiz('love you',printYes, printNo);

const simplePrint = function(){
    console.log('simplePrint');
}
simplePrint();

//화살표 함수로 변동
const simplePrint2 = () => {console.log('simplePrint2');} // {}로 생략 가능
simplePrint2();

//함수 선언과 동시에 호출하기
(function hello(){
    console.log('ITGOOD');
})();










