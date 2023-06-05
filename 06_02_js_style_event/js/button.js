// click 이벤트 수신기
btn.addEventListener("click", function(){
    alert("fuck you");
});

// 버튼 이벤트 두 가지의 활용 방법
var home = document.querySelector("*");

btn2.addEventListener("click", function(){
    home.style.backgroundColor = "black";
    home.style.color = "white";
});

eye_protect.onclick = function() {
    home.style.backgroundColor = "beige";
};

