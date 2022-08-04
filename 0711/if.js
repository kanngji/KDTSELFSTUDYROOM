// // let a = 10;
// // let b = 5;

// let a = true;
// let b = false;

// console.log(a && b);

//Switch

// Switch
// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "일요일";
//     break;
//   case 1:
//     day = "월요일";
//     break;

//   case 2:
//     day = "화요일";
//     break;
//   case 3:
//     day = "수요일";
//     break;
//   case 4:
//     day = "목요일";
//     break;
//   case 5:
//     day = "금요일";
//     break;
//   case 6:
//     day = "토요일";
//     break;
// }

// console.log(day);

// let tetz = "이효석";
// //코드를 짧게 짜니까 익혀두자
// tetz === "이효석" ? console.log("맞았어요") : console.log("땡");

// let day;

// day = new Date().getDay();

// if (day === 1) {
//   alert("월요일");
// } else if (day === 2) {
//   alert("화요일");
// } else if (day === 3) {
//   alert("수요일");
// } else if (day === 4) {
//   alert("목요일");
// } else if (day === 5) {
//   alert("금요일");
// } else if (day === 6) {
//   alert("토요일");
// } else if (day === 0) {
//   alert("일요일");
// }

// for (let i = 0; i < 100; i++) {
//   console.log(i + "번째 반복중");
// }

//While 문
// let index = 0;

// while (index < 10) {
//   console.log("인사를 ", index + 1, "번째 드립니다.");
//   index++;
// }

// let index2 = 0;
// while (1) {
//   console.log("인사를 또 ", index2 + 1, "번째 드립니다.");
//   index2++;
//   if (index2 == 10) {
//     break;
//   }
// }

// for (i = 1; i < 10; i++) {
//   for (j = 1; j < 10; j++) {
//     console.log(`${i}*${j}=${i * j}`);
//   }
// }
let sum = 0;
for (let i = 0; i < 101; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    sum = sum + i;
  }
}
console.log(sum);
