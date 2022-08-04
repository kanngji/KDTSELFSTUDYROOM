const inputTask = document.querySelector(".input-task");
const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");

// console.log(inputTask, addBtn, todoList);

addBtn.addEventListener("click", function () {
  if (inputTask.value === "") {
    inputTask.setAttribute("placeholder", "할 일을 입력해주세요");
  }
  //실제 내용이 들어왔을 때
  else {
    const addLi = document.createElement("li");

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.addEventListener("click", function () {
      //체크박스가 됬는지 안됬는지 여부따지기
      if (checkBox.checked === true) {
        // 자기가 속한 부모한테로 가기
        //checkBox의 부모 === li로 가서 속성을 먹여준다.
        checkBox.parentNode.style.textDecoration = "line-through";
      } else {
        checkBox.parentNode.style.textDecoration = "none";
      }
    });

    const deleteBtn = document.createElement("input");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("value", "삭제");
    // deleteBtn.setAttribute("onclick", "deleteTask(this)");

    addLi.append(checkBox);
    addLi.append(inputTask.value);
    addLi.append(deleteBtn);

    todoList.append(addLi);
    //value를 아무것도 없는걸로 바까라
    inputTask.value = "";
  }
});

//체크박스 on off 구별법
// const test = document.querySelector(".test");

// test.addEventListener("click", function () {
//   console.log(test.checked);
// });

// function deleteTask(t) {
//   t.parentNode.remove();
// }

todoList.addEventListener("click", function (e) {
  //   console.log(e.target);
  console.log(e.target.tagName);
  if (
    e.target.tagName === "INPUT" &&
    e.target.getAttribute("type") === "button"
  )
    e.target.parentNode.remove();
});
