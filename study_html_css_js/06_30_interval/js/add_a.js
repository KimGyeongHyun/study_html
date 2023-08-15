$('#btn').click(function() {
    $('.a').append('a');
})

// js 문법
// 함수를 반복하여 수행
// 수행할 일, 시간
// 많은 정보를 상하, 좌우로 넘기면서 보여줄 때 사용
// slide
setInterval(function() {$('.a').append('b')}, 1000);
setInterval(rep, 500);
function rep() {$('.a').append('c');}