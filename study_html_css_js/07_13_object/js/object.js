// 빈 객체 생성
var myobj = {};

// 객체 생성
var person = {
    // 객체 안에 변수 생성
    age:30, 
    isAdult:true,
    likes:['apple', 'samsung'],
    // 객체 안에 객체 생성
    name:{
        firstName:'live', lastName:'gitt'
    }, 
    // 메소드 생성
    sayhello: function() {
        console.log('hello');
    },
    // key 값에 띄어쓰기나 쓸 수 없는 특수문자 들어간 경우
    'phone number': '010-1234-5678'
};

// 오브젝트 내부 key 는 순서 없음 (뒤죽박죽)
console.log(person);

// key 에 접근하는 방법
console.log(person.age);
console.log(person['age']);
console.log(person['phone number']);
// 불가능
// console.log(person[age]);
// console.log(person.phone number);
// console.log(person.'phone number');
// [] 안에는 문자열 변수가 들어가도 된다

if (person.age > 18) console.log('adult');
else console.log('child');

console.log(person.name);
console.log(person.name.firstName + person.name.lastName);

console.log(person.likes[1]);

// 메소드 내용 출력
console.log(person.sayhello);
// 메소드 실행
person.sayhello();
// 실행문이기 때문에 (return 이 없음)
// 콘솔에 hello 가 출력되고 log 에는 아무것도 나오지 않음
console.log('print console.log(person.sayhello());');
console.log(person.sayhello());

// window 는 생략 가능
// window.alert("asdf");

// 배열도 객체
person.likes.push('banana');
console.log(person.likes);
// 배열 객체는 length 속성을 따로 가지고 있음
console.log(person.likes.length);

// jQuery $(~) 도 객체
// $(~).append(~);

