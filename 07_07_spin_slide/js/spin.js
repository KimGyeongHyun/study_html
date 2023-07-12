function slide_up() {
    $('.slidewrap').stop().animate({marginTop: '-400px'}, 300, 
    reunion_first_to_last);
}

function reunion_first_to_last() {
    $('.slidewrap').append($('.slidewrap div').first());
    $('.slidewrap').css('margin-top', '-200px');
}

function slide_down() {
    $('.slidewrap').stop().animate({marginTop: '0'}, 300, 
    reunion_last_to_first);
}

function reunion_last_to_first() {
    $('.slidewrap').prepend($('.slidewrap div').last());
    $('.slidewrap').css('margin-top', '-200px');
}

$('#btn').click(slide_up);
$('#btn2').click(slide_down);