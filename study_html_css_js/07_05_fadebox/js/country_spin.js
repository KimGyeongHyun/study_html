var interval = setInterval(spin_country, 2000);

function spin_country() {
    $('.sm').first().fadeOut().next().fadeIn();
    $('.big').append($('.sm').first());
}