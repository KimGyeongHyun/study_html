var idx = 1;
const content = $(".content");
const atv_sq = $(".active-btn");
const btn1 = $(".btn1");
const btn2 = $(".btn2");
const btn3 = $(".btn3");

// idx 를 바꿔주는 함수
function idx_count() {
  var index = 0;
  if (idx == 3) index = 1;
  else index = idx + 1;
  btn_click(index);
}

setInterval(idx_count, 1000);

// idx 가 바뀔 때 실행되는 함수
// 버튼을 누를 경우 호출되는 함수
// 각 버튼마다 index 다름
function btn_click(index) {
  if (idx == index) return;

  change_content(index);
  idx = index;
}

// 컨텐츠 내용을 바꾸는 함수
function change_content(index) {
  change_atv(index);
  change_btn_color(index);
}

// active_btn 의 위치를 index 에 따라 바꿔주는 함수
function change_atv(index) {
  atv_sq.animate({ left: `${(index - 1) * 12 + 1}vw` });
}

// index 번호에 따라 btn color 를 바꿔주는 함수
function change_btn_color(index) {}

btn1.click(() => {
  btn_click(1);
});
btn2.click(() => {
  btn_click(2);
});
btn3.click(() => {
  btn_click(3);
});
