function set_time() {
    var birth = new Date($('#date').val());
    birth.setDate(birth.getDate() + 100);
    $('.1').text(birth);
    birth.setDate(birth.getDate() + 100);
    $('.2').text(birth);
    birth.setDate(birth.getDate() + 100);
    $('.3').text(birth);
    birth.setDate(birth.getDate() + 66);
    $('.4').text(birth);
}

// date.onchange = set_time;
$('#date').change(set_time);