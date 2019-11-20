const mobileNav = document.querySelector(".mobile-nav");
const anywhere = document.getElementsByTagName("body")[0];

anywhere.addEventListener("click", () => {
    mobileNav.classList.toggle("mobile-nav--slide");
})
