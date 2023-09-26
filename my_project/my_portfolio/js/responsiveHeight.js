// JavaScript to adjust the height on page load and on window resize
function setElementHeight() {
  const element = document.querySelector("section");
  const windowHeight = window.innerHeight;

  // Adjust the element's height to the viewport height
  element.style.height = windowHeight + "px";
}

// Call the function on page load and when the window is resized
window.addEventListener("load", setElementHeight);
window.addEventListener("resize", setElementHeight);
