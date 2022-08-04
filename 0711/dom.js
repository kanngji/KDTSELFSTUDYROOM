let boxEl = document.querySelector(".box");
console.log(boxEl);

boxEl.addEventListener("click", function () {
  boxEl.classList.add("orange");
  if (boxEl.classList.contains === "orange") {
    boxEl.addEventListener("click", function () {
      boxEl.classList.remove("orange");
    });
  }
});
