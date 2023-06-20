console.log(hello.innerHTML);

// 요소의 배경색 확인하기
// html 에서 스타일로 직접 넣은 요소는 가져올 수 있지만
// css 는 못 가져옴
console.log(hello.style.backgroundColor);

// js 는 style 을 요소에 직접 넣는 방식이기 때문에
// 해당 스타일을 가져올 수 있음
hello.style.border = "3px solid black";
console.log(hello.style.border);