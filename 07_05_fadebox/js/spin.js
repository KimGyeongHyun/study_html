$('#btn').click(change_loc)

var interval = setInterval(change_loc, 3000);
$('#spin_start').click(function() {interval = setInterval(change_loc, 3000);})
$('#spin_stop').click(function() {clearInterval(interval);})

// 스핀 박스

// 인덱스를 활용한 스핀 박스
var idx = 0;
function use_idx() {
    $('.sm').eq(idx++).fadeOut();
    if (idx == $('.sm').length) idx = 0;
    $('.sm').eq(idx).fadeIn();
}

// 요소 순환을 활용한 스핀 박스
function change_loc() {
    $('.sm').first().fadeOut().next().fadeIn();
    $('.big').append($('.sm').first());
}