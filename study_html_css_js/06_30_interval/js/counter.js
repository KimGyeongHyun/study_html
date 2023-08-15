// 변수에 interval 을 넣을 수 있음
// 동일하게 수행됨
var counter = setInterval(inc_counter, 1000);
function inc_counter() {
    var count = parseInt($('.counter').html());
    $('.counter').text(count + 1);
}

// 눌렀을 때 counter 멈추기
// claerInterval 파라미터 안에 interval 을 넣으면
// interval 이 멈춤
$('.counter').click(function() {
    clearInterval(counter);
    $(this).css('background-color', 'blue');
})

// 인터벌 다시 시작
$('#restart').click(function() {
    counter = setInterval(inc_counter, 1000);
    $(this).prev().css('background-color', 'black');
})
