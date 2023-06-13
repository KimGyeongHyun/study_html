function get_name() {
    var name = name_input.value;
    document.querySelector(".name_output").innerHTML = name + "님 안녕하세요";
    name_input.value = "";
}