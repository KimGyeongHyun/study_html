function calc_gap() {
    var birth = new Date($('#birth').val()).getTime();
    var today = new Date().getTime();
    return Math.floor((today - birth) / (1000 * 60 * 60 * 24));
}

function print_birth() {
    $('h2').text('당신은 태어난지 ' + calc_gap() + '일 되었습니다');
}

$('#btn').click(print_birth);