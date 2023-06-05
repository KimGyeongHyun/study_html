var end = parseInt(prompt("숫자 몇까지의 합을 출력할까요?"));
var sum = 0;

for (var i = 1; i <= end; i++) sum += i;
document.getElementsByTagName("h3")[1].innerHTML = "총 합: " + sum;