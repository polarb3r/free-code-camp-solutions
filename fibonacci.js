//Write a function that expects an integer n and returns the first n numbers of the fibonacci series.

//For example:
//answer given by teacher
function fibs(n) {
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }

  var prevFibs = fibs(n - 1);
  var lastIndex = prevFibs.length - 1;

  return prevFibs.concat([prevFibs[lastIndex] + prevFibs[lastIndex - 1]]);
}

console.log(fibs(3)); // => [0, 1, 1]
console.log(fibs(7)); // => [0, 1, 1, 2, 3, 5, 8]
console.log(fibs(1)); // => [0]

//to return the answer as an array
function fibonacci(n) {
  var result = [0, 1];
  var result2 = [0];
  var ar = 1;

  for (let i = 0; i < n-2; i++){
    ar = ar+result[i];
    result.push(ar);
  }

  if (n === 1){
    return result2;
  }else{
    return result;
  }
}

console.log(fibonacci(3)); // => [0, 1, 1]
console.log(fibonacci(7)); // => [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacci(1)); // => [0]


//to return the nth term
function nthFibonacci(n) {
  var result = [0, 1];
  var ar = 1;

  for (let i = 0; i < n-1; i++){
    ar = ar+result[i];
    result.push(ar);
  }

  return result[n];
}

console.log(nthFibonacci(87));

//breaks after @78th fibonacci

// 8944 3943 2379 1464 // 78th fibonacci (fine)

// 9007 1992 5474 0991 // max safe integer

// 1447 2334 0246 7622 1 // 79th fibonacci
// 1447 2334 0246 7622 0 // given back through my code (over max safe integer)

// 6798 9163 7638 6122 58 // 87th fibonacci
// 6798 9163 7638 6122 00 // my outcome

// 1353 0185 2344 7067 4 6049 // 98th fibonacci
// 1353 0185 2344 7067 6 0000 // my outcome

// 3542 2484 8179 26 19 15075 // 100th fibonacci
// 3542 2484 8179 26 20 00000 // my outcome
