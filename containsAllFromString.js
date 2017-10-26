
function mutation(arr) {
  arr1 = arr[1].toLowerCase().split("");
  arr = arr[0].toLowerCase().split("");
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr1.length; j++) {
      if (arr.indexOf(arr1[j]) === -1){
        return false;
      }
    }
  }
  return true
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Aarmy"]));
