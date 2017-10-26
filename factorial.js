/*If you don't know what a factorial is, first get yourself familiarized with the concept here.

It's simple, the factorial of a number is all they previous integers multiplied. For example the factorial of five -factorial is expressed with an exclamation mark- 5! is 5 * 4 * 3 * 2 * 1 which is 120.

Write a function that expects an integer greater than 0 and returns the factorial of that number.*/

//refactored1

function factorialR1(n){
    arr = Array.apply(null, Array(n)).map(function(e, i) {return i+1});
    arr.push(1);
    return arr.reduce(function(acc, curr) {return acc * curr});
}

console.log(factorialR1(5)); // => 120
console.log(factorialR1(4)); // => 24
console.log(factorialR1(0)); // => 1

//NOTE an array with empty values e.g.
//var arr = new Array(5);
//arr = [< 5 empty items >]

//==============================================

//basic

// function factorial1(n){
//   if (n === 0){
//     return 1;
//   } else {
//     return (factorial1(n-1)) * n;
//   }
// }
//
// console.log(factorial1(5)); // => 120
// console.log(factorial1(4)); // => 24
// console.log(factorial1(0)); // => 1

//==============================================

//big version

// function myFactorial(n){
//   var result = 1;
//   var i = 0;
//
//   while (i < n){
//     result2 = result * i;
//     result += result2;
//     i++;
//   }
//
//   return result;
// }

// console.log(myFactorial(5)); // => 120
// console.log(myFactorial(4)); // => 24
// console.log(myFactorial(0)); // => 1
