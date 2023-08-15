var myarr = ["red", "green", "blue", "purple"];
var select = prompt("무슨 색을 좋아하세요?");
myarr.push(select)
var h3 = document.getElementsByTagName("h3")[3];

for (var i = 0; i < myarr.length; i++) {
    h3.innerHTML += myarr[i];
    if (i != myarr.length-1) h3.innerHTML += "-";
}