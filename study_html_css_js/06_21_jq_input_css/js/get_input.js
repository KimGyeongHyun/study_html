$('.btn').click(function() {
    var mm = $('.myname').val();
    console.log(mm);

    // 요소 안의 글자 가져오기
    alert($('.hello').html());
    // 요소 안의 글자 바꾸기
    $('.hello').html(mm);
})