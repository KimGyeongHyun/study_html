$('.orange').animate({width: '100%'}, 2000, function() {
    $('section p').css('opacity', '1');
});
// $('section p').css('opacity', '1');
// 애니메이션이 끝날 때 실행할 함수는 animate 매개변수 안에 넣기
// 위처럼 animate 뒤에 붙인다 해도 바로 실행됨
// 시간과 끝날 때 실행되는 함수 사이 'linear' 를 붙일 수 있음ㄴ