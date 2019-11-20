const mobileNav = document.querySelector(".mobile-nav");
const hamburger = document.querySelector(".hamburger");
const hamburgerIcon = document.querySelector(".hamburger-icon");

hamburger.addEventListener("click", function() {
  mobileNav.classList.toggle("mobile-nav--slide");
  hamburger.classList.toggle("hamburger-pressed");
});
