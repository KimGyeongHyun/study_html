function spin_img() {
    $('.sm').eq(0).fadeOut();
    $('.sm').eq(1).fadeIn();
    $('.big').append($('.sm').first());
}

var spinInterval = setInterval(spin_img, 2000);