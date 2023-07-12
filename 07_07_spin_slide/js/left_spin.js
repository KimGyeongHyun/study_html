function left_spin() {
    $('.big').stop().animate({marginLeft: '-1000px'}, 200, reunion_right_to_left)
}
function reunion_right_to_left() {
    $('.big').append($('.sm').first());
    $('.big').css('margin-left', '-500px');
}
function right_spin() {
    $('.big').stop().animate({marginLeft: '0px'}, 200, reunion_left_to_right)
}
function reunion_left_to_right() {
    $('.big').prepend($('.sm').last());
    $('.big').css('margin-left', '-500px');
}

var interval = setInterval(left_spin, 3000);

function left_slide() {
    clearInterval(interval);
    left_spin();
    interval = setInterval(left_spin, 3000);
}

function right_slide() {
    clearInterval(interval);
    right_spin();
    interval = setInterval(left_spin, 3000);
}

function stop() {
    clearInterval(interval);
}

$('#left').click(left_slide);
$('#right').click(right_slide);
$('#stop').click(stop);