//Given a random number. You have to return the digits of this number within an array in reverse order.

function convert(num){
  return num.toString().split("").map(Math.floor).sort().reverse();
}

console.log(convert(429563)); // => [9, 6, 5, 4, 3, 2]
console.log(convert(324)); // => [4, 3, 2]
