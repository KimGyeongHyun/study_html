// 변수 선언
var myNumber = 1;
console.log("myNumber");  // 문자열
console.log(myNumber);  // 변수
myNumber = 2;
console.log(myNumber);

document.querySelector("h2").innerHTML = myNumber;

// str 어법은 python 과 동일함
// 문자열 덧셈도 파이썬과 같음
// 문자열 + 다른 변수의 경우 문자열로 바꿈. 파이썬과 같음
var txt = "hello";
txt = "hello my \"name\" is\n 'kkh'\n /.\\";
console.log(txt);

// 나눗셈, 나머지 연산자는 파이썬과 같음
var num1 = 0;
var num2 = 0.5;
var num3 = 10;
var num4 = 20+50;

console.log(num1);
console.log(num3+num4);
console.log(num4);

// 콘솔에다 box1, box2 를 입력해보기
var box1 = 10;
var box2 = "10";

// 파이썬과 다르게 대문자가 아님
var bool1 = true;
var bool2 = false;
var bool3 = 10>20;  // false

// 타입 확인하기
console.log(typeof txt);
console.log(typeof num1);
console.log(typeof bool1);

// == 일 경우 문자열과 숫자를 비교할 때 true 를 리턴하기도 하지만
// === 는 자료형까지 엄격하게 따진다
var bool4 = 100=="100";
var bool5 = 100==="100";
console.log("boolean4:"+bool4);
console.log("boolean5:"+bool5);

var box3;
var box4 = null;
console.log("box3:"+box3);
console.log("box4:"+box4);

