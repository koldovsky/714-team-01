(function () {
  const title = document.querySelector(".how-to-buy-a-puppy__title h2");
  const line = document.querySelector(
    ".how-to-buy-a-puppy__title .line-under-heading"
  );

  title.addEventListener("mouseover", () => {
    line.classList.add("horizontal-transition");
  });

  title.addEventListener("mouseout", () => {
    line.classList.remove("horizontal-transition");
  });
})();
