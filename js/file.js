  const box = document.querySelector(".wizard-home-page__sphere");

  // أول ما يخلص fadeInDownBig
  box.addEventListener("animationend", () => {
    box.classList.remove("fadeDownSmooth");
    box.classList.add("subtleBounce");
  });