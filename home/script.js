nav = document.querySelector(".nav");
close = document.querySelector(".close");
hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  nav.classList.add("active");
});
close.addEventListener("click", () => {
  nav.classList.remove("active");
});
