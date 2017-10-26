/*Take 2 strings s1 and s2 including only letters from a to z.

Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.

Example:*/
function longest(s1, s2){
  s1 = s1.concat(s2).split('').sort();
  s2 = [];
  for (var i = 0; i <=s1.length-1; i++) {
      if(s2.indexOf(s1[i]) === -1){
        s2.push(s1[i]);
      }
    }
  return s2.join('');
 }


console.log(longest('abcccaa', 'acddddffzzz')); // => 'abcdfz'

a = 'xyaabbbccccdefww'
b = 'xxxxyyyyabklmopq'
console.log(longest(a, b)); // => 'abcdefklmopqwxy'

a = 'abcdefghijklmnopqrstuvwxyz'
console.log(longest(a, a)); // => 'abcdefghijklmnopqrstuvwxyz'
