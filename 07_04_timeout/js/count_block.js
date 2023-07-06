var idx = 0;
function paint_blk() {
    if (idx == $('.sm').length) return;
    $('.sm').eq(idx++).css("background-color", "purple");
}

setInterval(paint_blk, 1000);

// .next().addClass() 로도 구성 가능