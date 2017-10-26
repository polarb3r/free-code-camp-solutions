//Create a function that returns true when the parameter passed is an array and false otherwise.
function isItArray(n){
  console.log(Array.isArray(n));
}

isItArray('hello'); // => false
isItArray(['hello']); // => true
isItArray([2, {}, 10]); // => true
isItArray({ a: 2 }); // => false
//Careful with typeof
