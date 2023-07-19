var slide_gap = 200;
var gap = 2500;

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

var interval;

function start_spin() {
    clearInterval(interval);
    interval = setInterval(left_spin, gap);
    $('#play').removeClass("passive");
    $('#stop').addClass("passive");
}
function stop_spin() {
    clearInterval(interval);
    $('#play').addClass("passive");
    $('#stop').removeClass("passive");
}

function left_slide() {
    left_spin();
    start_spin();
}

function right_slide() {
    right_spin();
    start_spin();
}

start_spin();
$('#left').click(left_slide);
$('#right').click(right_slide);
$('#stop').click(stop_spin);
$('#play').click(start_spin);