$('.greenbox').click(function() {
    $(this).animate({width: '+=100px'});
});

// height: hide, height: toggle 가능
$('#btn').click(function() {
    $('.greenbox').animate({height: 'toggle'});
});