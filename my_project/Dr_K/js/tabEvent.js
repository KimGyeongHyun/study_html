let prev = 1;

function changeTab(num) {
  document.querySelector(".tech" + prev).style.opacity = 0;
  prev = num;
  document.querySelector(".tech" + num).style.opacity = 1;
}

function changeTab2(num) {
  if (prev == num) return;

  const prevEle = document.querySelector(".tech" + prev);
  const currEle = document.querySelector(".tech" + num);
  prevEle.animate([{ opacity: 1 }, { opacity: 0 }], 200);
  prevEle.style.opacity = 0;
  currEle.animate([{ opacity: 0 }, { opacity: 1 }], 200);
  currEle.style.opacity = 1;

  document.querySelector("#btn" + prev).classList.remove("active");
  document.querySelector("#btn" + num).classList.add("active");

  prev = num;
}

for (let i = 1; i <= 6; i++) {
  const btn = document.getElementById("btn" + i);
  btn.addEventListener("click", () => {
    changeTab2(i);
  });
}
