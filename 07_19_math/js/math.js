var num1 = 100;
var num2 = new Number(200);

console.log(num1);
console.log(num2);

// 소숫점 버림
console.log('floor');
console.log(Math.floor(2.9));
// 소숫점 올림
console.log('ceil');
console.log(Math.ceil(2.1));
// 반올림
console.log('round');
console.log(Math.round(2.4));
console.log(Math.round(2.6));
// 절대값
console.log('abs');
console.log(Math.abs(-9));
// 제곱근
console.log('sqrt');
console.log(Math.sqrt(5));
console.log(Math.sqrt(25));
// 세제곱근
console.log('cbrt');
console.log(Math.cbrt(5));
console.log(Math.cbrt(125));
// 최대, 최소
console.log('min, max');
console.log(Math.min(3, 8, 5), Math.max(3, 8, 5));
// 랜덤
console.log('random');
console.log(Math.random()); // 0 ~ 1

$('#btn').click(function() {
    $('.numbox').text(Math.floor(Math.random() * 5));
    $('.numbox2').text(Math.floor(Math.random() * 10) + 10);
});

$('#btn2').click(function() {
    var color = Math.floor(Math.random() * 16**6).toString(16).padStart(6, "0");
    console.log(color);
    $('body').css("background-color", "#" + color);
})



