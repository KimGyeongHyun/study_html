$('#tab2').hide();
$('#tab3').hide();

function disp_tab(idx) {
    $('.tab-section .text-box>p').hide();
    $('.tab-section .text-box>#tab'+idx).show();

    $('.box-link>p').removeClass('on');
    $('.box-link>p').eq(idx-1).addClass('on');

    $('.box-link>div').removeClass('on-back off-back');
    $('.box-link>div').addClass('off-back');
    $('.box-link>div').eq(idx-1).removeClass('off-back');
    $('.box-link>div').eq(idx-1).addClass('on-back');
}