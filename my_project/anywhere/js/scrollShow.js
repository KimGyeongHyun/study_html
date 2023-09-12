var flag = false;

setInterval(function () {
  var nav = $(".tracking-nav");
  var h = $(window).scrollTop();
  if (h > 50) {
    if (flag) return;
    flag = true;
    nav.animate({ left: "1vw" }, 200);
  } else {
    if (!flag) return;
    flag = false;
    nav.animate({ left: "-10vw" }, 200);
  }
}, 400);
