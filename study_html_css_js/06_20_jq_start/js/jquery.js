// 자바 스크립트 기반의 jQuery (라이브러리)
// 자바스크립트의 불편함을 해결하기 위한 jQuery
// 요소를 잡기 편해짐

// 기존 js 방식에선 첫번째 요소만 가져오지만
// JQuery 에선 모든 요소를 가져온다

// doc, $ 선언에 따라 문법도 맞춰야 함

// h1 없애기
// document.querySelector("h1").style.display = "none";
// $('h1').hide();

// h1 보이기
// $('h1').show();

// 클릭하면 없애기
// document.querySelector(".web3").onclick = function() {this.style.display = "none";}
$('.web3').click(function() {$(this).hide();});

// 버튼 클릭하면 txt 보이기
$('#txt').hide();
// show_txt.onclick = function() {$('#txt').show();}
$('#show_txt').click(function() {$('#txt').show();});

$('#my_input').change(function() {console.log(my_input.value);});