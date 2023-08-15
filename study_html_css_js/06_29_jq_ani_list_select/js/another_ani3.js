// stop() 은 현재 진행되고 있는 애니메이션을 멈춤
$('#btn2').click(function() {
    $('.pinkbox').stop().slideToggle();
});