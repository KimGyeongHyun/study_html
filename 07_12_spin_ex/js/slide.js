var slide_gap = 200;
var gap = 2000;

function left_spin() {
    $('.big').stop().animate({marginLeft: '-200vw'}, slide_gap, reunion_right_to_left)
}
function reunion_right_to_left() {
    $('.big').append($('.sm').first());
    $('.big').css('margin-left', '-100vw');
}
function right_spin() {
    $('.big').stop().animate({marginLeft: '0'}, slide_gap, reunion_left_to_right)
}
function reunion_left_to_right() {
    $('.big').prepend($('.sm').last());
    $('.big').css('margin-left', '-100vw');
}

var interval = setInterval(left_spin, gap);

function left_slide() {
    clearInterval(interval);
    left_spin();
    interval = setInterval(left_spin, gap);
}

function right_slide() {
    clearInterval(interval);
    right_spin();
    interval = setInterval(left_spin, gap);
}

function stop() {
    clearInterval(interval);
}

function play() {
    clearInterval(interval);
    interval = setInterval(left_spin, gap);
}

$('#left').click(left_slide);
$('#right').click(right_slide);
$('#stop').click(stop);
$('#play').click(play);