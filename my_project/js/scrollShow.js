setInterval(function () {
  var nav = $(".tracking-nav");
  var h = $(window).scrollTop();
  if (h > 50) nav.animate({ left: "1vw" }, 200);
  else nav.animate({ left: "-10vw" }, 200);
}, 400);
