const lazyImages = document.querySelectorAll("[data-src]");

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }
  img.style.backgroundImage = src;
}

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 800px 0px",
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

lazyImages.forEach((image) => {
  imgObserver.observe(image);
});
