function add_cl(input_idx) {$('li').eq(input_idx).addClass('cl_bri');}
function del_cl(input_idx) {$('li').eq(input_idx).removeClass('cl_bri');} 

var idx = 0
add_cl(idx);

$('#prev').click(function() {
    if (idx == 0) {
        alert("첫번째 음악입니다.");
        return
    }
    del_cl(idx);    add_cl(--idx);
});

$('#next').click(function() {
    if (idx == $('li').length - 1) {
        alert("마지막 음악입니다.");
        return
    }
    del_cl(idx);    add_cl(++idx);
})