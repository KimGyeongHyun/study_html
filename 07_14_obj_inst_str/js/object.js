var person = {
    name: 'hong guildong',
    age: 30
};

// 객체 변수 변경
person.name = 'live gitt';
console.log(person.name);
person.age = 20;
console.log(person.age);

// 배열 length 변수 직접 변경
// 남은 4 칸은 빈 칸으로 생성
var myarr = [1, 2, 3];
myarr.length = 7;
console.log(myarr);

// 기존 객체에 없던 속성을 동적으로 추가할 수 있음
person.blood = 'O';
console.log(person.blood);

// 속성 삭제
delete person.age;
console.log(person);

var car = {
    name: 'vmw 5',
    door: 4,
    style: 'sedan',
    color: 'white',
    year: 2022,
    // 메소드에 매개변수 추가
    sayhello: function(str) {alert(str);},
    // this 사용
    shout: function() {console.log(this.name + ' wow');}
}

// for in 문을 사용해 key 값을 하나씩 가져옴
for (var i in car) {console.log(i + " : " + car[i]);}

// car.sayhello('hel');
car.shout();

