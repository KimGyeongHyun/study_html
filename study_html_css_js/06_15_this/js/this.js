document.querySelector(".blue_box").onclick = function() {
    this.style.backgroundColor = "red";
    console.log(this.innerHTML);
}