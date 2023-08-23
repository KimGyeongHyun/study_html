for (var i = 1; i <= 4; i++) {
  const trigger = $("#sc" + i);
  const dest = $("#scroll" + i);

  trigger.click(() => {
    $("html").animate({ scrollTop: dest.offset().top }, 500);
  });
}

$("#sc-menu").click(() => {
  $("html").animate({ scrollTop: $("#scroll2").offset().top }, 500);
});
