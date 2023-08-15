// 입력할 수 있는 경고창 팝업
var your_name = prompt("what is your name?");
console.log(your_name);

var apple = prompt("사과 하나의 가격은 1000원 입니다. 몇 개를 구매하시겠어요?");
// console.log("당신이 지불할 가격은 " + 1000 * apple + "원 입니다");
document.querySelector("h3").innerHTML = "당신이 지불할 가격은 " + 1000 * apple + "입니다";