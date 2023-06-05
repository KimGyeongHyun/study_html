var count = 0;
for (var i = 1; i <= 500; i++) {
    if (i%7 == 0) count++;
}
document.getElementsByTagName("h3")[2].innerHTML = "1에서부터 500 사이에 있는 수자중에서 7의 배수는 " + count + "개 입니다."
