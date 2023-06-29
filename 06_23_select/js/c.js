$('#btn3').click(function() {

    console.log($("input[name='blood']:checked").val());

    // 선택된 label 글자 색을 파란 색으로 바꾸기
    // 밑의 코드는 불가능 radio box 이기 때문
    // $("input[name='blood']:checked").css("color", "blue");

    // label 은 같은 부모의 자식이기 때문에 next 를 사용하면 된다
    $("input[name='blood']:checked").siblings().css("color", "black");
    $("input[name='blood']:checked").next().css("color", "blue");
    
    $('.bl_box').css("background-color", $("input[name='blood']:checked").val());

})