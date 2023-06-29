$('.today_text').click(function() {
    // 안에 있는 html 내용을 가져오는 것이므로 초기화한 태그까지 가져옴
    // innerHTML 도 동일
    console.log($(this).html());

    // 글자만 가져옴
    // innerText 와 동일
    console.log($(this).text());
});

$('.btn2').click(function() {
    var box = $('.black_board');
    var text = $('.input2').val();
    box.html(text + "님 안녕");
    box.show();
});