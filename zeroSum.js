//Write a function that expects an array of integers and returns an array of pairs with the indexes of two numbers that sum 0.

//Do not repeat the pair again in the solution.

zeroSum([1, 5, 0, -5, 3, -1]) // => [[0, 5], [1, 3]]
zeroSum([1, -1]) // => [[0, 1]]
zeroSum([0, 4, 3, 5]) // => []

function zeroSum(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      // console.log(array[i])
      // console.log(array[j])
      if (array[i] + array[j] = 0){
        return [j], [i];
      }
    }
  }
}
