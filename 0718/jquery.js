// let spanEl = document.querySelector("span");
// spanEl.remove();
// function showValue() {
//   $("input").val("가나다라마바사");
//   document.querySelector("input").value = "가나다라마바사";
// }

// $("span").remove();

// $("span").text("가나다라마바사");
// document.querySelector("span").textContent = "가나다라마바사";

// const inputText = document.querySelector("#input-text");
// const printBtn = document.querySelector(".print");
// const changeBtn = document.querySelector(".change");

// console.log(inputText, printBtn, changeBtn);

// changeBtn.addEventListener("click", function () {
//   inputText.setAttribute("value", "가나다라마바사");
// });

// printBtn.addEventListener("click",function(){

// })

// 실습하기!!
// const inputText = document.querySelector(".text-input");
// const writeBtn = document.querySelector(".write-btn");
// const modifyBtn = document.querySelector(".modify-btn");
// const spanEl = document.querySelector("span");

// modifyBtn.addEventListener("click", function () {
//   inputText.value = "가나다라마바사";
// });

// function changeSpan() {
//   spanEl.textContent = inputText.value;
// }

// jQuery로 실습하기
// $(".write-btn").on("click", function () {
//   $("span").text($(".text-input").val());
//   $("span").text(text);
// });

// $(".modify-btn").on("click", function () {
//   $(".text-input").val("가나다라마바사");
// });

// $(".text-input").on("click", function () {
//   $(".text-input").attr("type", "button");
//   $(".text-input").attr("value", "button");
// });

// // js로 실습하기!!
// const inputText = document.querySelector(".input-text");
// const change1Btn = document.querySelector(".change1");
// const chagne2Btn = document.querySelector(".change2");

// change1Btn.addEventListener("click", function () {
//   // 처음인자는 속성이다
//   inputText.setAttribute("placeholder", "변경하셨습니다.");
// });

// chagne2Btn.addEventListener("click", function () {
//   inputText.setAttribute("type", "radio");
// });

//jq로 실습하기

// $(".change1").on("click", function () {
//   $(".input-text").attr("placeholder", "변경1을 눌렀습니다");
// });

// $("div").css("background-color", "orange");
// js
// document.querySelector("div").style = "background-Color:balck";

// const changeBtn = document.querySelector(".change1");
// const square = document.querySelector(".square");
// //js
// changeBtn.addEventListener("click", function () {
//   square.style = "background-color:orange;";
// });

// //jq로 구현
// function changeCss2() {
//   // ${"div"}.css("background-color","skyblue");
// }

// $("p").html("<h1>루피</h1>");

// document.querySelector("p").innerHTML = "<h1>루피<h1>";

// const li = document.createElement("li");
// li.textContent = "추가용";

// $(".me").before(li);

// $(".me").after(li);

// const inputText = document.querySelector(".input-text");
// const btn1 = document.querySelector(".button1");
// const ulDiv = document.querySelector("ul");

// btn1.addEventListener("click",function(){
//     const liEl = document.createElement("li");
//     leEl.text=inputText.value
//     //ul 태그의 마지막 자식으로 삽입

//     //ul 태그의 첫번째 자식으로 삽입

// })

const textInput = document.querySelector(".text-input");
const btn1 = document.querySelector(".button1");
const btn2 = document.querySelector(".button2");

const list = document.querySelector("ul");

btn1.addEventListener("click", function () {
  const addLi = document.createElement("li");
  addLi.textContent = textInput.value;

  list.append(addLi);
  textInput.value = "";
});

function prependLi() {
  let text = $(".text-input").val();
  $("ul").prepend(`<li>${text}</li>`);
}
