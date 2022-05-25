console.log('my'+'dog');
console.log('1'+2);
console.log(`String literals : 1+2= ${1+2}`);
console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(5%2);
console.log(2**3); // 거듭제곱

let counter =2;
const preIncrement = ++counter;
console.log(`preIncrement:${preIncrement}, counter:${counter}`);// 3, 3

const postIncrement = counter++;
console.log(`postIncrement:${postIncrement}, counter:${counter}`); // 3, 4

//인산후 할당 연산
let x= 3;
let y= 6;
console.log(x += y);
console.log(x -= y);
console.log(x /= y);
console.log(x *= y);

// 비교연산
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

//논리연산
const value1 = true;
const value2 = 4<2;

console.log(`or: ${value1 || value2 || check()}`);
console.log(`and: ${value2 && value2 && check()}`);

function check(){
    for(let i = 0; i<10; i++){
        console.log('wating');
    }
    return true;
}


//equality(==, ===)
const stringfive = '5';
const numberfive = 5;
//== loose equality, with type conversion (타입변환을 사용한 약한 비교)
console.log(stringfive == numberfive); // 문자열이 숫자형으로 바뀜
console.log(stringfive != numberfive);

//=== strict equality, no type convrsion(타입변환을 하지 않는 엄격한 비교)
console.log(stringfive === numberfive);
console.log(stringfive !== numberfive);

//object equality by reference
console.log('-----------------');
const js1 = {name:'js'};
const js2 = {name:'js'};
const js3 = js1;
console.log(js1 == js2); // 참조값이 서로 달라서 false
console.log(js1===js2); // 참조값이 서로 달라서 false
console.log(js1===js3); // js1을 js3에 넣어서 true

//equality 확인 
console.log('------------------------');
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);































