function slide_left(str) {$(str).animate({left: 0}, 500);}
function slide_right(str) {$(str).animate({left: '110vw'}, 500);}

$('.header .menu .menu-box>i').click(()=>{slide_left('.popup');});
$('.popup i').click(()=>{slide_right('.popup');});

$('.popup>ul #popup1').click(()=>{slide_left('.sub1');});
$('.popup>ul #popup2').click(()=>{slide_left('.sub2');});
$('.popup>ul #popup3').click(()=>{slide_left('.sub3');});
$('.popup>ul #popup4').click(()=>{slide_left('.sub4');});
$('.popup>ul #popup5').click(()=>{slide_left('.sub5');});
$('.sub1>i').click(()=>{slide_right('.sub1');});
$('.sub2>i').click(()=>{slide_right('.sub2');});
$('.sub3>i').click(()=>{slide_right('.sub3');});
$('.sub4>i').click(()=>{slide_right('.sub4');});
$('.sub5>i').click(()=>{slide_right('.sub5');});