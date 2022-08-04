// let number = 123;
// let string = "hello";
// let man = true;
// let address = null;

// console.log(typeof number, "isn't ", typeof string, " data type");
// console.log(
//   `typeof를 ${typeof man}이나 "null"에 사용하면,${typeof null}결과를 얻을 수 있습니다. `
// );

// console.log(typeof null);
// console.log(typeof "핑크퐁");
// console.log(typeof 77);
// console.log(typeof {});

// let mathScore = prompt("수학 점수를 입력하세요");
// let engScore = prompt("영어 점수를 입력하세요");

// // #Number 대소문자 잘 가려서 써야한다
// mathScore = Number(mathScore);
// engScore = Number(engScore);
// // console.log(mathScore, engScore);
// let avgScore = (mathScore + engScore) / 2;
// console.log(avgScore);

// let mathScore = "77";
// let engScore = "88";

// let avgScore = (Number(mathScore) + Number(engScore)) / 2;
// console.log(avgScore);

// let nameArray = ["강유림", "강지훈", "강한솔", "김윤비"];
// console.log(nameArray.length);

// for (let i = 0; i < nameArray.length; i++) {
//   console.log(`${i + 1}번째 사람의 이름은 ${nameArray[i]}`);
// }

// let sq = 2 ** 2;
// console.log(sq);

// // 4에 루트를 씌우면 2가나온다
// let num = Math.sqrt(81);
// console.log(num);

// let num = 10;
// // num=num+5 랑 같은것
// num += 5;
// console.log(num);

// let num = 5;
// num++;
// num += 1;
// console.log(num);

// let result1, result2;
// let num1 = 10,
//   num2 = 10;

// result1 = num1++;
// console.log(result1);

// result2 = ++num2;
// console.log(result2);

// 실습!!
// let num = 10;
// num++;
// console.log(num);
// num -= 2;
// console.log(num);
// num = 10;
// num /= 2;
// console.log(num);
// num = 10;
// num /= 5;
// console.log(num);
// num *= 15;
// console.log(num);

// let a = 1;
// let b = "1";
// // true가 나온다
// console.log(a == b);
// // false가 나온다
// console.log(a === b);

// let name = "뽀로로";
// let age = 16;
// // isAdult가 false가 되용
// let isAdult = age > 19;

// if (isAdult) {
//   console.log("통과");
// } else {
//   console.log("돌아가!");
// }

// 여성이고 ,이름이 jane 이거나 성인이면 통과
// let gender = "M";
// let name = "TOM";
// let isAdult = true;

// if (gender === "F" && (name === "Jane" || isAdult === true)) {
//   console.log("통과");
// } else {
//   console.log("돌아가");
// }

// isAdult = true;
// grade = "VIP";
// isDrunken = true;
// money = true;

// if (money) {
//   console.log("텅과");
// }

// if (isAdult || grade === "VIP") {
//   console.log("통과");
// }

// if (isDrunken) {
//   console.log("돌아가");
// }

// let isDrunken = false;
// console.log(!isDrunken);

// for문 반복줄이기
// for (let i = 1; i < 10001; i+=13) {
//   if (i % 13 === 0 && i % 2 === 1) {
//     console.log(i);
//   }
// }

// var num = prompt("숫자를 입력하세요");
// num = Number(num);
// for (let i = 1; i < num + 1; i += 13) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

// let i = 2,
//   j = 1;
// while (i < 10) {
//   while (j < 10) {
//     console.log(`${i} x ${j} = ${i * j}`);
//     j++;
//   }
//   i++;
//   j = 1;
// }

// do... while 코드가 최소 1번은 실행된다.

// let i = 10;

// do {
//   console.log(`do-while 반복문이 ${i}번째 실행 중입니다.`);
// } while (i < 10);

// //while

// let j = 10;

// while (j < 10) {
//   console.log(`반복문이 ${j}번째 실행 중입니다.`);
// }

// let sum = 0;
// for (let i = 1; i < 101; i++) {
//   if (i % 2 === 1) {
//     continue;
//   }
//   sum += i;
// }
// console.log(sum);

// function sayHello(name) {
//   console.log(`hello ${name}!`);
// }

// sayHello("kangji");

// function square(number, 제곱근) {
//   return number ** 제곱근;
// }

// console.log(square(2, 3));

// // 매개변수 기본값 설정하기
// function sayHello(name = "friend") {
//   console.log(`Hello, ${name}`);
// }
// sayHello("kanghi");

// 삼각형 넓이 구하는 함수
// function tri(x, h) {
//   return (x * h) / 2;
// }
// console.log(tri(3, 4));

// //원의 넓이 구하는 함수
// function cir(r) {
//   return r ** 2;
// }
// console.log(cir(9), "pi");

// //피타고라스 정리 함수
// function pytha(a, b) {
//   return Math.sqrt(a ** 2 + b ** 2);
// }
// console.log(pytha(3, 4));

// sayHello();
// // heyHello();

// //함수선언문
// function sayHello() {
//   console.log("Hello");
// }

// //함수표현식
// let heyHello = function () {
//   console.log("Hello");
// };

// heyHello();

// let sayHello = function () {
//   console.log("Say Hello");
// };

// let bayHello = () => {
//   console.log("안녕");
// };
// 삼각형 넓이 구하는 함수
// let tri = function (x, h) {
//   return (x * h) / 2;
// };
// console.log(tri(2, 6));

// //원의 넓이 구하는 함수
// let circle = (r) => {
//   return r ** 2 * 3.14;
// };
// console.log(circle(3));

//피타고라스 정리 함수
// function pytha(a, b) {
//   return Math.sqrt(a ** 2 + b ** 2);
// }
// console.log(pytha(3, 4));

// let pita = function (a, b) {
//   return Math.sqrt(a ** 2 + b ** 2);
// };
// console.log(pita(3, 4));

// let pita2 = (a, b) => {
//   return Math.sqrt(a ** 2 + b ** 2);
// };
// console.log(pita2(3, 4));

// let kdt = ["진형", "영은", "지훈", "소민"];
// console.log(kdt[0]);

let kdt = [
  "진형",
  "영은",
  "의진",
  "지현",
  "소민",
  "민정",
  "승수",
  "다영",
  "종익",
  "승환",
  "유림",
  "원",
  "해성",
  "세영",
  "민정",
  "한솔",
  "준우",
  "수지",
  "윤비",
  "혜영",
];

// console.log(kdt[5]);
// console.log(kdt.length);
// // push
// kdt.push("테츠");
// console.log(kdt);
// // pop
// kdt.pop();
// console.log(kdt);

// kdt.push("지훈");
// kdt.pop();
// console.log(kdt);
// kdt.unshift("지훈 맨앞");

// console.log(kdt);

// for (let i = 0; i < kdt.length; i++) {
//   console.log(`${i + 1}번째 사람의 이름은 ${kdt[i]}입니다.`);
// }

// let hello = "Hello";
// let helloArr = hello.split("");
// console.log(helloArr);

// // .split : 문자를 인수를 기준으로 쪼개서 배열로 반환
// // .reverse : 배열의 순서를 뒤집어서 반환
// // .join : 배열을 인수 기준으로 병합해서 반환

// let reverseArr = helloArr.reverse();
// console.log(reverseArr);

// let joinStr = reverseArr.join("");
// console.log(joinStr);

// let hello = "Hello";
// let result = hello.split("").reverse().join("");
// console.log(result);

// const superMan = {
//   name: "clark",
//   age: 33,
//   height: 187,
//   weight: 77,
// };
// // undefined 뜬다
// console.log(superMan.condition);
// console.log(superMan);
// console.log(superMan.name);
// console.log(superMan["age"]);

// superMan.hairColor = "blond";
// superMan["job"] = "기자";

// console.log(superMan);

const pororo = {
  name: "뽀로로",
  age: 7,
  cute() {
    console.log("뽀로로는 귀엽습니다.");
  },
};

// console.log(pororo.name);
// console.log(pororo["age"]);
// pororo.gender = "man";
// console.log(pororo.gender);
// pororo.height = 100;
// console.log(pororo["height"]);
// delete pororo.gender;
// console.log(pororo);

// console.log("name" in pororo);
// console.log("height" in pororo);

// for (key in pororo) {
//   console.log(key);
//   console.log(pororo[key]);
// }

console.log(pororo.cute);
