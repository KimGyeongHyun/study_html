$('.suwon').click(function() {
    // $(this).css('font-size', (parseInt($(this).css('font-size'))+5)+"px");

    // 위의 식을 아래와 같이 간단하게 쓸 수 있음
    $(this).css('font-size', "+=5px");
})