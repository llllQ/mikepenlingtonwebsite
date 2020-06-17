// Get the modal
const modal = document.querySelector(".modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.querySelectorAll(".gallery-image");
var modalImg = document.querySelector(".img01");
var captionText = document.querySelector(".caption");

images.forEach((img) => {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.style.backgroundImage = this.style.backgroundImage;
    captionText.innerHTML = this.dataset.caption;
  };
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

modal.onclick = function () {
  modal.style.display = "none";
};
