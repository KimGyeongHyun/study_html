red_button.addEventListener("click", function(){
    document.querySelector("*").style.backgroundColor = "pink";
    
    document.querySelector("h1").style.backgroundColor = "red";
    document.querySelector("h1").style.color = "white";

    document.querySelector("p").style.backgroundColor = "green";
    document.querySelector("p").style.color = "white";
});

function happy() {
    console.log("a");
};

// 함수 적용 방법
// happy 함수는 스트링 형식으로 들어감
function_button.onclick = happy;
function_button.addEventListener("click", happy);

function show_mult(dan) {
    dansu.innerHTML = "";
    for (var i = 1; i <= 9; i++) dansu.innerHTML += dan+"*"+i+"="+dan*i+"<br>";
};