// JavaScript to adjust the height on page load and on window resize
function setElementHeight() {
  const windowHeight = window.innerHeight;

  // Adjust the element's height to the viewport height
  $(".scrollspy-example").css("height", windowHeight + "px");
  $("section").css("height", windowHeight + "px");

  console.log(windowHeight);
}

// Call the function on page load and when the window is resized
window.addEventListener("load", setElementHeight);
window.addEventListener("resize", setElementHeight);
