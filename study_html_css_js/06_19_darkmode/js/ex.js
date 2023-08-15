var p = document.querySelector("p");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
h1.style.fontSize = "40px";
h2.style.fontSize = "30px";
p.style.fontSize = "20px";

var big_box = document.querySelector("section");

dark_mode.addEventListener('click', function() {
    big_box.classList.toggle("dark_mode");
    if (big_box.classList.contains("dark_mode")) dark_mode.innerHTML = "라이트모드";
    else dark_mode.innerHTML = "다크모드";
});

function smaller() {
    var font_size = parseInt(p.style.fontSize.match(/\d+/g));
    if (font_size <= 5) return;
    font_size -= 5;
    p.style.fontSize = font_size + "px";
};

function bigger() {
    var font_size = parseInt(p.style.fontSize.match(/\d+/g));
    font_size += 5;
    p.style.fontSize = font_size + "px";
};

function change_size(op) {
    if (op == "+") {
        h1.style.fontSize = (parseInt(h1.style.fontSize) + 5) + "px";
        h2.style.fontSize = (parseInt(h2.style.fontSize) + 5) + "px";
        p.style.fontSize = (parseInt(p.style.fontSize) + 5) + "px";
    }
    else {
        h1.style.fontSize = (parseInt(h1.style.fontSize) - 5) + "px";
        h2.style.fontSize = (parseInt(h2.style.fontSize) - 5) + "px";
        p.style.fontSize = (parseInt(p.style.fontSize) - 5) + "px";
    }
}