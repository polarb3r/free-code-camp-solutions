/*Create a function that checks whether all the element of an array are the same datatype

For example, whether they are all a String or a number.*/

function areSameType(n){
  for(var i = 0; i < n.length - 1; i++) {
    if (typeof n[i] === typeof n[i+1]){
      var answer = true;
    } else {
      var answer = false;
    }
    return console.log(answer);
  }
}

areSameType(['hello', 'world', 'long sentence']) // => true
areSameType([1, 2, 9, 10]) // => true
areSameType([['hello'], 'hello', ['bye']]) // => false
areSameType([['hello'], [1, 2, 3], [{ a: 2 }]]) // => true
