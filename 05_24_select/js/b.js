var math = prompt("수학점수");
var korea = prompt("국어점수");

// string -> int 변환
math = parseInt(math); korea = parseInt(korea)

document.querySelector(".math p").innerHTML = math;
document.querySelector(".korea p").innerHTML = korea;
document.querySelector(".total p").innerHTML = math + korea;
document.querySelector(".mean p").innerHTML = (math + korea) / 2;