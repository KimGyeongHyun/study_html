$('.btn').click(function() {
    // find : 자손들을 선택하여 가져옴
    // 자손 전체를 가져오기 위해선 * 사용
    // 직계 자손 포함 모든 자손에서 찾음
    // children : 모드 직계 자손 잡음
    // $('.box1').find('*').css('font-size', '50px');
    $('.box1').children().css('font-size', '40px');
});

$('p').click(function() {
    //부모 선택
    $(this).parent().css('border', '10px solid black');
})