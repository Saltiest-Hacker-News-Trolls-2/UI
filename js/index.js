const mobileNav = document.querySelector(".mobile-nav");
const hamburger = document.querySelector(".hamburger");
const hamburgerIcon = document.querySelector(".hamburger-icon");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("hamburger-pressed");

  if (
    !mobileNav.classList.contains("mobile-nav--slide-out") &&
    !mobileNav.classList.contains("mobile-nav-slide")
  ) {
    mobileNav.classList.add("mobile-nav--slide-out");
  } else if (mobileNav.classList.contains("mobile-nav--slide-out")) {
    mobileNav.classList.remove("mobile-nav--slide-out");
    mobileNav.classList.add("mobile-nav--slide");
  } else if (mobileNav.classList.contains("mobile-nav--slide")) {
    mobileNav.classList.remove("mobile-nav--slide");
    mobileNav.classList.add("mobile-nav--slide-out");
  }
});
