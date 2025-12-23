const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const icon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});
