//FONKSİYONLAR 

//Function Declaration

// console.log(square(3));

// function square(num) { //parametre
//     return (num * num);
// }

// square(5); // Argüman

// let number = square(5);
// console.log(number);

// console.log(square(4)); //invoke ettik.

//FUNCTION EXPRESSION

// const square = function (num) {
//     return (num * num);
// }
//square variable is a first class function from now on !
//func name is optional

console.log(square);

//FIRST - CLASS FUNCTIONS

// const myArr = [6, "Kerem", function () { console.log("Try!"); }]
// myArr[2]();

// const myObj = {
//     age: 25,
//     name: "Kerem",
//     func: function () { console.log("Tried!"); }
// };

// myObj.func();

// console.log(20 + (function () { return 10; })()) //IIFE