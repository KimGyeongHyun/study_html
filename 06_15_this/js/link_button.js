// 반복문 말고 배열에서 바로 this 객체를 뽑아오는 방법은 나중에 배움
for (var i = 0; i<document.querySelectorAll("button").length; i++) {
    console.log(i);
    document.querySelectorAll("button")[i].onclick = function() {
        console.log(this.innerHTML);
    };
};


