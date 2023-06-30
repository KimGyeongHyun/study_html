var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'darkblue', 'purple'];
var idx = 0;

function set_color() {
    $('.display').css('background-color', colors[idx++]);
    if (idx == colors.length) {idx = 0;}
}

var interval = setInterval(set_color, 500);

$('#start').click(function() {
    interval = setInterval(set_color, 500);
})

$('#stop').click(function() {
    clearInterval(interval);
})