// let boxEls = document.querySelectorAll(".box");

// console.log(boxEls);

// boxEls.forEach(function (boxEl, index) {
//   boxEl.classList.add(`box_${index + 1}`);
// });

// console.log(boxEls);

let colors = document.querySelectorAll(".color");
let btnEl = document.getElementById("btn");

btnEl.addEventListener("click", function () {
  colors.forEach(function (color, index) {
    if (index % 7 === 0) {
      color.style.backgroundColor = "red";
      //   color.classList.add(`color_1`);
    } else if (index % 7 === 1) {
      color.style.backgroundColor = "yellow";
      //   color.classList.add(`color_2`);
    } else if (index % 7 === 2) {
      //   color.classList.add(`color_3`);
    } else if (index % 7 === 3) {
      //   color.classList.add(`color_4`);
    } else if (index % 7 === 4) {
      //   color.classList.add(`color_5`);
    } else if (index % 7 === 5) {
      //   color.classList.add(`color_6`);
    } else if (index % 7 === 6) {
      //   color.classList.add(`color_7`);
    }

    // color.classList.add(`color_${index + 1}`);
  });
});

// forEach(function(인자1,인자2){

// })
