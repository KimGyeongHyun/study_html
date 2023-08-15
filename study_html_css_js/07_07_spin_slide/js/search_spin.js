function slide_up() {
    $('.slidewrap').stop().animate({marginTop: '-60px'}, 100, 
    reunion_first_to_last);
}

function reunion_first_to_last() {
    $('.slidewrap').append($('.slidewrap li').first());
    $('.slidewrap').css('margin-top', '-30px');
}

setInterval(slide_up, 2000);