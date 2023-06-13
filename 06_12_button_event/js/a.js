// html 이 모두 onload 된 다음에 실행하게 함
// 스크립트 자리 상관 없어짐
// window.onload = function() {
//     document.querySelector(".b1").onclick = function() {alert();};
// };

var my_tag = document.querySelectorAll("span");

function change_name() {
    var name = prompt("이름을 입력하세요.");
    for (var i = 0; i < my_tag.length; i++) {my_tag[i].innerHTML = name;}
};

function change_color() {
    var my_color = prompt("어떤 색상을 좋아하세요?")

    for (var i = 0; i < my_tag.length; i++) {my_tag[i].style.color = my_color}
};


function change_bg(bg_color) {
    main_box.style.backgroundColor = bg_color;
}


