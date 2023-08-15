var count = 4;
var interval = setInterval(function() {
    $('.count').html(count);
    if (count == 0) {
        $('.big').fadeOut();
        return;
    }
    count--;
}, 1000);

// 함수에서 return 하니 더이상 interval 이 돌지 않음
setInterval(function() {console.log(count);}, 500);