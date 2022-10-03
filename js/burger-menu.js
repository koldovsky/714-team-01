(() => {
  const menuButton = document.querySelector(".menu-button");
  const menuOverlay = document.querySelector(".menu-overlay");

  menuButton.addEventListener("click", function () {
    menuButton.classList.toggle("active");
    menuOverlay.classList.toggle("open");
  });

  nav__item.addEventListener("click", function () {
    menuButton.classList.remove("active");
    menuOverlay.classList.remove("open");
  });

})();