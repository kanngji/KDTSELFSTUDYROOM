// let nums = [-1.23, 13, 14.52, -33.53, 30];

// //전개 연산자
// let minnum = Math.min(...nums);
// let maxnum = Math.max(...nums);

// // console.log(minnum);
// // console.log(maxnum);

// minnum = Math.floor(minnum);
// maxnum = Math.floor(maxnum);

// let avg = (Math.abs(minnum) + Math.abs(maxnum)) / 2;
// console.log(minnum);
// console.log(maxnum);
// console.log(avg);

// //0~100 정수 랜덤 하나 나오게

// let rnum = Math.floor(Math.random() * 100);
// console.log(rnum);

// let numbers1 = [1, 2, 3, 4];
// let numbers2 = [1, 2, 3, 4];

// numbers1 = numbers1.splice(2, 2);
// console.log(numbers1);

// numbers2.pop();
// numbers2.pop();
// numbers2.push(77);
// numbers2.push(4);

// console.log(numbers2);

// const numbers1 = [1, 2, 3, 4];
// const numbers2 = [1, 2, 3, 4];

// numbers1.splice(0, 2);
// numbers2.splice(2, 1, 77);

// console.log(numbers1);
// console.log(numbers2);

// let numbers = [1, 2, 3, 4, 5, 6];
// let fruits = ["사과", "바나나", "수박", "포도", "파인애플"];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// console.log("바뀐다");
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for of 문
// for (let number of numbers) {
//   console.log(number);
// }

// for (let item of fruits) {
//   console.log(item);
// }

// 굿굿!

// numbers.forEach(function (item, index, array) {
//   console.log(item, index, array);
// });

// fruits.forEach(function (f, i, a) {
//   console.log(f, i, a);
// });

// numbers.forEach((item, index, array) => {
//   console.log(item, index, array);
// });

// let numbers = [1, 2, 3, 4, 5, 6];

// let sum1 = 0;
// let sum2 = 0;
// let sum3 = 0;

// for (let i = 0; i < numbers.length; i++) {
//   //요소값을 더해야한당!
//   sum1 += numbers[i];
// }

// for (let item of numbers) {
//   sum2 += item;
// }
// // 이게 중요하다!!!
// numbers.forEach(function (item) {
//   sum3 += item;
// });

// console.log(sum1, sum2, sum3);

// numbers = [];
// for (let i = 1; i <= 100; i++) {
//   numbers.push(i);
// }
// //배열 생성
// console.log(numbers);

// // 해당배열의 합을 for문
// let sum1 = 0;
// let sum2 = 0;
// let sum3 = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum1 += numbers[i];
// }
// for (let item of numbers) {
//   sum2 += item;
// }
// numbers.forEach(function (item) {
//   sum3 += item;
// });
// console.log(sum1, sum2, sum3);

// let numbers = [1, 2, 3, 4, 5, 6];

// let fore = numbers.forEach(function (item) {
//   return item;
// });

// let map = numbers.map(function (item) {
//   return item;
// });

// let map2 = numbers.map((item) => item);

// console.log(fore);
// console.log(map);

// const fruits = ["사과", "파인애플", "수박", "포도", "오렌지"];

// let obj = fruits.map(function (item, index) {
//   return {
//     id: index + 1,
//     name: item,
//   };
// });

// console.log(obj);

// let numbers = [1, 2, 3, 4, 5, 6];

// let reduce = numbers.reduce(function (sum, item, index, arr) {
//   console.log(sum, item, index, arr);
//   return sum + item;
// });

// let numbers = [];

// for (let i = 1; i <= 100; i++) {
//   numbers.push(i);
// }

// let redue = numbers.reduce(function (sum, item) {
//   return sum + item;
// });

// let str = "apple";

// console.log([...str]);

// [...str].forEach(function (item, index, arr) {
//   console.log(item, index, arr);
// });

// let numbers = [1, 2, 3, 4, 5, 6];
// let arr = numbers.filter(function (item) {
//   return item > 3;
// });

// //화살표 위에꺼랑 아래꺼랑 같당
// let arr2 = numbers.filter((item) => item > 3);
// console.log(arr);

///이후로 나오는거 외워라
// let fruits1 = [
//   "사과",
//   "딸기",
//   "파인애플",
//   "수박",
//   "참외",
//   "오렌지",
//   "자두",
//   "망고",
// ];
// let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];
// let same = [];
// let same2 = [];
// let diff = [];
// let diff2 = [];

// same = fruits1.filter((item) => fruits2.includes(item));

// fruits1.forEach(function (item) {
//   if (fruits2.includes(item)) {
//     same2.push(item);
//   }
// });

// diff = fruits1.filter((item) => !fruits2.includes(item));

// fruits2.forEach(function (item) {
//   if (!fruits2.includes(item)) {
//     diff2.push(item);
//   }
// });

// console.log(same);
// console.log(diff);

// let obj1 = { a: 1, b: 2 };
// let obj2 = { b: 3, c: 4 };

// let assignedObj = Object.assign(obj1, obj2);

// console.log(assignedObj);
// console.log(obj1);
// console.log(obj2);

const fruits = ["사과", "바나나", "수박"];
console.log(fruits);
console.log(...fruits);
