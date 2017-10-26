
function chunkArrayInGroups(arr, size) {
  var arr2 = [];
  while (arr.length> 0){
    for (var i = 0; i < arr.length; i++) {
      var x = arr.splice(0, size);
      arr2.push(x);
    }
  }
  return arr2
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
