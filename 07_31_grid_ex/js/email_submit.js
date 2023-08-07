// 이메일 주소를 받아 처리할 때 실행되는 함수
function email_submitted() {
    alert("Thank you so much!");            // 이벤트 처리
    $('.input-wrapper input').val("");      // 내용 제거
}

// Submit 버튼을 눌렀을 때 이벤트 처리
$('#email-btn').click(email_submitted);

// input 에서 enter 를 눌렀을 때 이벤트 처리
$(()=>{
    var input_box = $('.input-wrapper input');
    // input 포커스 상태에서 버튼이 눌릴 때마다 확인
    input_box.on('keydown', (event)=>{
        // 눌린 버튼이 enter 일 경우
        if (event.keyCode == 13) {
            event.preventDefault();     // 기존 입력 무시
            email_submitted();          // 이벤트 처리
        }
    });
});