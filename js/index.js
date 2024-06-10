// 1 - masala

// let massiv = [1, 2, 3, 4, 5];
// let yangiMassiv = [];
// massiv.forEach(element => {
//     yangiMassiv.push(element * 2);
// });
// console.log(yangiMassiv);

// 2 - masala

// function musbatQiymatlar(massiv) {
//     let yangiMassiv = [];
//     for (let i = 0; i < massiv.length; i++) {
//         if (massiv[i] >= 0) {
//             yangiMassiv.push(massiv[i]);
//         }
//     }
//     return yangiMassiv;
// }
// let berilganMassiv = [-1, 2, -3, 4, -5, 6];
// let yangiMassiv = musbatQiymatlar(berilganMassiv);
// console.log(yangiMassiv);

// 3 - masala

// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(element) {
//   console.log(element * 2);
// });

// 4 - masala

// function massivYigindisi(massiv) {
//     let yigindi = 0;
//     for (let i = 0; i < massiv.length; i++) {
//         yigindi += massiv[i];
//     }
//     return yigindi;
// }
// let testMassiv = [1, 2, 3, 4, 5];
// let natija = massivYigindisi(testMassiv);
// console.log(natija);

// 1 - masala

// function filterPositive(arr) {
//     return arr.filter(item => item > 0);
// }
// const originalArray = [-3, 5, -7, 10, -2, 8];
// const positiveArray = filterPositive(originalArray);
// console.log(originalArray);
// console.log(positiveArray);

// 2 - masala

// const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = inputArray.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// 3 - masala

// const arr = ["apple", "banana", "pear", "grape", "kiwi", "orange", "melon"];
// const res = berilganMassiv.filter(item => item.length < 5);
// console.log(yangiMassiv);

// 4 - masala

// let odamlar = [
//     {ism: 'Boxodir', yosh: 20},
//     {ism: 'Bobur', yosh: 19},
//     {ism: 'Asal', yosh: 23},
//     {ism: 'Dilshod', yosh: 29}
// ];
// let kattaYoshdagiOdamlar = odamlar.filter(odam => odam.yosh > 18);
// console.log(kattaYoshdagiOdamlar);

// 1 - masala

// let numbers = [1, 2, 3, 4, 5];
// let squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers);

// 2 - masala

// let inputArray = [1, 2, 3, 4, 5];
// let outputArray = inputArray.map(item => item + 5);
// console.log(outputArray);

// 3 - masala

// let numbers = [1, 2, 3, 4, 5];
// let squaredNumbers = numbers.map((num) => num * num);
// console.log(squaredNumbers);

// 4 - masala

// let arr = [1,2,3,4,5,6];
// let res = arr.map(function(value) {
//     return value * 2;
// })
// console.log(res);

// 1 - masala

// let arr = [1,2,3,4,5];
// let a = arr.map(function(value);
//   return value + 5;
// });
// console.log(a);

// 2 - masala

// let massiv = [1, 2, 3, 4, 5];
// let yangiMassiv = massiv.map(element => element * element);
// console.log(yangiMassiv);

// 3 - masala

//  let arr = ['Murodjon'];
//  let upperCaseArray = arr.map(str => str.toUpperCase ());
//  console.log(upperCaseArray);

// 4 - masala

// let arr = [1, 4, 9, 16, 25];
// let a = arr.map(Math.sqrt);
// console.log(a);

// 1 - masala
//  let arr = [1,2,3,-4,-5,-6,];
//  let a = arr.some(function(value){
//   return value;

// });
// console.log(a);

// 2 - masala

// function checkString(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string" && arr[i].length >= 10) {
//       console.log(`"${arr[i]}" uzunligi 10 ta belgidan katta`);
//     } else {
//       console.log(`"${arr[i]}"string yo'q`);
//     }
//   }
// }
// const massiv = ["bca", "abc", 123, "cab"];
// checkString(massiv);

// 3 - masala

//  let arr = [1,2,3,-4,-5,-6,];
//  let a = arr.every(function(value){
//   return value;

// });
// console.log(a);

// 4 - masala

//  let arr = ['murodbek','Shuxratbek','Javohir'];
//  let a = arr.every(function(value){
//   return value;

// });
// console.log(a);

// 1 - masala

// function tekshirish(massiv, element) {
//     return massiv.includes(element);
// }
// const testMassiv = [1, 2, 3, 4, 5];
// const testElement = 3;
// const natija = tekshirish(testMassiv, testElement);
// console.log(natija);

// 2 - masala

// function findIndex(arr, element) {
//     return arr.indexOf(element);
// }
// const arr = [10, 20, 30, 40, 50];
// const element = 30;
// const index = findIndex(arr, element);
// console.log(index);

// 3 - masala

// function findLastIndex(arr, element) {
//     return arr.lastIndexOf(element);
//   }
//   const arr = [10, 20, 30, 40, 30, 50];
//   const element = 30;
//   const lastIndex = findLastIndex(arr, element);
//   console.log(lastIndex);

// 4 - masala

// function findElement(arr, condition) {
//     for (let i = 0; i < arr.length; i++) {
//         if (condition(arr[i])) {
//             return arr[i];
//         }
//     }
//     return null;
// }
// const arr = [5, 10, 15, 20];
// const condition = element => element > 10;
// const result = findElement(arr, condition);
// console.log(result);

// 5 - masala

// function findElementIndex(arr, condition) {
//     for (let i = 0; i < arr.length; i++) {
//       if (condition(arr[i])) {
//         return i;
//       }
//     }
//     return -1;
//   }
//   const arr = [5, 10, 15, 20];
//   const condition = element => element > 10;
//   const index = findElementIndex(arr, condition);
//   console.log(index);

// 6 - masala

// function findLastElement(arr, condition) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//       if (condition(arr[i])) {
//         return arr[i];
//       }
//     }
//     return null;
//   }
//   const arr = [5, 10, 15, 20, 10];
//   const condition = element => element > 10;
//   const result = findLastElement(arr, condition);
//   console.log(result);

// 7 - masala

// function findLastIndex(arr, condition) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//       if (condition(arr[i])) {
//         return i;
//       }
//     }
//   }

//   const array = [5, 10, 15, 20, 25];
//   const condition = element => element > 10;
//   const lastIndex = findLastIndex(array, condition);
//   console.log(lastIndex);

// 8 - masala

// function reverseArray(array) {
//     return array.reverse();
// }
// const originalArray = [1, 2, 3, 4, 5];
// const reversedArray = reverseArray(originalArray);
// console.log(originalArray);
// console.log(reversedArray);

// 9 - masala

// function sortArray(arr) {
//     arr.sort((a, b) => a - b);
//     return arr;
// }
// const masala = [9, 5, 2, 7, 1];
// const oshganMasala = sortArray(masala);
// console.log(oskganMasala);

// 10 - masala

// const array = [1, 2, 3, 4, 5];
// array.forEach((element) => {
//     console.log(element * 2);
// });

// 11 - masala

// function filterPositives(arr) {
//     return arr.filter(num => num > 0);
// }
// const inputArray = [-1, 2, -3, 4, -5, 6];
// const positiveNumbers = filterPositives(inputArray);
// console.log(positiveNumbers);

// 12 - masala

// function kvadrat(massiv) {
//   var yangiMassiv = [];
//   for (var i = 0; i < massiv.length; i++) {
//     yangiMassiv.push(massiv[i] * massiv[i]);
//   }
//   return yangiMassiv;
// }
// var berilganMassiv = [1, 2, 3, 4, 5];
// var yangiMassiv = kvadrat(berilganMassiv);
// console.log(yangiMassiv);