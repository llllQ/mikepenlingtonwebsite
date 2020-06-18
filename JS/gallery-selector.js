const galleryOptions = document.querySelectorAll(".option");
const allPhotos = document.querySelectorAll(".image-container");

function updateGallery(galleryType) {
  if (galleryType == "All") {
    allPhotos.forEach((photo) => {
      photo.style.display = "block";
    });
    return;
  }
  allPhotos.forEach((photo) => {
    if (photo.childNodes[1].dataset.tag == galleryType) {
      photo.style.display = "block";
    } else {
      photo.style.display = "none";
    }
  });
}

galleryOptions.forEach((element) => {
  element.addEventListener("click", () => {
    galleryOptions.forEach((element) => {
      element.classList.remove("showing");
    });
    element.classList.add("showing");
    updateGallery(element.innerHTML);
  });
});
