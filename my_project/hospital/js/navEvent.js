var nav = document.querySelector(".nav");
var white = document.querySelector(".bg-white");
var logo = document.querySelector(".nav .nav-menu .logo");
var li = document.getElementsByClassName(".nav .nav-menu ul li");

function changeBlack() {
  logo.style.color = "black";
  logo.style.textShadow = "none";
  li.style.color = "black";
  li.style.textShadow = "none";
  console.log("black");
}

function changeWhite() {
  logo.style.color = "white";
  logo.style.textShadow = "2px 2px 4px #333333";
  li.style.color = "white";
  li.style.textShadow = "2px 2px 4px #333333";
  console.log("white");
}

window.addEventListener("scroll", (event) => {
  let scrollY = this.scrollY;
  if (scrollY == 0) {
    white.style.opacity = 0;
  } else {
    white.style.opacity = 1;
  }
});

// white 의 opacity: 0, nav 의 back: white 를 확인
setInterval(() => {
  var w = getComputedStyle(white).opacity;
  var b = getComputedStyle(nav).backgroundColor;
  console.log(w, b);
  // console.log(white);
  // console.log(nav);

  if (w == "1" || b == "rgb(255, 255, 255)") changeBlack();
  else changeWhite();
}, 1000);
