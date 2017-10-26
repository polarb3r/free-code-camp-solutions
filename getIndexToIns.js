// NOTE sort turn items into strings and then compares
// with numbers 80 will come before 9
// therefore insert bellow method inside sort


function getIndexToIns(arr, num) {
  arr = arr.sort(function (a, b) {return a-b;});
  console.log(arr);
  if (num > arr[arr.length-1]) {
    return arr.length;
  }
  for(var i = 0; i < arr.length; i++){
    if(arr[i] >= num){
      return arr.indexOf(arr[i]);
    }
  }
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
