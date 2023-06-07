function set_bg() {

    var ul = document.getElementsByClassName("to_do_list");

    for (var i = 0; i < ul.length; i++) {
        if (i % 2 == 0) {ul[i].style.backgroundColor = "gray";}
        else {ul[i].style.backgroundColor = "white";}
    }
}

set_bg();

function get_to_do() {
    var str = prompt("할 일을 입력하세요");
    
}