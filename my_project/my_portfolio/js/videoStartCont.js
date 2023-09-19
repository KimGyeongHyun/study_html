window.addEventListener("scroll", () => {
  const posY = this.window.pageYOffset;
  const vid1Y =
    this.document.querySelector(".video1").getBoundingClientRect().top + posY;
  const vid2Y =
    this.document.querySelector(".video2").getBoundingClientRect().top + posY;
  const vid3Y =
    this.document.querySelector(".video3").getBoundingClientRect().top + posY;
  const scBottom = posY + window.innerHeight;

  const vid1 = $(".video1");
  const vid2 = $(".video2");
  const vid3 = $(".video3");

  if (vid1Y < scBottom) {
    vid1.get(0).play();
  } else {
    vid1.get(0).pause();
  }
  if (vid2Y < scBottom) {
    vid2.get(0).play();
  } else {
    vid2.get(0).pause();
  }
  if (vid3Y < scBottom) {
    vid3.get(0).play();
  } else {
    vid3.get(0).pause();
  }
});
