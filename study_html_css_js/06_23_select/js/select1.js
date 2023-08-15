
$('li').click(function() {

    // next : 같은 부모 안의 다음 요소
    // 파라미터 안에 요소를 넣으면
    // 다음 요소가 파라미터 요소일 때만 적용
    // $(this).next('li').css('color', 'red');

    // prev : 이전 요소
    // $(this).prev().css('color', 'blue');

    // eq : 인덱스 번호의 요소
    // $('li').eq(2).css('color', 'red');

    // 본인을 제외한 모든 형제 요소
    $(this).siblings().css('background-color', 'pink');


});