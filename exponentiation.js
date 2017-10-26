/*Write a function that takes two integers. The first one will be the base b and the second one n will be the exponent.

The function should return the value of b raised to the power n.
*/
console.log(exp(5, 3)); // => 125
console.log(exp(2, 4)); // => 16
console.log(exp(5, 1)); // => 5
console.log(exp(6, 0)); // => 1

function exp(n1, n2) {
  return Math.pow(n1, n2);
}
