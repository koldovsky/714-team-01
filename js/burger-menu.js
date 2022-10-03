(() => {
  const menuButton = document.querySelector(".menu-button");
  const menuOverlay = document.querySelector(".menu-overlay");
  const items = document.querySelectorAll('.nav__item');

  menuButton.addEventListener("click", function () {
    menuButton.classList.toggle("active");
    menuOverlay.classList.toggle("open");
  });

  items.forEach( navItem => {
    menuButton.classList.remove("active");
    menuOverlay.classList.remove("open");
});

})();
