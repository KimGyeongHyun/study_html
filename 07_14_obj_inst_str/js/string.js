// String 도 객체, 밑의 두 줄은 같은 의미
var txt1 = 'hello';
var txt2 = new String('hello');

// String 객체의 length 속성 출력
console.log(txt1.length);
// 수많은 메소드들이 존재
console.log(txt2);

// 문자열 포함 여부
console.log(txt1.includes('ello'));
// 첫번째 문자열 나오는 인덱스 리턴
console.log(txt1.indexOf('l'));
// 마지막 ..
console.log(txt1.lastIndexOf('l'));

var txt3 = 'apple banana kiwi';
// 문자열을 찾아 바꿈
// 본인을 바꾸지 않고 새로운 문자열 리턴
console.log(txt3.replace('kiwi', 'cat'));
console.log(txt3);

// 구분자를 받아 나눔, 배열 리턴
console.log(txt3.split(' '));

// 스트링의 a ~ b-1 인덱스 뽑아 리턴
console.log(txt3.substring(1, 4));
console.log(txt3.slice(1, 4));
// 매개변수가 하나면 해당 인덱스부터 끝까지 출력
console.log(txt3.substring(3));
console.log(txt3.slice(3));

// slice 는 substring 과 다르게 음수도 다룰 수 있음 (파이썬)
console.log(txt3.slice(-4));

// 공백이 나오기 직전까지만 문자열 뽑아내기
console.log(txt3.split(' ')[0]);
console.log(txt3.substring(0, txt3.indexOf(' ')));

var txt4 = "Happy DAY";
// 모든 글자 소문자로 바꿔 리턴
console.log(txt4.toLowerCase());

txt4 = " Happy DAY "
// 양쪽 공백 제거
console.log(txt4.trim());

// 문자열 반복
console.log(txt4.repeat(4));