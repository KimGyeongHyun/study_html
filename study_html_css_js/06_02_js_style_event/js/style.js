// 요소 부르는 방법들
document.getElementById("title");
document.querySelector("#title");
document.querySelectorAll("h1")[0];
document.getElementsByTagName("h1")[0];
title

// 자바 스크립트 -> 태그 선언문 안에 style="color: gold;" 로 들어감
// 다른 요소일 때 우선순위
// css !important 선언, html style 선언, id, class, tag, 상속 
// js 는 html style 선언으로 들어감
// f12 눌러 직접 확인 가능
title.style.color = "gold";
document.getElementsByTagName("h2")[0].style.backgroundColor = "yellow";
title.style.fontSize = "50px";
document.querySelector("h2").style.textDecoration = "line-through";

var input_color = "blue";
// input_color = prompt("색을 입력하세요");
var t_list = document.querySelectorAll("li");
for (var i = 0; i < t_list.length; i++) t_list[i].style.border = "2px solid " + input_color;

