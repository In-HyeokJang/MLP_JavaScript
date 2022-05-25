'use strict';
let name = '홍';
const maxNumber = 5;
console.log(name); // 홍

let a = 12;
let b = 12.1;
console.log(`value:${a}, type:${typeof a}`); // value: 12, type: number
console.log(`value:${b}, type:${typeof b}`); // value: 12.1, type: number

const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;

console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); //NaN

const char = 'c';
const brendan = 'brendnan';
const greeting = 'hello' + 'brendan';

console.log(`value:${greeting}, type:${typeof greeting}`); // value:hellobrendan, type:string
console.log("hi " + brendan+"!");//hi brendan!
console.log(`hi ${brendan}!`);// hi brendan!

const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob} type:${typeof helloBob}`);// value: hi brendan! tpye: sting
console.log('value: '+helloBob + 'type:'+typeof helloBob);// value: hi brendan! tpye: sting

//false : 0 , null, undefined, NaN, ''
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead} , type: ${typeof canRead}`); //value: true, tpye: boolean
console.log(`value: ${test}, type: ${typeof test}`); //value: fales, type:boolean

//null : empty value

let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`); //value: null, type: object


//undefined : 정해지지 않은 값
let x;
console.log(`value: ${x}, type: ${typeof x}`);//value: undefined, type: undefined

// sybol: 고유식별자

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2) // false
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); //true

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); //value: id, type: symbol
console.log(`value: ${gsymbol1.description}, type: ${typeof gsymbol1}`);//value: id, type: symbol

let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value:${text}, type:${typeof text}`);// value: hello, type: string
text =1;
console.log(`value:${text}, type:${typeof text}`); //value: 1, type:number
text = '8' /'2'; //8과2가 숫자로 변환됨
console.log(`value:${text}, type${typeof text}`); // value: 4, type: number
// console.log(text.charAt(0));; // 오류남 문자열로 가져올수 없음
text ='7' + 5; // +는 산술연산도 되지만 문자열 연결도 됨 , 그래서 +때문에 5가 문자열로 변환됨 
console.log(`value:${text}, type:${typeof text}`); // 75 출력 // String형으로 출력

//object
const obj = {name:'obj', age:20} // 객체
console.log(`value:${obj}, type: ${typeof obj}`); // value : [object Object], type: object
console.log(`name: ${obj.name}, age: ${obj.age}`); // name: obj, age: 20













































