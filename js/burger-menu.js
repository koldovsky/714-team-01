const menuButton = document.querySelector(".menu-button");
const menuOverlay = document.querySelector(".menu-overlay");

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("active");
  menuOverlay.classList.toggle("open");
});

/* window.onscroll = function () {
  transformLogo();
};

const logo = document.querySelector(".logo");

function transformLogo() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    logo.classList.add("scrolled");
  } else {
    logo.classList.remove("scrolled");
  }
} */
