$('#nextbtn').click(slide_up);
$('#prevbtn').click(slide_down);

var slide_up_interval = setInterval(slide_up, 3000);

function slide_up() {
    $('.sm').stop().animate({marginTop:'-300px'}, 400, ani_finish);
}

function ani_finish() {
    // alert("애니메이션 완료");
    $('.sm').append($('.sm>div').first());
    // 2->3 이 갑자기 나온 이유는
    // sm 에서 1 을 3으로 옮기면서 2, 3 번이 위로 올라와버림
    // 따라서 sm 도 원래 위치로 다시 돌아 와야 함
    $('.sm').css('margin-top', '0');
}

// 정리
// animate 는 sm 을 통째로 올려서 구현
// animate 완료 후 유지하기 위해서
// 맨 위에 있는 요소를 맨 아래로 내리고 sm 을 animate 이전 위치로 바꿈

function slide_down() {
    $('.sm').prepend($('.sm>div').last());
    $('.sm').css('margin-top', '-300px');
    $('.sm').stop().animate({marginTop:'0'}, 400);
}
