$('.btn').click(function() {
    var c1 = $('.get_color1').val();
    var c2 = $('.get_color2').val();
    var deg = $('.input_deg').val();
    console.log(c1);
    console.log(c2);

    $('.color_box').css("background", 
    "linear-gradient(" + deg + "deg, " + c1 + "," + c2 + ")");

    $('.s_deg').text(deg);
    $('.c1').text(c1);
    $('.c2').text(c2);
    $('.img_code').text("background: linear-gradient(" + 
    deg + "deg, " + c1 + "," + c2 + ")");
})