for (var i = 1; i <= $(".sort-sc").length; i++) {
  const trigger = $("#sort-sc" + i);
  const dest = $("#sort-scroll" + i);

  trigger.click(() => {
    $("html").animate({ scrollTop: dest.offset().top }, 0);
  });
}

for (var i = 1; i <= $(".imp-sc").length; i++) {
  const trigger = $("#imp-sc" + i);
  const dest = $("#imp-scroll" + i);

  trigger.click(() => {
    $("html").animate({ scrollTop: dest.offset().top }, 0);
  });
}
