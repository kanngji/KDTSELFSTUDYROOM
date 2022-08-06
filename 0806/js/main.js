// alert("연결확인용");
console.log("hi");
const main = document.querySelector("main");
const btns = document.querySelectorAll("#nav li");
const btnsLen = btns.length;
console.log(btns);

let before = -1;

//이 코드 이해하기!!
for (let i = 0; i < btnsLen; i++) {
  btns[i].addEventListener("click", function () {
    if (before === -1 && i !== 0) {
      before = i;
      btns[0].classList.remove("on");
      //   클릭된 리스트한테 on 주기
      btns[i].classList.add("on");
    } else if (before !== i) {
      btns[before].classList.remove("on");
      btns[i].classList.add("on");
      before = i;
    }
  });
}
