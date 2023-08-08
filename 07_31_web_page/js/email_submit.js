var input = $('.input-wrapper input');
var gray_box = $('.gray-box');
var p_tag = $('.gray-box .submit-popup p');

// 이메일 주소를 받아 처리할 때 실행되는 함수
function email_submitted() {
    var str = input.val();  // email 주소 가져옴
    // 이메일 형식이 아니면 alert 후 종료
    if (!str.includes('@')) {
        alert("올바르지 않은 이메일 형식입니다.");
        return;
    }
    p_tag.text("Hello, " + str.substring(0, str.indexOf('@')));   // 환영 문구에 name 출력
    input.blur()            // input box focus 제거
    gray_box.css('display', 'block');     // 팝업
    input.val("");      // 기존 내용 제거
}

// Submit 버튼을 눌렀을 때 이벤트 처리
$('#email-btn').click(email_submitted);

// input 에서 enter 를 눌렀을 때 이벤트 처리
input.on('keydown', (event)=>{
    if (event.keyCode == 13) {
        event.preventDefault();     // 기존 입력 무시
        email_submitted();          // 이벤트 처리
    }
})

// popup 창 닫기
$('.submit-popup i').click(()=>{$('.gray-box').css('display', 'none');})