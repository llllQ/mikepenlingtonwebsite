const bakeryBtn = document.querySelector(".slide-bakery");
const photoBtn = document.querySelector(".slide-photography");
const bakerySlide = document.querySelector(".bakery-slide");
const photoSlide = document.querySelector(".photo-slide");

bakeryBtn.addEventListener("mouseenter", function () {
  console.log("Hi");

  bakerySlide.classList.add("slide-in");
});

bakeryBtn.addEventListener("mouseleave", function () {
  bakerySlide.classList.remove("slide-in");
});

photoBtn.addEventListener("mouseenter", function () {
  photoSlide.classList.add("slide-in");
});

photoBtn.addEventListener("mouseleave", function () {
  photoSlide.classList.remove("slide-in");
});
