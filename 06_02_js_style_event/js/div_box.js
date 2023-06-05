var box = document.querySelector(".box");

// 더블 클릭 두가지 구현 방법
// box.addEventListener("dblclick", function() {
//     alert("쏘해피");
// });
box.ondblclick = function() {alert("쏘해피");};

// 호버랑 다름, 마우스가 빠졌을 때 돌아오지 않음
// 스크립트로 속성을 설정하는 순간 스타일 선언으로 들어가 있는 상태가 유지됨
box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "green";
});
// 마우스 나가는 것
box.addEventListener("mouseout", function() {
    box.style.backgroundColor = "orange";
});

// 마우수 누르고 땔 때
box.addEventListener("mousedown", function() {
    box.style.backgroundColor = "red";
});
box.addEventListener("mouseup", function() {
    box.style.backgroundColor = "blue";
});

box.addEventListener("mousemove", function() {
    console.log("a");
});

// 근데 이거 왜 안 됌
// box.mousemove = function() {
//     console.log("a");
// };