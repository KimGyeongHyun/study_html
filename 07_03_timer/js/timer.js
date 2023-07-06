var milis = 0;

function display_time() {
    var min = Math.floor(milis/6000);
    var sec = Math.floor((milis/100)%60);
    var mili = milis%100;
    $('.time_box').html("");
    if (min < 10) {$('.time_box').append("0");}
    $('.time_box').append(min + " : ");
    if (sec < 10) {$('.time_box').append("0");}
    $('.time_box').append(sec);
    $('.time_box').append(" : ");
    if (mili < 10) {$('.time_box').append("0");}
    $('.time_box').append(mili);
}
function inc_time() {milis++;}
function inc_and_display() {inc_time(); display_time();}
function li_deco() {
    var l = $('.rec li').length;
    if (l % 2 == 0) {$('.rec li').eq(l-1).css("background-color", "cornsilk");}
    else {$('.rec li').eq(l-1).css("background-color", "beige");}
}

display_time();
var interval = setInterval(inc_and_display, 10);

$('#start').click(function() {
    if (interval) {return;}
    interval = clearInterval(interval);
    interval = setInterval(inc_and_display, 10);
});

$('#stop').click(function() {
    interval = clearInterval(interval);
});

$('#record').click(function() {
    $('.rec').append("<li>" + $('.time_box').html() + "</li>");
    li_deco();
});

// button 속성 중에 disabled="disabled" 를 넣으면
// 버튼이 동작하기 않는다
// 이를 활용하여 버튼 이벤트를 막을 수 있다
// jquery 에서 attr(), removeAttr(~) 로 속성을 disabled 속성을
// 넣었다 뺐다 하는 식으로 구성 가능
// .start:disabled {} 로 disabled 된 버튼 디자인 가능