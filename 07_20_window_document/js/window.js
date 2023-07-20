console.log(window);

// window 는 표시 안 해도 된다
// window.alert('asdf');
// alert('asdf');

// window 안쪽 창의 width, height 표시
console.log(innerWidth, innerHeight);

// window 변화에 따라 width, height 값 계속 가져와야 할 때
// window size 가 변할 때 수행할 함수 사용
// onresize = function() {console.log(innerWidth, innerHeight);}

onresize = function() {
    $('.window_size').text(`현재 화면 : ${this.innerWidth}px * ${this.innerHeight}px`);
}

// 웹 브라우저 개발자 도구를 포함한 큰 창의 width, height 표시
console.log(outerWidth, outerHeight);

// 메인 창으로부터 얼마나 떨어져 있는가
console.log(screenTop, screenLeft);

// 메소드
// alert("asdf");
// confirm("asdf");
// prompt("ASDF");

// 새로운 창을 띄움
// a 태그가 아니더라도 다른 창으로 링크를 넘길 수 있음
// a 태그가 아닌 다른 요소에 사용할 때 유용
// open('http://naver.com');

// interval
// setInterval();
// setTimeout();
// clearInterval();

// 따로 새로운 창을 띄워줌
// 많이 사용하진 않음
// open('http://kakao.com', 'new', 'width=500, height=300');

// document
// body 태그 자체를 출력
console.log(document.body);
// 문서의 형식 출력
console.log(document.doctype);
// 헤드 안의 title
console.log(document.title);
// location 객체, url 정보 가지고 있음
// 태그도 따로 확인 가능
console.log(document.location);