var nav = document.querySelector(".nav");
var white = document.querySelector(".bg-white");
var logo = document.querySelector(".nav .nav-menu .logo");
var li = document.getElementsByClassName("tog-li");
var spacer = document.getElementsByClassName("tog-sp");
var icon = document.getElementsByClassName("tog-ic");
var popul = document.getElementsByClassName("tog-pop");
var [flag1, flag2] = [false, false];

function changeBlack() {
  logo.style.color = "black";
  logo.style.textShadow = "none";
  for (var i = 0; i < li.length; i++) {
    li[i].style.color = "black";
    li[i].style.textShadow = "none";
  }
  for (var i = 0; i < icon.length; i++) {
    icon[i].style.color = "black";
    icon[i].style.textShadow = "none";
  }
  for (var i = 0; i < spacer.length; i++) {
    spacer[i].style.backgroundColor = "black";
    spacer[i].style.boxShadow = "none";
  }
}

function changeWhite() {
  logo.style.color = "white";
  logo.style.textShadow = "2px 2px 4px #333333";
  for (var i = 0; i < li.length; i++) {
    li[i].style.color = "white";
    li[i].style.textShadow = "2px 2px 4px #333333";
  }
  for (var i = 0; i < icon.length; i++) {
    icon[i].style.color = "white";
    icon[i].style.textShadow = "2px 2px 4px #333333";
  }
  for (var i = 0; i < spacer.length; i++) {
    spacer[i].style.backgroundColor = "white";
    spacer[i].style.boxShadow = "1px 1px 1px 0px #666666";
  }
}

function hoverMenu() {
  popul[0].style.height = "160px";
}

function outMenu() {
  popul[0].style.height = "0px";
}

function changeWhenEvent() {
  var w = getComputedStyle(white).opacity;
  var b = getComputedStyle(nav).backgroundColor;

  if (flag1 || flag2) changeBlack();
  else changeWhite();
}

nav.addEventListener("mouseover", () => {
  flag2 = true;
  changeWhenEvent();
  hoverMenu();
});
nav.addEventListener("mouseout", () => {
  flag2 = false;
  changeWhenEvent();
  outMenu();
});

window.addEventListener("scroll", (event) => {
  let scrollY = this.scrollY;
  if (scrollY == 0) {
    white.style.opacity = 0;
    flag1 = false;
  } else {
    white.style.opacity = 1;
    flag1 = true;
  }
  changeWhenEvent();
});
