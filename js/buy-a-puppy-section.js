(function () {
  const title = document.querySelector(".how-to-buy-a-puppy__title h2");
  const titleOriginalText = title.textContent;
  const line = document.querySelector(
    ".how-to-buy-a-puppy__title .line-under-heading"
  );
  let interval;

  title.onmouseover = () => {
    interval = setInterval(() => {
      title.textContent = new Date().toLocaleTimeString();
    }, 1000);

    line.classList.add("horizontal-transition");
  };

  title.onmouseout = () => {
    clearInterval(interval);
    title.textContent = titleOriginalText;

    line.classList.remove("horizontal-transition");
  };
})();
