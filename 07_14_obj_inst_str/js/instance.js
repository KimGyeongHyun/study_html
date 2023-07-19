// 객체 메소드처럼 함수 안에 this 를 넣을 수 있다
// 생성자 함수
function myuser() {
    this.name = 'jade';
    this.age = 20;
    this.address = 'suwon'
}

// 인스턴스 생성
var user1 = new myuser();
var user2 = new myuser();
console.log(user1);
console.log(user2);

// mycar 생성자 함수
// 매개변수로 인스턴스 초기화
function mycar(door, color, cc, year) {
    this.door = door; this.color = color; 
    this.cc = cc; this.year = year;
}

// 인스턴스 생성
var car1 = new mycar(4, 'white', 2000, 2022);
var car2 = new mycar(6, 'black', 3000, 2000);
console.log(car1);
console.log(car2);
