var name = prompt("1) 당신의 이름은?");
var year = parseInt(prompt("2) 당신이 태어난 년도는?"));
year = 2023 - year + 1;

document.querySelector(".name").innerHTML = name;
document.querySelector(".age").innerHTML = year + "세";
if (year >= 20) {
    document.querySelector(".adult").innerHTML = "성인";
    document.querySelector(".adult-box").style.cssText = 'background-color:red'
}
else {
    document.querySelector(".adult").innerHTML = "미성년자";
    document.querySelector(".adult-box").style.cssText = 'background-color:green'
}