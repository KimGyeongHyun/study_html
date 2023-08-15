var value = parseInt(prompt("숫자를 입력해주세요"));

// id 는 아래와 같이 생략이 가능하다
// 해당 id 는 하나의 태그에만 사용
// document.querySelector("#number").innerHTML = value;
number.innerHTML = value;


if (value%2 == 1) {document.querySelector("#result").innerHTML = "홀수"}
else {document.querySelector("#result").innerHTML = "짝수"}