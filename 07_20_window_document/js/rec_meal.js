var meals = ['짜장면', '부대찌개', '감자탕', 
'삼겹살', '김치볶음밥', '샐러드', '라면', '김밥'];

function pick_idx() {
    var idx = Math.floor(Math.random() * meals.length);
    console.log(idx);
    return idx;
}

function print_meal() {
    $('.food_box').css('background-image', `url(../img/${meals[pick_idx()]}.jpg)`);
}

$('#btn').click(print_meal)