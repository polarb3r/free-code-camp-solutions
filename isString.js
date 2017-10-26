//Create a function that returns true when the parameter passed is a string and false otherwise.

function isString(n){
  return typeof n === 'string';
}

console.log(isString('hello')); // => true
console.log(isString(['hello'])); // => false
console.log(isString('this is a long sentence')); // => true
console.log(isString({ a: 2 })); // => false
