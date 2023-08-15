// 해당 요소가 어떤 클래스를 가지고 있는지 확인
var b1 = box1.classList;
console.log(b1);
var b2 = box2.classList;
console.log(b2);
var b3 = box3.classList;
console.log(b3);

// 클래스 추가
b3.add("love");
console.log(b3);

// 클래스 삭제
b2.remove("round");
console.log(b2);

// 클래스가 있는지 없는지 판단하고 클래스를 넣고 뺌
function add_remove_circle() {
    b2.toggle("circle");
}

// 클래스 포함 여부
console.log(b1.contains("love"));

console.log(b2.length);