const name = 'js';
if(name =='js'){
    console.log('Welcome, js');
}else if(name === 'coder') {
    console.log("coder~~");
}else{
    console.log('unkonw');
}

//삼항 연산자
console.log(name === 'js' ? 'yes' : 'no');
console.clear(); //  위에 사용한 콘솔 확인 다 삭제 되어져서 브라우져 콘솔에서는 아래꺼 부터 출력되어서 나옴
// switch
const browser ="IE";
switch(browser){
    case 'IE' :
        console.log('이제 없어진다.');
        break;
    case 'Chrome':
    case"Firefox":
        console.log('많이 사용한다');
        break;
    default:
        console.log('모든 브라우저');
        break;
}

let i = 3;
while(i>0){
    console.log(`while:${i}`);
    i--;
}

do{
    console.log(`do while:${i}`);
    i--;
}while(i>0);

for(let i =3; i > 0; i--){
    console.log(`for: ${i}`);
}


for(let i =0; i<10; i++){
    for(let j=0; j<10; j++){
        console.log(`i:${i}, j:${j}`);
    }
}

console.clear();
// continue, break

for(let i=0; i<11; i++){
    if(i %2 !=0){
        continue;
    }
    console.log(`i: ${i}`);
}

for(let i=0; i<11; i++){
    if(i>8) break;
    
    console.log(`i:${i}`);
}











