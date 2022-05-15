const hamburger = document.querySelector("#btnHamburger");
const mobile = document.querySelector(".nav__mobile--menu");
const body = document.querySelector("body");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  mobile.classList.toggle("open");
});
