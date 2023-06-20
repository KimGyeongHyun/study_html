function pop_img(e) {
    // 전역 함수이므로 클릭 외 다른 곳에서도 실행 가능하므로 this 사용 불가
    // 여기서 this 는 window
    // console.log(this.getAttribute("alt"));
    
    // this 를 매개변수로 넘겨받을 수 있음 (event 나 e 로 많이 씀)
    // console.log(e.getAttribute("alt"));

    console.log(e.getAttribute("alt"));

    document.querySelector(".big_img").style.display = "flex";
    document.querySelector(".big_img img").setAttribute("src", e.getAttribute('src'));
    alt_text.innerHTML = e.getAttribute("alt");
};

function del_pop(e) {
    e.style.display = "none";
}