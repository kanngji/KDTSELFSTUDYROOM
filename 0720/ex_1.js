const date = document.querySelector("#date");
const content = document.querySelector("#content");
const calendar = document.querySelector("table");

//클릭되는 위치
let target;

// 어디에 클릭이 일어났는지 파악하는 방식
calendar.addEventListener("click", function (e) {
  console.log("e-target", e.target);
  //클릭된 요소의 부모요소를 반환
  console.log("e-current", e.currentTarget);
  console.log("e-target", e.target.tagName);

  if (e.target.tagName === "P") {
    console.log("!");
    date.value = e.target.textContent;
    target = e.target.parentNode;
  } else if (e.target.tagName === "TD") {
    console.log("@");
    date.value = e.target.querySelector("p").textContent;

    target = e.target;
    //삭제기능임
    //   } else if (e.target.tagName === "DIV") {
    //     console.log(e.target);
    //     e.target.remove();
  }
});

function writeSchedule() {
  let task = content.value;
  let divEl = document.createElement("div");
  divEl.setAttribute("onclick", "deleteTask(this)");
  divEl.textContent = task;

  //   divEl.addEventListener("click", function () {
  //     // 폭탄목걸이 걸기
  //     // divEl.remove();
  //     if (divEl.style.textDecoration === "line-through") {
  //       divEl.remove();
  //     } else {
  //       divEl.style = "text-decoration: line-through";
  //     }
  //   });

  target.append(divEl);
  content.value = "";
}

//태그네임에 따라서 어떻게 처리해야할까??
function deleteTask(t) {
  t.remove();
}
