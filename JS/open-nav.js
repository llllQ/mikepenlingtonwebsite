const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("open");
  hamburger.classList.toggle("open");
  document.querySelector(".navigation").classList.toggle("open");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    hamburger.classList.remove("open");
    document.querySelector(".navigation").classList.remove("open");
    document.querySelector("body").classList.remove("open");
  });
});
