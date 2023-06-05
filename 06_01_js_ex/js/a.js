// 배열 가져옴
var planet = document.getElementsByTagName("li");
console.log(planet);

document.getElementsByTagName("li")[2].innerHTML = "해왕성";
planet[3].innerHTML = "천왕성";

// 첫번째 요소 가져옴
var planet2 = document.querySelector("li");
console.log(planet2);

//배열 가져옴
var planet3 = document.querySelectorAll("li");
console.log(planet3);

for (var i = 0; i < planet3.length; i++) planet3[i].innerHTML = "지구";
var select = prompt("당신은 무슨 행성을 가장 좋아하나요?");
for (var i = 0; i < planet3.length; i++) {
    if (i==0) continue;
    if (i==3) break;
    planet[i].innerHTML = select;
}