// $('.big_box').click(function() {
//     $(this).children().fadeOut();
// });

$('.sm_circle').click(function() {
    $(this).parent().css('background-color', 'rgba(0, 0, 0, 0)');
    $(this).parent().css('transition', '0.3s');
});