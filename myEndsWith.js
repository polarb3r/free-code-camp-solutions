//writing out the .endsWith() method

//returns true or false

//version1

function confirmEnding(str, target) {
  return str.split("").reverse().splice(0, target.length).reverse().join("") === target;
}

console.log(confirmEnding("Open sesame", "same"));

//=======================================================

//version2

function confirmEnding1(str1, trg1) {
  return str1.substr(str1.length-trg1.length) === trg1;
}

console.log(confirmEnding1("Open sesame", "me"));

//=======================================================
