// var txt = prompt("제목을 무엇으로 할까요?");

// 첫번째 h1만 내용 바꿈
// document.querySelector("h1").innerHTML = txt;

// // 첫번째 my-title 클래스 내용 바꾸기
// document.querySelector(".my-title").innerHTML = txt;
// // [0] -> 첫번째, [1] -> 두번째
// // 클래스 배열을 가져오는 것이므로 인덱싱을 해야 함
// // Elements 가 들어있는 메소드는 배열을 가짐
// document.getElementsByClassName("my-title")[0].innerHTML = txt;

// // p이면서 my-title
// document.querySelector("p.my-title").innerHTML = txt;

// // 첫번째 hello 아이디 내용 바꾸기
// document.querySelector("#hello").asdfinnerHTML = txt;
// document.getElementById("hello").innerHTML = txt;

// document.getElementsByTagName("h1")[0].innerHTML = txt;

var txt = prompt("어떤 영화를 보셨나요?");
// document.getElementsByClassName("movie")[0].innerHTML = txt;
// document.getElementsByClassName("movie")[1].innerHTML = txt;
// document.getElementsByClassName("movie")[2].innerHTML = txt;

for (var idx = 0; idx < 3; idx++) {document.getElementsByClassName("movie")[idx].innerHTML = txt;}
