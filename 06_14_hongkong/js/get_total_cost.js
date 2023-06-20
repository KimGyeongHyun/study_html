function get_cost() {
    document.querySelector(".total_cost").innerHTML = parseInt(document.querySelector(".cost").innerHTML) * parseInt(input_box.value);
};
get_cost()