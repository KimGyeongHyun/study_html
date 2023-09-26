let flag = false;

mainBox.addEventListener("scroll", () => {
  const posY = this.pageYOffset;
  const startY =
    document.querySelector(".ani-start").getBoundingClientRect().top + posY;
  const scBottom = posY + this.innerHeight;

  if (startY > scBottom) {
    removeAnimationClass();
    flag = false;
  } else if (startY < scBottom && !flag) {
    giveAnimationClass();
    flag = true;
  }
});

function giveAnimationClass() {
  const a1 = $(".ani-start");
  const a2 = $(".ani2");
  const a3 = $(".ani3");
  const a41 = $(".ani4-1");
  const a42 = $(".ani4-2");
  const a51 = $(".ani5-1");
  const a52 = $(".ani5-2");
  const a53 = $(".ani5-3");

  setTimeout(() => {
    a1.addClass("footer-fade-ani");
  }, 200);
  setTimeout(() => {
    a2.addClass("footer-fade-ani");
  }, 500);
  setTimeout(() => {
    a3.addClass("footer-fade-ani");
  }, 800);

  setTimeout(() => {
    a41.addClass("footer-fade-ani");
  }, 1200);
  setTimeout(() => {
    a42.addClass("footer-fade-ani");
  }, 1300);
  setTimeout(() => {
    a51.addClass("footer-fade-ani");
  }, 1400);
  setTimeout(() => {
    a52.addClass("footer-fade-ani");
  }, 1500);
  setTimeout(() => {
    a53.addClass("footer-fade-ani");
  }, 1600);
}

function removeAnimationClass() {
  const a1 = $(".ani-start");
  const a2 = $(".ani2");
  const a3 = $(".ani3");
  const a41 = $(".ani4-1");
  const a42 = $(".ani4-2");
  const a51 = $(".ani5-1");
  const a52 = $(".ani5-2");
  const a53 = $(".ani5-3");

  a1.removeClass("footer-fade-ani");
  a2.removeClass("footer-fade-ani");
  a3.removeClass("footer-fade-ani");
  a41.removeClass("footer-fade-ani");
  a42.removeClass("footer-fade-ani");
  a51.removeClass("footer-fade-ani");
  a52.removeClass("footer-fade-ani");
  a53.removeClass("footer-fade-ani");
}
