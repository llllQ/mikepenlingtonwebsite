const reactiveElem = document.querySelector(".cursor-reactive");
console.log("loaded");

reactiveElem.addEventListener("mousemove", (e) => {
  console.log("hello");
  alert("hi");

  reactiveElem.style.backgroundPositionX = -e.offsetX + "px";
  reactiveElem.style.backgroundPositionY = -e.offsetY + "px";
});
