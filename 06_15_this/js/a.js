var atag = document.querySelector("a");
console.log(atag);
console.log(atag.classList);
// 속성값 가져오기  /   스트링 띄어쓰기 형식으로 반환
console.log(atag.getAttribute("href"));
console.log(atag.getAttribute("class"));
console.log(atag.getAttribute("target"));

// 속성값 바꾸기
atag.setAttribute("href", "http://kakao.com");
console.log(atag.getAttribute("href"));

// 속성 존재 확인
console.log(atag.hasAttribute("class"));

// 속성 제거
atag.removeAttribute("href");