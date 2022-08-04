// let boxEl = document.querySelector(".box");

// console.log(boxEl);
// boxEl.classList.add("active");

// console.log(boxEl.classList.contains("active"));

// boxEl.classList.remove("active");
// console.log(boxEl.classList.contains("active"));

// boxEl.addEventListener("click", function () {
//   if (boxEl.classList.contains("orange")) {
//     boxEl.classList.remove("orange");
//     boxEl.classList.add("skyblue");
//   } else if (boxEl.classList.contains("skyblue")) {
//     boxEl.classList.remove("skyblue");
//     boxEl.classList.add("orange");
//   } else {
//     boxEl.classList.add("orange");
//   }
// });
// let boxEl = document.querySelector(".box");
// let inputEl = document.getElementById("input");
// //boxEl를 클릭했을때 특정기능을 수행하겠당.
// boxEl.addEventListener("click", function () {
//   //   inputEl.setAttribute("placeholder", "아이디를 입력하세요");
//   // 클릭하면 type=text 가 button으로 바뀐당
//   inputEl.setAttribute("type", "password");
// });

// let boxEl = document.querySelector(".box");

// boxEl.addEventListener("click", function () {
//   boxEl.textContent = "KDT";
// });

//실습 첫번째 예제
// let boxEl = document.querySelector(".box");
// boxEl.addEventListener("click", function () {
//   if (boxEl.classList.contains("orange")) {
//     boxEl.classList.remove("orange");
//     boxEl.classList.add("skyblue");
//   } else if (boxEl.classList.contains("skyblue")) {
//     boxEl.classList.remove("skyblue");
//     boxEl.classList.add("orange");
//   } else {
//     boxEl.classList.add("orange");
//   }
// });

// let btnEl = document.getElementById("btn");
// let inputEl = document.getElementById("input");
// let textEl = document.getElementById("text");
// let spanEl = document.getElementById("spantag");
// let name = document.getElementById("input").value;
// console.log(btnEl);
// btnEl.addEventListener("click", function () {
//   textEl.setAttribute("placeholder", "아이디를 입력하세요");
//   spanEl.textContent = "아이디를 입력하세요";
// });

// inputEl = addEventListener("click", function () {
//   document.getElementById("span").innerText = name;
// });

//예제 2번

// let buttonOne = document.getElementById("button-1");
// let buttonTwo = document.getElementById("button-2");
// let inputEl = document.getElementById("input");
// let spanEl = document.querySelector("span");

// buttonOne.addEventListener("click", function () {
//   inputEl.setAttribute("placeholder", "아이디를 입력하세요");
//   spanEl.textContent = "아이디를 입력해주세요";
// });

//예제 3번 ★복습하기!!!
// buttonTwo.addEventListener("click", function () {
//   let inputText;
//   inputText = inputEl.value;
//   spanEl.textContent = inputText;
// });
