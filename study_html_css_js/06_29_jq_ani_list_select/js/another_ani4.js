$('.bluebox').click(function() {
    $(this).animate({left: '1000px'}, 10000);
});

$('#btn3').click(function() {
    $('.bluebox').stop();
});