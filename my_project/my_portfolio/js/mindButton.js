var idx = 1;
const content = $(".mind .content");
const atv_sq = $(".mind .active-btn");
const btns = $(".mind .btn");
const btn1 = $(".mind .btn1");
const btn2 = $(".mind .btn2");
const btn3 = $(".mind .btn3");

// idx 를 바꿔주는 함수
function idx_count() {
  var index = 0;
  if (idx == 3) index = 1;
  else index = idx + 1;
  btn_click(index);
}

var inc = setInterval(idx_count, 20000);

// idx 가 바뀔 때 실행되는 함수
// 버튼을 누를 경우 호출되는 함수
// 각 버튼마다 index 다름
function btn_click(index) {
  if (idx == index) return;

  change_atv(index);
  change_btn_color(index);

  change_content(index);

  clearInterval(inc);
  inc = setInterval(idx_count, 20000);

  idx = index;
}

// 컨텐츠 내용을 바꾸는 함수
function change_content(index) {
  $(".mind .content .text-box").removeClass("active");
  $(`.mind .content .t${index}`).addClass("active");
}

// active_btn 의 위치를 index 에 따라 바꿔주는 함수
function change_atv(index) {
  atv_sq.animate({ left: `${(index - 1) * 12 + 1}vw` });
}

// index 번호에 따라 btn color 를 바꿔주는 함수
function change_btn_color(index) {
  btns.css("color", "black");
  $(`.btn${index}`).css("color", "white");
}

btn1.click(() => {
  btn_click(1);
});
btn2.click(() => {
  btn_click(2);
});
btn3.click(() => {
  btn_click(3);
});
