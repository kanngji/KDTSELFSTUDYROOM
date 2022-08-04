// const pororo = {
//   name: "뽀로로",
//   height: 70,
//   weight: 50,
//   gender: "None",
//   say() {
//     console.log("뽀로로가 말을 합니다");
//   },
//   getName() {
//     console.log(`pororo의 이름은${this.name}입니다`);
//   },
//   showHeight,
// };
// pororo.getName();
// function showHeight() {
//   console.log(`${this.height}`);
// }
// pororo.showHeight();

// const luffy = {
//   name: "루피",
//   height: 50,
//   weight: 40,
//   gender: "Woman",
//   showHeight,
// };
// luffy.showHeight();
// pororo.say();

// for (let key in pororo) {
//   console.log(key, pororo[key]);
//   console.log(pororo[key]);
//}

// 객체 object 메소드 method
// function sayHello() {
//   console.log(`Hello, I'm ${this.name}`);
// }
// let boy = {
//   name: "Justin",
//   //추가할때 소괄호 쓰면 안되요
//   sayHello,
// };

// let girl = {
//   name: "Anna",
//   sayHello,
// };

// boy.sayHello();
// girl.sayHello();

// 화살표 함수는 일반 함수와는 달리 자신의 this를 가지지 않음
// 화살표 함수 내부에서 this를 사용하면 그 this는 외부애서 값을 가져옴

// function Fruits(name, price) {
//   this.name = name;
//   this.price = price;
//   this.showPrice = function () {
//     console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
//   };
// }

// let orange = new Fruits("오렌지", 3000);
// let dragonFruit = new Fruits("용과", 2500);
// let banana = new Fruits("바나나", 2000);
// let pineApple = new Fruits("파인애플", 5000);

// orange.showPrice();
// dragonFruit.showPrice();
// banana.showPrice();
// pineApple.showPrice();

function Kdt(name, gender) {
  this.name = name;
  this.gender = gender;
  this.getInfo = function () {
    console.log(`${this.name}이고 성별은 ${this.gender}입니다`);
  };
}
let jihoon = new Kdt("강지훈", "남");
let somin = new Kdt("이소민", "여");
let jihyun = new Kdt("이지현", "여");
let Ueejin = new Kdt("정의진", "여");
jihoon.getInfo();
somin.getInfo();
jihyun.getInfo();
Ueejin.getInfo();
