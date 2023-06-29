$('.circle').click(function() {
    // 속성 변화는 마지막에 배치할 경우 처음에 적용되지만
    // animate 함수끼리는 마지막에 적용된다
    // 콜백 함수 : 다른 함수가 실행 끝낸 뒤 실행되는 함수
    // 파라미터를 함수로 받아서 쓸 경우 해당 함수가 콜백 함수
    $(this).animate({left: '300px'});
    $(this).animate({top: '200px'});
    $(this).animate({left: '100px'});
    $(this).animate({top: '0px'});
});