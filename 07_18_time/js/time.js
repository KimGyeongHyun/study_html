var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var today, year, month, date, day, hour, minute, second, mili;

function get_time() {
    today = new Date();
    year = today.getFullYear();
    month = today.getMonth() + 1;
    date = today.getDate();
    day = today.getDay();
    hour = today.getHours();
    minute = today.getMinutes();
    second = today.getSeconds();
    mili = today.getMilliseconds();
}

function print_time() {
    get_time();
    $('.year>span').text(year);
    $('.month>span').text(month);
    $('.date>span').text(date);
    $('.day>span').text(days[day]);
    $('.hour>span').text(hour);
    $('.minute>span').text(minute);
    $('.second>span').text(second);
    $('.mili>span').text(mili);
}

print_time();

// 시간 자동 갱신
setInterval(print_time, 4);

// 시간 버튼으로 갱신
// $('#btn').click(print_time);

