const anim = document.querySelectorAll(".anim");

var options = {};

upObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.target.dataset.duration) {
      entry.target.dataset.duration = "1.5s";
    }

    if (!entry.target.dataset.animtype) {
      entry.target.dataset.animtype = "anim-up";
    }

    if (!entry.target.dataset.delay) {
      entry.target.dataset.delay = "0s";
    }
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `${entry.target.dataset.animtype} ${entry.target.dataset.duration} forwards ${entry.target.dataset.delay} ease-out`;
    } else {
      imgObserver.unobserve(entry.target);
    }
  });
});

anim.forEach((element) => {
  upObserver.observe(element);
});
